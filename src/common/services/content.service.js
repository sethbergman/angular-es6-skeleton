export default class ContentService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  // TODO: Remove eslint comment after we enable $http
  /* eslint-disable class-methods-use-this */
  getContent(contentType) {
    // return this.$http.get('/api/content/:id').then(response => response.data);
    let text = '';
    if (contentType === 'home') {
      text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
      `;
    }
    return text;
  }
}
