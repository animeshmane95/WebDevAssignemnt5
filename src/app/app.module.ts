import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CourseGridComponent } from './CourseGrid/course-grid.component';
import { CourseViewerComponent } from './CourseViewer/course-viewer.component';
import {CourseServiceClient} from "./services/course.service.client";
import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { ModuleListComponent } from './module-list/module-list.component'
@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent

  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [CourseServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
