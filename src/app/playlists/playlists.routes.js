(function() {
	'use strict';

	angular
		.module('app.playlists')
		.config(routes);

	routes.$inject = ['$stateProvider'];

	function routes($stateProvider) {
		$stateProvider

		.state('app.playlists', {
			url: '/playlists',
			views: {
				'menuContent': {
					templateUrl: 'app/playlists/playlists.html',
					controller: 'PlaylistsController as vm'
				}
			}
	    })

		.state('app.single', {
			url: '/playlists/:playlistId',
			views: {
				'menuContent': {
					templateUrl: 'app/playlists/playlist.html',
					controller: 'PlaylistController as vm'
				}
			}
		});
	}
})();
