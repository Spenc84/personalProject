//the modal that allows you to quickly choose a time for your task
export function week(moment, dataSvc, $location, $anchorScroll, $timeout) {
  return {
    restrict: 'E',
    template: require('./week.html'),
    link(scope, element, attrs, ctrl) {
      $location.hash(moment().format('hA'));
      // Function used to evaluate what should show on the calendar.
      // Evaluates against string dates and moment objects
      scope.compare = (actual, expected)=>{
        if(typeof actual === 'object' && actual.isSame(moment(expected), 'day')) return true;
        else if(typeof actual === 'string' && actual.includes(expected)) return true;
        else return false;
      };
    }
  };
} week.$inject = [`moment`, `dataSvc`, `$location`, `$anchorScroll`, `$timeout`];
