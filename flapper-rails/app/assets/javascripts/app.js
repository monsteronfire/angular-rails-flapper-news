angular.module('flapperNews', ['ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      resolve: {
        postPromise: ['posts', function(posts) {
          return posts.getAll();
        }]
      }
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html',
      controller: 'PostsCtrl'
    });

    // $urlRouterProvider.otherwise('home');
    $urlRouterProvider.otherwise(function($injector, $location){
      var $state = $injector.get("$state");
      $state.go('home');
    });
  }]);