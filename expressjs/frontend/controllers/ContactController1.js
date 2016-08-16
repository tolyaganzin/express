myApp.controller('ContactController1',function($scope){
    $scope.contentpage={
      title:'Roller skills',
      summary:'Contact us'
    };
    $scope.data={visible : true};
    $scope.setFile = function () { return '../templates/contact_us.html';};
});
