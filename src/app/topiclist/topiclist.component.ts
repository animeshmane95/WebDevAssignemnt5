import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonServiceClient} from "../services/lesson.service.client";


@Component({
  selector: 'app-topiclist',
  templateUrl: './topiclist.component.html',
  styleUrls: ['./topiclist.component.css']
})
export class TopiclistComponent implements OnInit {

  courseId;
  moduleId;
  lessonId;
  topicId;
  topics = [];

  constructor(private service: LessonServiceClient,
              private route: ActivatedRoute) { 
  	
  	this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId']
    this.loadTopics(this.moduleId,this.courseId,this.lessonId);
  }

  loadTopics(moduleId,courseId,lessonId) {
    this.moduleId = moduleId;
    console.log(moduleId);
    this.service.findTopicsForLesson(moduleId,courseId,lessonId)
      .then(topics => this.topics = topics);
  }

  ngOnInit() {
  }

}
