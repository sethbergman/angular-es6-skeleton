import template from './footer.html';
import FooterController from './footer.controller';

const FooterComponent = {
  bindings: {
    text: '<',
  },
  controller: FooterController,
  name: 'footer',
  template,
};

export default FooterComponent;
