/**
 * Angular application
 */

var angularApp = angular.module('angularApp', []);

function mainController($scope, $http) {
	$scope.connectMsg = "Press test DB Button";

	$http.get('/api/hello')
	.success(function (data) {
		$scope.msg = data.msg;
		console.log(data);
	})
	.error(function (err) {
		console.log(err);
	});


	$scope.dbTest = function () {
		$scope.connectMsg = 'testing connection...';
		$http.get('/api/dbtest')
		.success(function (res) {
			if (res) {
				$scope.connectMsg = (res.name === 'mongo')
						? 'Connection is working'
						: 'No connection to database';
			}
		})
		.error(function (err) {
			$scope.connectMsg = 'No connection to database';
			console.log(err);
		});
	};

}
