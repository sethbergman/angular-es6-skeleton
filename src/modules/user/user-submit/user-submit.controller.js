export default class UserSubmitController {

  constructor(UserService) {
    'ngInject';

    this.UserService = UserService;
  }

  addUser(user) {
    this.UserService.addUser(user);
  }
}
