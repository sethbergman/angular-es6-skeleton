import angular from 'angular';

import HomeModule from './home';
import UserModule from './user';

export default angular.module('app.modules', [
  HomeModule.name,
  UserModule.name,
]);
