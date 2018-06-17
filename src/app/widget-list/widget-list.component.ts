import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonServiceClient} from "../services/lesson.service.client";

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  courseId;
  moduleId;
  lessonId;
  topicId;
  widgetId;
  widgets = [];

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
    this.loadWidgets(this.topicId);
  }

  loadWidgets(topicId) {
    this.topicId = topicId;
    console.log(topicId);
    this.service.findWidgetsForTopic(topicId)
      .then(widgets => this.widgets = widgets);
  }

  ngOnInit() {
  }

}
