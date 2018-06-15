export default class  ModuleServiceClient {
  MODULE_URL = 'https://webdev-summer1-2018-animesh.herokuapp.com/api/course/COURSE_ID/module';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}