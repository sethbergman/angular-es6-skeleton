import template from './user-report.html';
import controller from './user-report.controller';

const UserReportComponent = {
  bindings: {
    users: '<',
  },
  controller,
  name: 'userReport',
  template,
};

export default UserReportComponent;
