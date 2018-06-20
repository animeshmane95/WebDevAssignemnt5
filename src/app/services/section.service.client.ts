export class SectionServiceClient {

  SECTION_URL = 'https://webdev-animesh-nodejs.herokuapp.com/api/course/COURSEID/section';

  findSectionsForStudent() {
    console.log("Here");
    const url = 'https://webdev-animesh-nodejs.herokuapp.com/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'https://webdev-animesh-nodejs.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  findStudentsForSection(sectionId){
    console.log("Here  " + sectionId)
    const url = 'https://webdev-animesh-nodejs.herokuapp.com/api/student/section/'+ sectionId;
        return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());

  }

  unenrollStudentInSection(enrollment,user){
    const url = 'https://webdev-animesh-nodejs.herokuapp.com/api/student/'+enrollment.section._id+'/section/'+user._id + '/unenrollment/' + enrollment._id;
    console.log(url);
    console.log("inside");

    return fetch(url,{
      method: 'delete'
    });


  }

  section(sectionId) {
    return fetch('https://webdev-animesh-nodejs.herokuapp.com/api/sectionProfile/' + sectionId,
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  deleteSection(sectionId){
    return fetch('https://webdev-animesh-nodejs.herokuapp.com/api/section/'+sectionId, {
      method: 'delete'
    });

  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }


  updateSection(section){
    return fetch('https://webdev-animesh-nodejs.herokuapp.com/api/updateSection', {
      body: JSON.stringify(section),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });

  }



}