myApp.controller('ContactController',
    function($scope, $http){
        $scope.save = function (contacts, contactForm){
            if(ContactForm.$valid){
                $http.post("api/form", contacts).success(function (res) {
                  $scope.res=res;
                  $scope.data={visible : false};
                });
            }
        };
})
