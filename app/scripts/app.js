import angular from 'angular';
import controllers from './controllers';
import directives from './directives';
import filters from './filters';
import services from './services';

let ngModule = angular.module('yantriki', []);

/*Initialize*/
controllers(ngModule);
directives(ngModule);
filters(ngModule);
services(ngModule);


angular.element(document).ready(function() {
  angular.bootstrap(document, [ngModule.name]);
});
