import angular from 'angular';

import UserReportModule from './user-report';
import UserSubmitModule from './user-submit';

export default angular.module('app.modules.user', [
  UserReportModule.name,
  UserSubmitModule.name,
]);
