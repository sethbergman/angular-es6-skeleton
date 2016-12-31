import template from './user-submit.html';
import controller from './user-submit.controller';

const UserSubmitComponent = {
  bindings: {
    user: '<',
  },
  controller,
  name: 'userSubmit',
  template,
};

export default UserSubmitComponent;
