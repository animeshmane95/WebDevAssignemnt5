export class LessonServiceClient {
  findLessonsForModule(moduleId,courseId) {
    return fetch('https://webdev-summer1-2018-animesh.herokuapp.com/api/course/'+ courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}