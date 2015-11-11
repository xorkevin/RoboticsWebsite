import {app} from '../../module.js';
import {blogconfig} from '../../config.js';

class BloghomeController {
  constructor() {
    this.bloglist = blogconfig.bloglist;
  }

  activate(){
    $("html, body").animate({ scrollTop: 0}, 125);
  }
}

app.controller('BloghomeController', [BloghomeController]);
