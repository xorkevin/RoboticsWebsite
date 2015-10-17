import angular from 'angular';
import router from 'angular-new-router';
import santize from 'angular-sanitize';
import 'angular-google-maps';
import 'angular-simple-logger';
import 'angularfire';

let app = angular.module('app', ['ngNewRouter', 'ngSanitize', 'firebase', 'uiGmapgoogle-maps', 'nemLogging']);

export {
  app
};
