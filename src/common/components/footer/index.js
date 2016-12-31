import angular from 'angular';

import FooterComponent from './footer.component';
import './footer.scss';

export default angular.module('app.common.components.footer', [])

.component('footer', FooterComponent);
