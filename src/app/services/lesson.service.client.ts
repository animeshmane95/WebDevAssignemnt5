export class LessonServiceClient {
  findLessonsForModule(moduleId,courseId) {
    return fetch('https://webdev-summer1-2018-animesh.herokuapp.com/api/course/'+ courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }

  findTopicsForLesson(moduleId,courseId,lessonId) {
    return fetch('https://webdev-summer1-2018-animesh.herokuapp.com/api/course/'+ courseId + '/module/' + moduleId + '/lesson/'+ lessonId + '/topic')
      .then(response => response.json());
  }

  findWidgetsForTopic(topicId) {
    return fetch('https://webdev-summer1-2018-animesh.herokuapp.com/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}