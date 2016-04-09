/* jshint esversion: 6 */

angular.module('lifeApp')
//****************  CALENDAR DIRECTIVES  ****************
.directive('calHeader', ($state) => {
  return {
    restrict: 'E',
    templateUrl: './directives/calHeader.html',
    scope: {
      icon: '@',
      view: '@',
      month: '=',
      optionFlag: '=flag1',
      monthFlag: '=flag2'
    },
    link(scope, element, attrs, ctrl) {
      scope.eyeFlag = true;
      scope.monthFlag = false;
      if($state.params.optionFlag) scope.optionFlag = $state.params.optionFlag;
      else scope.optionFlag = false;
      console.log($state.params);

      scope.toggleOption = function() {
        scope.optionFlag = !scope.optionFlag;
      };
      scope.toggleMonth = function() {
        scope.monthFlag = !scope.monthFlag;
      };
      scope.toggleEye = function() {
        scope.eyeFlag = !scope.eyeFlag;
      };
      scope.clear = () => {
        scope.optionFlag = false;
        scope.monthFlag = false;
      };
      scope.clearOption = () => {
        scope.optionFlag = false;
      };
    },
  };
})
.directive('optionPane', () => {
  return {
    restrict: 'E',
    templateUrl: './directives/optionPane.html'
  };
})
.directive('calendar', () => {
  return {
    restrict: 'E',
    templateUrl: './directives/calendar.html'
  };
})
//****************  LIST DIRECTIVES  ****************
.directive('listHeader', () => {
  return {
    restrict: 'E',
    templateUrl: './directives/listHeader.html'
  };
})
.directive('addItem', () => {
  return {
    restrict: 'E',
    templateUrl: './directives/addItem.html'
  };
});
