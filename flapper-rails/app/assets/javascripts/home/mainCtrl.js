angular.module('flapperNews', ['ui.router', 'templates'])
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

  }]);