import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {Course} from "../models/coruse.model.client";
import { UserServiceClient} from "../services/user.service.client";
import { SectionServiceClient} from "../services/section.service.client";
@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient, 
    private service1: UserServiceClient,
    private service2: SectionServiceClient ) { }

  courses: Course[] = [];
  studentCourses = [];
  studentEnrolledCourses: Course[] = [];
  isLoggedIn = false;
  isAdmin = false;
  isRegistered = false;
  isNotAdmin = false;
  studentSections = [];
   user = {};

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);

    this.service1.profile().then((response) => {
      this.user = response;
      console.log(response);
      if(response!=null){
        this.isLoggedIn = true;
      }
      if(response != null && response.username != "admin" ){
        this.isNotAdmin = true;
        this.service2.findSectionsForStudent().then((response)=>{
          this.studentSections = response
          console.log(this.studentSections)
          for(let sections of this.studentSections){
            if(sections.section != null){
              this.studentCourses.push(sections.section.courseId)
            }
            
          }

          for (let course of this.studentCourses){
            this.service.findCourseById(course).then((response)=>{
              this.studentEnrolledCourses.push(response)
            })
          }

          console.log(this.studentEnrolledCourses)

        });



      }

      if (response.username == "admin"){
        this.isAdmin = true;
        this.isNotAdmin = false;
      }

      

    });
      
  }


}