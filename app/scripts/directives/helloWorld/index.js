import template from './template.html';

import './style.scss';

export default (ngModule) => {
  ngModule.directive('helloWorld', () => {
    return {
      replace: true,
      restrict: 'E',
      template: template
    };
  });
}
