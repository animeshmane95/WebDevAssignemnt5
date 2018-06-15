import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { CourseGridComponent } from './CourseGrid/course-grid.component';
import { CourseViewerComponent } from './CourseViewer/course-viewer.component';
import {CourseServiceClient} from "./services/course.service.client";
import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { ModuleListComponent } from './module-list/module-list.component'
import ModuleServiceClient from "./services/module.service.client";
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { LessonlistComponent } from './lessonlist/lessonlist.component';
import {LessonServiceClient} from "./services/lesson.service.client";
@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    CourseNavigatorComponent,
    LessonlistComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [CourseServiceClient, 
              ModuleServiceClient,
              LessonServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
