export default class UserFormController {
  constructor($timeout) {
    'ngInject';

    this.message = null;
    this.$timeout = $timeout;
  }

  $onChanges(changes) {
    if (changes.user) {
      this.user = Object.assign({}, this.user);
    }
  }

  submitFormHandler($event, user) {
    $event.preventDefault();
    this.onSubmitCallback(user);
    this.user = null;
    this.message = 'User Added';
    this.$timeout(() => { this.message = null; }, 3000);
  }
}
