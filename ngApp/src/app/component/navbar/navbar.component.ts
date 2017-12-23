import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [
        './navbar.component.css'
    ]
})

export class NavbarComponent{
    // Setting state to true or false will generate the appropriate selections
    public loggedIn = false;
    public username;
    public password;

    constructor(private http: HttpClient, private router: Router){

    }

    public loginAccount() {
      let body = {"username":this.username, "password":this.password}
       this.http.post('http://localhost:3000/flashboard/login', body)
       .subscribe(
            res => {
                console.log(res);
                this.router.navigate(['profile']);
                this.loggedIn = true;
                //change loggedIn = true;
            },
            err => {
                console.log(err + " Error occured");
            });
    }

    public logOutAccount(){
      this.loggedIn = false;
      this.router.navigate(['home']);
    }
}
