import { Routes, RouterModule } from '@angular/router';
import {CourseViewerComponent} from "./CourseViewer/course-viewer.component";
import {CourseGridComponent} from './CourseGrid/course-grid.component'
import { WhiteBoardComponent } from "./white-board/white-board.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent},
  { path: 'home', component: CourseGridComponent},
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent }, 
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent } 
];
export const routing = RouterModule.forRoot(appRoutes);