import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
import { AuthenticationService } from '../_services/index';
import { User } from '../_models/index';
 

@Injectable()
export class UserService {
   
    public headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
}

getUsers(): Observable<User[]> {
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.get('/api/users', options)
        .map((response: Response) => response.json());
}

registerUser(email: string, password: string, newsletter: number ): Observable<User[]> {
    
    return this.http.post('http://192.168.100.107/gservices/index.php/api/v1/register', JSON.stringify({ email: email, password: password, newsletter: newsletter }), {headers:this.headers})
        .map((response: Response) => response.json());
}
}
