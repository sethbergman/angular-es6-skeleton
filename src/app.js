import angular from 'angular';
import uiRouter from 'angular-ui-router';

import common from './common';
import modules from './modules';

import './styles.scss';

angular.module('ngApp', [
  uiRouter,
  common.name,
  modules.name,
])

.config(($locationProvider) => {
  'ngInject';

  $locationProvider.html5Mode(true);
})

// Angular doesn't handle SVG well. This is required to use
// SVG icon sprites with the <use> tag and xlink:href attribute.
.filter('svgLink', ($sce) => {
  'ngInject';

  return svgIconName => $sce.trustAsResourceUrl(`#${svgIconName}`);
});
