angular.module('app', ['ngAnimate','ajoslin.promise-tracker','cgBusy']);

angular.module('app').controller('DemoCtrl',function($scope,$http,promiseTracker){

	$scope.delay = 0;
	$scope.minDuration = 0;
	$scope.message = 'Please Wait...';
	$scope.backdrop = true;
	$scope.promise = null;

	$scope.tracker = promiseTracker();

	$scope.demo = function(){

		// $scope.promise =
			var somePromise =$http.get('http://httpbin.org/delay/3');
			$scope.tracker.addPromise(somePromise);
	};


});
