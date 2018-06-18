import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import { UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-sectionlist',
  templateUrl: './sectionlist.component.html',
  styleUrls: ['./sectionlist.component.css']
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
  isAdmin = false;
  loadSections(courseId) {
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
    console.log(this.courseId)
    this.service.deleteSection(sectionId);

  }

  ngOnInit() {

    this.loadSections(this.courseId);
    this.service1.profile().then((response) => {
      console.log(response);
      if(response.username == 'admin'){
        this.isAdmin = true;
      }

    });
 
}
}
