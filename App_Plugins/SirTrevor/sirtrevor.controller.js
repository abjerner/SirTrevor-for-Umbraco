angular.module("umbraco").controller("Sir.Trevor.Controller", function ($scope, dialogService, assetsService) {
	
	assetsService.load(
			["/App_Plugins/SirTrevor/lib/eventable.js",
			"/App_Plugins/SirTrevor/lib/sir-trevor.min.js",
			"/App_Plugins/SirTrevor/blocks/umbraco-media.js"])
		.then(function () {
			var editor = new SirTrevor.Editor({
			el: $(".sir-trevor"),
			blockTypes: [
				"Embedly",
				"Text",
				"List",
				"Quote",
				"UmbracoMedia",
				"Video",
				"Tweet"
			],
			foo: "bar"
		    });

			$scope.$on("formSubmitting", function (e, args) {
				editor.onFormSubmit();
				$scope.model.value = editor.dataStore;
			});
	});

	assetsService.loadCss("/app_plugins/SirTrevor/lib/sir-trevor.css");
	assetsService.loadCss("/app_plugins/SirTrevor/lib/sir-trevor-icons.css");
});