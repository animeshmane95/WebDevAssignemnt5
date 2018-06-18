import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from "../services/section.service.client";
import {Section} from "../models/section.model.client";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-section',
  templateUrl: './update-section.component.html',
  styleUrls: ['./update-section.component.css']
})
export class UpdateSectionComponent implements OnInit {

  sectionId;
  constructor(private sectionService: SectionServiceClient,
              private router: Router,
               private route: ActivatedRoute) { this.route.params.subscribe(
      params => this.setParams(params));}

    setParams(params){
      this.sectionId = params['sectionId'];
      console.log(this.sectionId)
    }
  section ={};

  updateSection(section) {
    
    console.log(section);
    this.sectionService.updateSection(section).then((response) =>{
      alert(response)
    })
  }


  ngOnInit() {



  this.sectionService.section(this.sectionId).then((section) => 
  	this.section = section)
  }

}
