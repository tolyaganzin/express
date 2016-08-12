myApp.controller('ContactController',
    function($scope, $http){
        $scope.save = function (fildes, ContactForm){
            if(ContactForm.$valid){
              $http.post("api/form", fildes).success(function (res) {
                $scope.res=res;
                $scope.data={visible : false};
              });
            }
        };
})
