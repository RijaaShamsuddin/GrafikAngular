import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { UserService } from '../_services/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    model: any = {};
    loading = false;
 
    constructor(
        private router: Router,
        private userService: UserService ) {}
    
 
    register() {
        this.loading = true;
        this.userService.registerUser(this.model.email, this.model.password, this.model.newsletter === true ? 1 : 0)
            .subscribe(data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    console.log(data);
                    this.router.navigate(['/login']);
                },
                error => {
                    console.log(error);
                    this.loading = false;
                });
    }
}