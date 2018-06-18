import { Routes, RouterModule } from '@angular/router';
import {CourseViewerComponent} from "./CourseViewer/course-viewer.component";
import {CourseGridComponent} from './CourseGrid/course-grid.component'
import { WhiteBoardComponent } from "./white-board/white-board.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {SectionlistComponent} from "./sectionlist/sectionlist.component";
import {UpdateSectionComponent} from "./update-section/update-section.component";
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'home', component: CourseGridComponent},
  { path: 'update/:courseId/:sectionId', component: UpdateSectionComponent},
  { path: 'course/:courseId/section', component: SectionlistComponent },
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent }, 
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent },
  { path: '**', component: WhiteBoardComponent} 
];
export const routing = RouterModule.forRoot(appRoutes);