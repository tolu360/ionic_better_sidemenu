(function() {
	'use strict';

	angular
		.module('app.browse')
		.config(routes);

	routes.$inject = ['$stateProvider'];

	function routes($stateProvider) {
		$stateProvider

		.state('app.browse', {
			url: '/browse',
			views: {
				'menuContent': {
					templateUrl: 'app/browse/browse.html'
				}
			}
		});
	}
})();
