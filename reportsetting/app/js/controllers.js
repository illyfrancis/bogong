'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ReportSettingsCtrl', ['$scope', 'ColorService', function($scope, ColorService) {

    console.log('ReportSettingsCtrl');
    $scope.availableColors = ColorService.availableColors();
    $scope.selectedColors = ColorService.selectedColors();

    $scope.selectColors = function () {
      if ($scope.colorOptions.length > 0) {
        angular.forEach($scope.colorOptions, function (color) {
          color.selected = !color.selected;
        });

        $scope.availableColors = ColorService.availableColors();
        $scope.selectedColors = ColorService.selectedColors();
      } else {
        console.log('nothing selected');
      }
    };

    $scope.addColor = function () {
      console.log('add');
      if ($scope.colorOptions.length > 0) {
        angular.forEach($scope.colorOptions, function (color) {
          color.selected = true;
        });

        $scope.availableColors = ColorService.availableColors();
        $scope.selectedColors = ColorService.selectedColors();
      }
    };

    $scope.removeColor = function () {
      console.log('remove');
      if ($scope.colorOptions.length > 0) {
        angular.forEach($scope.colorOptions, function (color) {
          color.selected = false;
        });

        $scope.availableColors = ColorService.availableColors();
        $scope.selectedColors = ColorService.selectedColors();
      }
    };

  }])
  .controller('MyCtrl2', ['$scope', 'ColorService', function($scope, ColorService) {

  }]);