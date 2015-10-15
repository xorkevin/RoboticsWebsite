import {app} from '../../module.js';
// import 'firebase'; causes error due to webpack use strict
import {blogconfig} from '../../config.js';

class BlogController {
  constructor() {
    // this.fbblogref = new Firebase(blogconfig.roboticsfirebase); causes controller not to be instantiable 
  }
}

app.controller('BlogController', [ BlogController]);

// '$firebaseObject', '$firebaseArray', '$firebaseAuth',
// $firebaseObject, $firebaseArray, $firebaseAuth
