import {app} from '../../module.js';
// import 'firebase'; causes error due to webpack use strict
import {blogconfig} from '../../config.js';

let apiConfig = blogconfig.roboticsfirebase;

class BlogeditorController {
  constructor($firebaseObject, $firebaseArray, $firebaseAuth) {
    this.fb = new Firebase(apiConfig.main);

    this.setYear = (year)=> {
      this.blogyearsaved = year;
      this.postListArray = this.fb.child(apiConfig.postList).child(year);
      this.postListArrayIter = $firebaseArray(this.postListArray);
      this.postsArray = this.fb.child(apiConfig.posts).child(year);
      this.postsArrayIter = $firebaseArray(this.postsArray);
    };

    this.auth = $firebaseAuth(this.fb);

    this.authuid = "Logged out";

    this.login = ()=> {
      this.auth.$authWithOAuthPopup("google").then((authData)=> {
        this.authuid = authData.uid;
      }).catch((error)=> {
        console.log("Authentication failed:", error);
      });
    };

    this.logout = ()=> {
      this.authuid = "logged out";
      this.auth.$unauth();
    };

    this.blogdate = moment().format('YYYY-MM-DD');

    this.postSuccess = false;

    this.post = (aId, aYear, aDate, aTitle, aContent)=> {
      let id = aYear+aId;

      let post = this.postsArray.push();
      let idkey = post.key();
      post.set({
        id: id,
        date: aDate,
        title: aTitle,
        content: aContent
      });

      let postListEntry = $firebaseObject(this.postListArray.child(id));
      postListEntry.$value = {
        id: id,
        date: aDate,
        title: aTitle,
        idkey: idkey
      };
      postListEntry.$save();

      this.blogid = '';
      this.blogdate = '';
      this.blogtitle = '';
      this.blogcontent = '';
      this.postSuccess = true;
    };
  }
}

app.controller('BlogeditorController', ['$firebaseObject', '$firebaseArray', '$firebaseAuth', BlogeditorController]);
