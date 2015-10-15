import {app} from '../../module.js';
// import 'firebase'; causes error due to webpack use strict
import {blogconfig} from '../../config.js';

let apiConfig = blogconfig.roboticsfirebase;

class BlogeditorController {
  constructor($firebaseObject, $firebaseArray, $firebaseAuth) {
    this.fbblogref = new Firebase(apiConfig.main);

    this.postList = this.fbblogref.child(apiConfig.postList);

    this.auth = $firebaseAuth(this.fbblogref);

    this.authuid = "Logged out";

    this.login = ()=> {
      this.auth.$authWithOAuthPopup("google").then((authData)=> {
        this.authuid = authData.uid;
      }).catch((error)=> {
        console.log("Authentication failed:", error);
      });
    }

    this.logout = ()=> {
      this.authuid = "logged out";
      this.auth.$unauth();
    }

    this.post = (id, year, date, content)=> {
      $firebaseArray(this.postList.child(year)).$add(year + id);
    }
  }
}

app.controller('BlogeditorController', ['$firebaseObject', '$firebaseArray', '$firebaseAuth', BlogeditorController]);
