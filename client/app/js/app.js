var bugzillaServerUrl = "https://landfill.bugzilla.org";//  "https://bugzilla.mozilla.org";


var app = angular.module('app', [])

app.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
});


app.controller("LoginController",function($scope,$http){
    console.log("LoginController");
    
    $scope.OnLoginClick = function (email,password){
        
        var url = bugzillaServerUrl+"/rest/login?login="+ email + "&password=" + password ;
        console.log(url);
    
        $http.get(requestString)
           .success(function(res){
                console.log(res); 
           }) 
    }
});



app.controller("OnLoadedController",function($scope,$http){
   console.log("loaded");
   
   $scope.OnClick = function (bugId){

    console.log(bugId); 

    $http.get(bugzillaServerUrl+"/rest/bug/"+bugId)
        .success(function(res){
            $scope.bug = res.bugs[0];
        });
   }
});

  
  
  
 
 
 
 
  
 

 // ng-click
 function OnClick($http) {
      console.log("click");
      console.log($http);
 };
  
 