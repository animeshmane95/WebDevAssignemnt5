import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from "../services/section.service.client";
import {Section} from "../models/section.model.client";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.css']
})
export class EnrollmentsComponent implements OnInit {
	students = []
	sectionId;
  constructor(private sectionService: SectionServiceClient,private route: ActivatedRoute) { 
  this.route.params.subscribe(
      params => this.setParams(params));}

  setParams(params){
      this.sectionId = params['sectionId'];
      console.log(this.sectionId)
    }

  ngOnInit() {
  	this.sectionService.findStudentsForSection(this.sectionId)
  	.then((students)=>{

  		this.students = students
  		  	console.log(this.students);

  	}
  	);
  }

}
