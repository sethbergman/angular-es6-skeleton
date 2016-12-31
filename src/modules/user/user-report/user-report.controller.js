export default class UserReportController {

  static resolve = {
    users: (UserService) => {
      'ngInject';

      let users = UserService.getUsers();

      // Test data so the form renders
      if (users === null) {
        users = [{
          firstName: 'Test',
          lastName: 'User',
          email: 'test@test.com',
        }];
      }

      return users;
    },
  }
}
