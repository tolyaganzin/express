myApp.controller('ContactController',
    function($scope, $http){

        $scope.save = function (contacts, contactForm){
            if(contactForm.$valid && (contacts.phone).length>9 && (contacts.phone).length<13 && contacts.name!==""){
              //alert((contacts.phone).length+" "+contacts.name);
                $http.post("api/form", contacts).success(function (res) {
                  $scope.res=res;
                  $scope.data={visible : false};

                });
            }
        };
})
