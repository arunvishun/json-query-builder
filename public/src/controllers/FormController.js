var queryBuilderApp = angular.module('queryBuilderApp');

queryBuilderApp.controller('FormController', function FormController($scope) {

	var select_fields = ['time','source_vn', 'destination_vn', 'source_port', 'destination_port', 'traffic'];
	var where_clauses =[{
			"name" : "source_vn",
			"value" : "frontend-vn",
			"operator" :"="
		},
		{
			"name" : "source_port",
			"value" : "9000",
			"operator" :"!="
		}];

	$scope.model = {};
	$scope.model['where'] = [];
	$scope.model['select_fields'] = select_fields;
	$scope.model['where'].push(where_clauses);

	$scope.cloneItem = function() {
		 var where_clauses = [
			 {
				 "name" : "",
				 "value" : "",
				 "operator": ""
			 }
		 ];
		 $scope.model['where'].push(where_clauses);
	 }

	//  $scope.submit = function() {
	// 	 // check to make sure the form is completely valid
	// 	 if ($scope.queryBuilder.$valid) {
	//
	// 	 }
	//  };

});
