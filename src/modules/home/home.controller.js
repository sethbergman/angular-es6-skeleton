export default class HomeController {

  static resolve = {
    content: (ContentService) => {
      'ngInject';

      return ContentService.getContent('home');
    },
  }
}
