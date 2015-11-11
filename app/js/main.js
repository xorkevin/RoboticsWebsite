import angular from 'angular';
import router from 'angular-new-router';
import {app} from '../module.js';
import '../components/home/home';
import '../components/navbar/navbar';
import '../components/footer/footer';
import '../components/header/header';
import '../components/minheader/minheader';
import '../components/blog/blog';
import '../components/blogeditor/blogeditor';
import '../components/bloghome/bloghome';

class AppController {
  constructor($router){
    $router.config([
      {path: '/home/:section', components: {
        'header': 'header',
        'main'  : 'home',
        'nav'   : 'navbar',
        'footer': 'footer'
      }, as: 'home'},
      {path: '/blog', components: {
        'header': 'minheader',
        'main'  : 'bloghome',
        'nav'   : 'navbar',
        'footer': 'footer'
      }, as: 'bloghome'},
      {path: '/blog/:pageid/:id', components: {
        'header': 'minheader',
        'main'  : 'blog',
        'nav'   : 'navbar',
        'footer': 'footer'
      }, as: 'blog'},
      {path: '/blogeditor', components: {
        'header': 'minheader',
        'main'  : 'blogeditor',
        'nav'   : 'navbar',
        'footer': 'footer'
      }, as: 'blogeditor'},
      {path: '/', redirectTo: '/home/landing'}
    ]);
  }
}
// app.config(['$locationProvider', function($locationProvider) {
//        $locationProvider.html5Mode(true);
//    }]); only for html5 route mode
app.controller('AppController', ['$router', AppController]);
