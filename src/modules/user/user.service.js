export default class UserService {

  constructor(localStorageService) {
    'ngInject';

    if (localStorageService.isSupported) {
      this.localStorageService = localStorageService;
    }
  }

  getUsers() {
    let users = [];
    if (this.localStorageService) {
      users = this.localStorageService.get('users');
    }
    return users;
  }

  addUser(user) {
    let users = [];
    if (this.localStorageService) {
      users = this.localStorageService.get('users') || [];
      users.push(user);
      this.localStorageService.set('users', users);
    }
  }
}
