import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  user = {};
  user1 ={};
  username;
  password;
  sections = [];
  isAdmin = false;

  update(user) {
    
    console.log(user);
    this.service.updateUser(user).then((response) =>{
      alert(response)
    })
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  unenrollUser(section,user){
    console.log(user._id)
    console.log(section.section._id)
    this.sectionService.unenrollStudentInSection(section,user)
    .then(()=> window.location.reload());
  }

  ngOnInit() {

  	 this.service
      .profile()
      .then((user) => {
        this.user = user
        if (user.username == "admin"){
          console.log("Admin Profile")
          this.isAdmin = true;
        }
        else {
          console.log("Non Admin Profile")
        }
      });

    this.sectionService
      .findSectionsForStudent()
      .then((sections) =>{ 
        console.log("These are sections" + sections.length)
        for(let section of sections){
          if(section.section == null){
            console.log("true")
          }
          else{
           this.sections.push(section)
          }
          }
       
        console.log(this.sections);} );
  }

}
