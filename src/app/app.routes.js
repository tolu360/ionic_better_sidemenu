(function() {
	'use strict';

	angular
		.module('app')
		.config(routes);

	routes.$inject = ['$stateProvider', '$urlRouterProvider'];

	function routes($stateProvider, $urlRouterProvider) {
		// Ionic uses AngularUI Router which uses the concept of states
		// Learn more here: https://github.com/angular-ui/ui-router
		// Set up the various states which the app can be in.
		// Each state's controller can be found in controllers.js
		$stateProvider

		// setup an abstract state for the side-menu directive
		.state('app', {
			url: '/app',
			abstract: true,
			templateUrl: 'app/layout/menu.html',
			controller: 'AppController as vm'
		});

		// Each tab has its own nav history stack which is defined in the corresponding module.

  		// if none of the above states are matched, use this as the fallback
  		$urlRouterProvider.otherwise('/app/playlists');
	}

})();
