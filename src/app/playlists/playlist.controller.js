(function() {
	'use strict';

	angular
		.module('app.playlists')
		.controller('PlaylistController', PlaylistController);

	PlaylistController.$inject = ['$stateParams'];

	/* @ngInject */
	function PlaylistController($stateParams) {
		var vm = this;
		
		activate();

		////////////////

		function activate() {
		}
	}
})();