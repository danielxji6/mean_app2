angular
  .module('albumApp', ['ui.router', 'ngResource'])
  .config(config)
  .factory('AlbumFactory', AlbumFactory)
  .controller('AlbumIndexController', AlbumIndexController);


// config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enable: true,
    requireBase: false,
  });

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/albums/index.html',
      controller: 'AlbumIndexController',
      controllerAs: 'index',
    });

}


// AlbumFactory.$inject = ['$resource'];
function AlbumFactory($resource) {
  return $resource('/api/albums/:id', { id: '@_id'}, {
    'update': { method: 'PUT' },
  });
}


// AlbumIndexController.$inject = ['AlbumFactory'];
function AlbumIndexController(AlbumFactory) {
  var vm = this;
  vm.albums = AlbumFactory.query();
}
