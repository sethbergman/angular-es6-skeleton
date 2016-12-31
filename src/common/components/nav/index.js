import angular from 'angular';

import Tooltip from 'common/directives/tooltip';
import NavComponent from './nav.component';

import './nav.scss';

export default angular.module('app.common.components.nav', [
  Tooltip.name,
])

.component('nav', NavComponent);
