/*myApp.controller('ContactController',
    function($scope, $http){

        $scope.send = function (contacts, contactForm){
            if(contactForm.$valid && (contacts.phone).length>9 && (contacts.phone).length<13 && contacts.name!==""){
              //alert((contacts.phone).length+" "+contacts.name);
                $http.post("api/form", contacts).success(function (res) {
                  $scope.res=res;
                  $scope.data={visible : false};

                });
            }
        };
})*/
angular
    .module('myApp')
    .controller('ContactController',ContactController);
angular
    .module('myApp')
    .directive('addForm',function(){
        return{
            restrict:'AE',
            templateUrl: 'templates/interpreterForm.html'
        };
    })

function ContactController($scope, $http) {
    //скрывает результат показывает форму
    $scope.data={visible : true};
    //собирает все телефоны в одину коллекцию
    $scope.args=
    [{
        phone: ''
    }];

    //клонирование удаление телефонов формы
    $scope.addDellForm = function (index) {
        if(index===0){
            $scope.args.push({
                phone: '',
            });
        }
        else{
            $scope.args.splice(-1, 1);
        }
    };

    // отправка
    $scope.send = function (contacts, contactForm){
          if(contactForm.$valid){
            //добавляет к имени пользователя коллекцию телефонов
            contacts.phones=$scope.args;
            $http.post("api/form", contacts).success(function (res) {
              //выводит результат
              $scope.res=res;
              //скрывает форму показывает результат
              $scope.data={visible : false};
            });
          }
      };
}
