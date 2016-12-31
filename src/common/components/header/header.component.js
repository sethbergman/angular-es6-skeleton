import template from './header.html';
import HeaderController from './header.controller';

const HeaderComponent = {
  bindings: {
    name: '<',
  },
  controller: HeaderController,
  name: 'header',
  template,
};

export default HeaderComponent;
