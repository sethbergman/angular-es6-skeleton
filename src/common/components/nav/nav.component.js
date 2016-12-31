import template from './nav.html';
import NavController from './nav.controller';

const NavComponent = {
  bindings: {
    links: '<',
  },
  controller: NavController,
  name: 'nav',
  template,
};

export default NavComponent;
