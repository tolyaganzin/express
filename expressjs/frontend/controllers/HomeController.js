myApp.controller('HomeController',function($scope){
      $scope.contentpage={
        title:'Roller skills',
        summary:'Home'
      };
        $scope.data={visible : true};
    $scope.setFile = function () { return 'templates/home.html';};
    $scope.Home = function (){
        $scope.contentpage.summary='Home';
        $scope.setFile = function () { return 'templates/home.html';};
    };
    $scope.ContactUs = function (){
        $scope.contentpage.summary='Contact us';
        $scope.setFile = function () { return 'templates/contact_us.html';};
    };

});
