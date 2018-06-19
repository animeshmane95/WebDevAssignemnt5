import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import { UserServiceClient} from "../services/user.service.client";
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sectionlist',
  templateUrl: './sectionlist.component.html',
  styleUrls: ['./sectionlist.component.css'],
 
})



export class SectionlistComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private service1: UserServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
              this.route.params.subscribe(params => this.loadSections(params['courseId'])) }
sectionName = '';
  seats = '';
  courseId = '';
  sections = [];
  sectionIds = [];
  courseSectionIds = [];
  isAdmin = false;
  isEnrolled = false;
  loadSections(courseId) {
    console.log("Inside Load sections" + " " + courseId);
    this.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  enroll(section) {
    // alert(section._id);
    this.service
      .enrollStudentInSection(section._id)
      .then(() => {
        this.router.navigate(['profile']);
      });
  }


  deleteSection(sectionId){
    console.log("This is course: "+this.courseId)
    this.service.deleteSection(sectionId)
    window.location.reload();

  }

  getStudent(studentId){
    console.log("Hello" + studentId)
  }

  ngOnInit() {

    this.loadSections(this.courseId)
    this.service.findSectionsForCourse(this.courseId).then((response)=>{
      for (let section of response){
        this.courseSectionIds.push(section._id)
      }
      console.log("there1"+this.courseSectionIds);
    });

    this.service1.profile().then((response) => {
      console.log("User Id:"+response._id);
      if(response.username == 'admin'){
        this.isAdmin = true;
      } 



    }
    );

    this.service1.profile().then((response)=>{
      if(response.username != "admin"){

        this.service.findSectionsForStudent().then((response)=>{
          for(let section of response){
            try {
                 if(section.section._id != null){
                this.sectionIds.push(section.section._id)
              }
                } catch (e) {
                  if (e instanceof TypeError) {
                          console.log(e, true);
                      } else {
                         console.log(e, false);
                      }
                  }


            
          }
           console.log("There"+this.sectionIds);
        }



          );

      }
    });
    console.log("Here"+this.courseSectionIds);
    console.log("Here 1"+this.sectionIds);
 
}
}
