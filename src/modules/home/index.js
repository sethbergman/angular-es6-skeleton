import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ContentService from 'common/services/content.service';
import HomeComponent from './home.component';
import HomeController from './home.controller';

export default angular.module('app.modules.home', [
  uiRouter,
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    component: 'home',
    resolve: HomeController.resolve,
  });
})

.component('home', HomeComponent)

.service('ContentService', ContentService);
