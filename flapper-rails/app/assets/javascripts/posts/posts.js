angular.module('flapperNews')
.factory('posts',['http',
  function($http) {
    var service = {};

    service.posts = [];

    service.getAll = function() {
      return $http.get('/posts.json').success(function(data) {
        angular.copy(data, service.posts);
      });
    };

    service.create = function() {
      return $http.post('/posts.json', post).success(function(data){
        service.posts.push(data)
      });
    };

    service.upvote = function(post) {
      return $http.pust('/posts' + post.id + '/upvote.json')
      .success(function(data) {
        post.upvotes +=1;
      });
    };

    service.get = function(id) {
      return $http.get('/posts/' + id + '.json').then(function(res) {
        return res.data;
      });
    };

    return service;
  }]);