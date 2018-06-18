import { Component, OnInit } from '@angular/core';
import { UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor( private service1: UserServiceClient,private router: Router) { }

  logout() {
    this.service1
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }
  isLoggedIn = false;
  isAdmin = false;

  ngOnInit() {

  	this.service1.profile().then((response) => {
      console.log(response);
      if(response != null){
        this.isLoggedIn = true;
      }

      if (response.username == 'admin'){
      	this.isAdmin = true;
      }
      console.log(response.username);
      console.log(this.isAdmin);

    });
  }

}
