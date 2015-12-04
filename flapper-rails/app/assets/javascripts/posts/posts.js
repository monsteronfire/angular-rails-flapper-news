angular.module('flapperNews', ['ui.router', 'templates'])
.factory('posts',[
  function() {
    var service = {};

    service.posts = [];

    return service;
  }]);