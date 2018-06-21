export class UserServiceClient {

  findUserById(userId) {
    return fetch('https://webdev-animesh-nodejs.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }

  findUsers(){
   return fetch('https://webdev-animesh-nodejs.herokuapp.com/api/user/')
      .then(response => response.json()); 
  }


  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://webdev-animesh-nodejs.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());

  }

  logout() {
    return fetch('https://webdev-animesh-nodejs.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('https://webdev-animesh-nodejs.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('https://webdev-animesh-nodejs.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateUser(user){
    return fetch('https://webdev-animesh-nodejs.herokuapp.com/api/update', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());

  // var postObject = {
  //   method: 'put',
  //   body: JSON.stringify(user),
  //   headers: {'content-Type': 'application/json','dataType':'json'} 
  // }
  // return fetch('http://localhost:4000/api/profile', postObject)
  // .then(function (response) {return response.json();}); 


  }
}