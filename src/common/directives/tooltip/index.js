import angular from 'angular';

import TooltipDirective from './tooltip.directive';
import './tooltip.scss';

export default angular.module('app.common.directives.tooltip', [])

.directive('tooltip', TooltipDirective);
