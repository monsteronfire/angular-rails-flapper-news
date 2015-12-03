angular.module('flapperNews', ['ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });

    $urlRouterProvider.otherwise('home');
  }])
.factory('posts',[
  function() {
    var service = {};

    service.posts = [];

    return service;
  }])

.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts) {
    $scope.test = 'Hello World!';

    $scope.posts = posts.posts;

    $scope.addPost = function() {
      if(!$scope.title || $scope.title === ''){ return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
          { author: 'Joe', body: 'Cool post!', upvote: 0 },
          { author: 'Bob', body: 'Great idea!', upvote: 0 }
        ]
      });

      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementByUpvotes = function(post) {
      post.upvotes += 1;
    };

  }])
.controller('PostsCtrl', [
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts) {
    $scope.post = posts.posts[$stateParams.id];

    $scope.addComment = function() {
      if($scope.body === '') { return; }
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 0
      });
      $scope.body = '';
    };
  }]);