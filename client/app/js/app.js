var bugzillaServerUrl =  "https://bugzilla.mozilla.org";


var app = angular.module('app', [])


.controller("LoginController",function($scope,$http){
    console.log("LoginController");
    
    $scope.OnLoginClick = function (email,password){
        
          console.log(email);
          console.log(password);
        
          var requestString = bugzillaServerUrl+"/rest/login?login="+ email + "&password=" + password ;
        
           $http.get(requestString)
             .success(function(res){
                console.log(res); 
             }) ;
    }
    
})

  
.controller("OnLoadedController",function($scope,$http){
   console.log("loaded");
   
   $scope.OnClick = function (bugId){

    console.log(bugId); 

    $http.get(bugzillaServerUrl+"/rest/bug/"+bugId)
        .success(function(res){
            $scope.bug = res.bugs[0];
        });
   }
})

  
  
  
 
 
 
 
  
 

 // ng-click
 function OnClick($http) {
      console.log("click");
      console.log($http);
 };
  
 