import angular from 'angular';

import Footer from './footer';
import Header from './header';
import Nav from './nav';

export default angular.module('app.common.components', [
  Footer.name,
  Header.name,
  Nav.name,
]);
