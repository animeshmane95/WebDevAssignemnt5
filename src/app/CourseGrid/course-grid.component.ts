import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {Course} from "../models/coruse.model.client";
import { UserServiceClient} from "../services/user.service.client";
@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient, private service1: UserServiceClient) { }

  courses: Course[] = [];
  isLoggedIn = false;
  isAdmin = false;

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);

    this.service1.profile().then((response) => {
      console.log(response);
      if(response != null){
        this.isLoggedIn = true;
      }

      if (response.username = "admin"){
        this.isAdmin = true;
      }

      

    });
      
  }


}