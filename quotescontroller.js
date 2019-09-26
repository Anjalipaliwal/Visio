//creating an application module
var quotesAppModule = angular.module("quotesApp", []);

//The below code will read the data from list.json file and will pass to the $scope variable 
quotesAppModule.controller("ListCtrl", function($scope, $http){    
            $http.get('list.json')
            
            
                .success (function(data){
                        $scope.quotes = data;
                    })
                .error(function(data, status) {
                        console.error('failure loading the student record', status, data);
                        $scope.quotes = { }; //return blank record if something goes wrong
                });
    } 
);//end controller  