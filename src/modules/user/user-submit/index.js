import angular from 'angular';
import LocalStorageModule from 'angular-local-storage';
import uiRouter from 'angular-ui-router';

import UserService from '../user.service';
import UserSubmitComponent from './user-submit.component';
import UserSubmitController from './user-submit.controller';
import UserFormModule from '../user-form';

export default angular.module('app.modules.user.submit', [
  uiRouter,
  LocalStorageModule,
  UserFormModule.name,
])

.config(($stateProvider, localStorageServiceProvider) => {
  'ngInject';

  $stateProvider
    .state('user-submit', {
      url: '/user/submit',
      component: 'userSubmit',
      resolve: UserSubmitController.resolve,
    });

  localStorageServiceProvider
    .setPrefix('ngApp')
    .setStorageType('sessionStorage')
    .setNotify(true, true);
})

.component('userSubmit', UserSubmitComponent)

.service('UserService', UserService);
