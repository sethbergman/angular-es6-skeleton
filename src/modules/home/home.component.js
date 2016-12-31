import template from './home.html';
import controller from './home.controller';

const HomeComponent = {
  bindings: {
    content: '<',
  },
  controller,
  name: 'home',
  template,
};

export default HomeComponent;
