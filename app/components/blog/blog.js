import {app} from '../../module.js';
// import 'firebase'; causes error due to webpack use strict
import {blogconfig} from '../../config.js';

let apiConfig = blogconfig.roboticsfirebase;

class BlogController {
  constructor() {
    this.getYear = (year)=>{
      this.blogList = new Firebase(apiConfig.main + '/' + apiConfig.postList);
    };

    this.getPost = (year, key)=>{

    };

  }
}

app.controller('BlogController', [ BlogController]);

// '$firebaseObject', '$firebaseArray', '$firebaseAuth',
// $firebaseObject, $firebaseArray, $firebaseAuth
