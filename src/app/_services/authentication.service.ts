import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  public token: string;
  public headers = new Headers({'Content-Type': 'application/json'});
 
    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
 
    login(email: string, password: string): Observable<boolean> {
        return this.http.post('http://192.168.100.107/gservices/index.php/api/v1/login', JSON.stringify({ email: email, password: password }),{headers:this.headers})
            .map((response: Response) => {
                console.log(response.json());
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().data;
                if (token) {
                    // set token property
                    this.token = token;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
