import {app} from '../../module.js';
// import 'firebase'; causes error due to webpack use strict
import {blogconfig} from '../../config.js';


class BlogController {
  constructor($firebaseObject, $firebaseArray, $routeParams) {
    this.routeParams = $routeParams;

    this.setPage = (pageid)=>{
      this.pageid = pageid;
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
      this.blogList = new Firebase(this.api.main + '/' + this.api.postList + '/' + year);
      this.postListIter = $firebaseArray(this.blogList);
    };

    this.getPost = (aId)=>{
      let postEntry = $firebaseObject(this.blogList.child(aId));
      postEntry.$loaded().then(()=>{
        let key = postEntry.idkey;
        this.post = $firebaseObject(new Firebase(this.api.main + '/' + this.api.posts + '/' + this.year + '/' + key));
        this.post.$loaded().then(()=>{
          this.blogcontent = this.parseContent(this.post.content);
          this.blogdate = this.post.date;
          this.blogtitle = this.post.title;
          Firebase.goOffline();
        });
      });
    };

    this.parseContent = (content)=>{
      let x = '';
      let contentArray = content.split('[!]');
      contentArray.pop();
      for(let section of contentArray){
        section = section.trim();
        let colonIndex = contentArray.indexOf(':');
        let type = section.slice(0, colonIndex);
        let data = section.slice(colonIndex+1);
        if(type == 'p'){
          x += '<p>' + data + '</p>';
        } else if(type == 'img'){
          x += '<img src="' + data + '" class="img-responsive">'; //perhaps create smaller column 
        } else if(type == 'video'){

        }
      }
    };

  }

  activate(){
    Firebase.goOnline();
    let pageid = this.routeParams.pageid;
    let id = this.routeParams.id;
    let year = id.slice(0, 4);
    this.setPage(pageid);
    this.getYear(year);
    if(id == 'home'){

    } else {
      this.getPost(id);
    }
  }
}

app.controller('BlogController', ['$firebaseObject', '$firebaseArray', '$routeParams', BlogController]);
