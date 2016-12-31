import angular from 'angular';

import HeaderComponent from './header.component';
import './header.scss';

export default angular.module('app.common.components.header', [])

.component('header', HeaderComponent);
