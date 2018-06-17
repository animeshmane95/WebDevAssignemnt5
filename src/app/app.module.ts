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
import { TopiclistComponent } from './topiclist/topiclist.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {CourseNavigatorServiceClient} from "./services/course-navigator.service.client";
import { WhiteBoardComponent } from './white-board/white-board.component';
import { LoginComponent } from './login/login.component';
import {UserServiceClient} from "./services/user.service.client";
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SectionlistComponent } from './sectionlist/sectionlist.component';
import {SectionServiceClient} from "./services/section.service.client";
@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    CourseNavigatorComponent,
    LessonlistComponent,
    TopiclistComponent,
    WidgetListComponent,
    WhiteBoardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SectionlistComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [CourseServiceClient, 
              ModuleServiceClient,
              LessonServiceClient,
              CourseNavigatorServiceClient,
              UserServiceClient,
              SectionServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
