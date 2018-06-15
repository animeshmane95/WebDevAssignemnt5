import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonServiceClient} from "../services/lesson.service.client";

@Component({
  selector: 'app-lessonlist',
  templateUrl: './lessonlist.component.html',
  styleUrls: ['./lessonlist.component.css']
})
export class LessonlistComponent implements OnInit {

  constructor(private service: LessonServiceClient,
              private route: ActivatedRoute) {
  	this.route.params.subscribe(
      params => this.setParams(params));
               }
 courseId;
  moduleId;
  lessonId;
  lessons = [];

   setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.loadLessons(this.moduleId,this.courseId);
  }

   loadLessons(moduleId,courseId) {
    this.moduleId = moduleId;
    console.log(moduleId);
    this.service.findLessonsForModule(moduleId,courseId)
      .then(lessons => this.lessons = lessons);
  }




  ngOnInit() {
  }

}
