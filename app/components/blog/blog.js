import {app} from '../../module.js';
// import 'firebase'; causes error due to webpack use strict
import {blogconfig} from '../../config.js';


class BlogController {
  constructor() {
    this.setPage = (pageid)=>{
      if(pageid == 'p'){
        this.api = blogconfig.roboticsfirebase;
      } else if(pageid == 'r'){

      } else if(pageid == 'a'){

      } else if(pageid == 'o'){

      } else if(pageid == 'g'){

      }
    };

    this.getYear = (year)=>{
      this.year = year;
      this.blogList = new Firebase(this.api.main + '/' + this.api.postList);
    };

    this.getPost = (year, key)=>{

    };

  }

  activate(){

  }
}

app.controller('BlogController', [ BlogController]);

// '$firebaseObject', '$firebaseArray', '$firebaseAuth',
// $firebaseObject, $firebaseArray, $firebaseAuth
