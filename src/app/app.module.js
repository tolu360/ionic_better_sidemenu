(function() {
	'use strict';

	angular
		.module('app', [
			/* Shared modules */
			'ionic',
			'app.core',

			/* Feature areas */
			'app.playlists',
			'app.search',
			'app.browse'
		]);
})();
