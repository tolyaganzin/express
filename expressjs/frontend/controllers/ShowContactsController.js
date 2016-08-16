myApp.controller('ShowContactsController',
    function($scope, $http){
        $http.get("api/contacts").success(function (res) {
          $scope.res=res;
        });      
});
