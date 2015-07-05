(function(){
   
    var app = angular.module('app', ["ngRoute"])    
    
    app.config(function($routeProvider){
        
        
        $routeProvider
           .when("/login",{
                  templateUrl : "../html/login.html",
                  controller: "LoginController"
                })
           .otherwise( { redirectTo: '/login' });
         
        
        
        
    })
    
}());











/*

app.controller("LoginController",function($scope,$http){
    console.log("LoginController");
    
    $scope.OnLoginClick = function (email,password){
        
        
        var url =   "/login?login="+ email + "&password=" + password;
        
        var loginUrl = 'https://landfill.bugzilla.org/bugzilla-tip/rest/login?login=eranotz65@gmail.com&password=asdf1234';
        
        $http.get(loginUrl).success(function(res){
            
            console.log('res : ' + res);
        });
        
        /*var url = bugzillaServerUrl+"/rest/login?login="+ email + "&password=" + password+"callback=JSON_CALLBACK" ;
        console.log(url);
            /*console.log(this.arguments.length);
            
            for (var i = 0; i < this.arguments.length; i++) {
                console.log(this.arguments[i]);
            }
    
      
        $http.jsonp(url)
           .success(function(data,status,headers,config){
                console.log('done')
                console.log(data); 
           });
    }
});

*/
/*
app.controller("OnLoadedController",function($scope,$http){
   console.log("loaded");
   
   $scope.OnClick = function (bugId){

    console.log(bugId); 

    $http.get('https://landfill.bugzilla.org/bugzilla-tip/rest/bug/'+bugId)
        .success(function(res){
            $scope.bug = res.bugs[0];
        });
   }
});

  */
  
  
 
 
 
 
  
 

 // ng-click
 function OnClick($http) {
      console.log("click");
      console.log($http);
 };
  
 