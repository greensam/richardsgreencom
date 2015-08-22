app.directive('rsgFooter', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/rsgFooter.html' 
  }; 
});