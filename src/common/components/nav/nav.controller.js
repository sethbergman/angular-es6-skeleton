export default class NavController {
  constructor() {
    this.links = [
      {
        sref: 'home',
        icon: 'icon-home',
        tooltip: 'Home',
      },
      {
        sref: 'user-report',
        icon: 'icon-users',
        tooltip: 'Users',
      },
      {
        sref: 'user-submit',
        icon: 'icon-user-plus',
        tooltip: 'Add User',
      },
    ];
  }
}
