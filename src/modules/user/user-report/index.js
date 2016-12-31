import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LocalStorageModule from 'angular-local-storage';

import UserReportComponent from './user-report.component';
import UserReportController from './user-report.controller';
import UserService from '../user.service';

export default angular.module('app.modules.user.report', [
  uiRouter,
  LocalStorageModule,
])

.config(($stateProvider, localStorageServiceProvider) => {
  'ngInject';

  $stateProvider
    .state('user-report', {
      url: '/user/report',
      component: 'userReport',
      resolve: UserReportController.resolve,
    });

  localStorageServiceProvider
    .setPrefix('ngApp')
    .setStorageType('sessionStorage')
    .setNotify(true, true);
})

.component('userReport', UserReportComponent)

.service('UserService', UserService);
