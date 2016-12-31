import template from './user-form.html';
import controller from './user-form.controller';

const UserFormComponent = {
  bindings: {
    user: '<',
    onSubmitCallback: '&',
  },
  controller,
  name: 'userForm',
  template,
};

export default UserFormComponent;
