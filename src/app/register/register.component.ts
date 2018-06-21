import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  users1 = [];
  flag = 0;
  register(username, password, password2) { 
    if(password == password2){
      this.service.findUsers().then((response)=>{
        for (let user of response){
          this.users1.push(user.username);
        }

        console.log(this.users1)

        for(let names of this.users1){
          if(names == username){
            this.flag = 1;
          }
        }

        if(this.flag == 1){
          alert("username already exists")
          window.location.reload();
        }

         else{
           this.service
       .createUser(username, password)
       .then(() =>
         this.router.navigate(['profile']));}

        }

      );}

    // this.service
    //   .createUser(username, password)
    //   .then(() =>
    //     this.router.navigate(['profile']));}
     else{
       alert("Passwords do not match");
        window.location.reload();

      }
  }


  ngOnInit() {
  }

}
