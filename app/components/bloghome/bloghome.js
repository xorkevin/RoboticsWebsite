import {app} from '../../module.js';
import {blogconfig} from '../../config.js';

class BloghomeController {
  constructor() {
    this.bloglist = blogconfig.bloglist;
  }
}

app.controller('BloghomeController', [BloghomeController]);
