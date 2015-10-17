import {app} from '../../module.js';
// import 'firebase'; causes error due to webpack use strict
import {blogconfig} from '../../config.js';

let apiConfig = blogconfig.roboticsfirebase;

class BlogeditorController {
  constructor($firebaseObject, $firebaseArray, $firebaseAuth) {
    this.fb = new Firebase(apiConfig.main);
    this.loggedin = false;
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
        this.loggedin = true;
      }).catch((error)=> {
        console.log("Authentication failed:", error);
      });
    };

    this.logout = ()=> {
      this.authuid = "Logged out";
      this.auth.$unauth();
      this.loggedin = false;
    };

    this.blogdate = moment().format('YYYY-MM-DD');

    this.postSuccess = false;

    this.post = (aId, aYear, aDate, aTitle, aContent)=> {
      if(!this.loggedin){
        this.postSuccess = false;
        return;
      }
      if(aYear == ''){
        this.postSuccess = false;
        return;
      }
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

      this.logout();
    };

    this.delete = (post)=>{
      if(!this.loggedin){
        return;
      }
      if(!confirm('are you sure you want to delete post: ' + post.id)){
        return;
      }
      console.log(post);
      let postListEntry = $firebaseObject(this.postListArray.child(post.id));
      let key = postListEntry.idkey;
      $firebaseObject(this.postsArray.child(key)).$remove();
      $firebaseObject(this.postListArray.child(post.id)).$remove();
      this.postSuccess = false;
    };
  }
}

app.controller('BlogeditorController', ['$firebaseObject', '$firebaseArray', '$firebaseAuth', BlogeditorController]);
