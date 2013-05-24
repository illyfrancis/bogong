/*global _*/
'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ColorCtrl', ['$scope', 'ColorService', function($scope, ColorService) {
    var colorCtrl = {
      colorOptions: [],
      availableColors : [],
      selectedColors: [],
      toggleColors: function (isSelect) {
        if (this.colorOptions.length > 0) {
          var toggle = _.isUndefined(isSelect);
          _.each(this.colorOptions, function (color) {
            color.selected = toggle ? !color.selected : isSelect;
          });
          this.refreshColors();
        } else {
          console.log('nothing selected');
        }
      },
      refreshColors: function () {
        this.availableColors = ColorService.availableColors();
        this.selectedColors = ColorService.selectedColors();
      },
      addColor: function () {
        this.toggleColors(true);
      },
      removeColor: function () {
        this.toggleColors(false);
      },
      moveUp: function () {
        console.log('up');
        if (this.colorOptions.length > 0) {
          var first = this.colorOptions[0];
          // only move selected items
          if (first.selected) {
            // first color shouldn't be at the top
            if (first === this.selectedColors[0]) {
            } else {
              _.each(this.colorOptions, function (item) {
                this.shiftUp(item);
              }, this);
            }
          }
        }
      },
      shiftUp: function (item) {
        var index = this.selectedColors.indexOf(item);
        if (index > 0) {
          var previous = this.selectedColors[index-1],
            position = previous.position;
          previous.position = item.position;
          item.position = position;
          this.selectedColors = ColorService.sort(this.selectedColors);
        }
      },
      moveDown: function () {
        console.log('down');
      }
    };

    colorCtrl.refreshColors();
    $scope.color = colorCtrl;

  }])
  .controller('MyCtrl2', ['$scope', 'ColorService', function($scope, ColorService) {

  }]);