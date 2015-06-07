var app = angular.module('app', [])


  
.controller("OnLoadedController",function($scope,$http){
   console.log("loaded");
   
   $scope.OnClick = function (){
    console.log($http);
    
    var bugId = $scope.bugId;
    console.log(bugId);
    
    $http.get("https://bugzilla.mozilla.org/rest/bug/"+bugId)
        .success(function(data){
            console.log(data);
        });
   }
}) 

  
  
  
 
 
 
 
  
 

 // ng-click
 function OnClick($http) {
      console.log("click");
      console.log($http);
 };
  
 