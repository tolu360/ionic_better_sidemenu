(function() {
	'use strict';

	angular
		.module('app.search')
		.config(routes);

	routes.$inject = ['$stateProvider'];

	function routes($stateProvider) {
		$stateProvider

		.state('app.search', {
			url: '/search',
			views: {
				'menuContent': {
					templateUrl: 'app/search/search.html'
				}
			}
		});
	}
})();
