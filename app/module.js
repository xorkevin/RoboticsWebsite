import angular from 'angular';
import router from 'angular-new-router';
import 'angular-google-maps';
import 'angular-simple-logger';
import 'angularfire';

let app = angular.module('app', ['ngNewRouter', 'firebase', 'uiGmapgoogle-maps', 'nemLogging']);

export {
  app
};
