/*global _*/
'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ColorCtrl', ['$scope', 'ColorService', function($scope, ColorService) {
    var colorCtrl = {
      availSelection: [],
      selectedSelection: [],
      availableColors : [],
      selectedColors: [],

      toggle: function (colors) {
        if (colors.length > 0) {
          _.each(colors, function (color) {
            color.selected = !color.selected;
          });
          this.refreshColors();
        }
      },

      refreshColors: function () {
        this.availableColors = ColorService.availableColors();
        this.selectedColors = ColorService.selectedColors();
      },

      addColor: function (colors) {
        this.toggle(colors);
        this.selectedSelection = this.availSelection;
        this.availSelection = [];
      },

      removeColor: function (colors) {
        this.toggle(colors);
        this.availSelection = this.selectedSelection;
        this.selectedSelection = [];
      },

      moveTop: function (colors) {
        while (this.canMoveUp(colors)) {
          this.moveUp(colors);
        }
      },

      moveUp: function (colors) {
        if (this.canMoveUp(colors)) {
          _.each(this.selectedSelection, function (item) {
            this.shiftUp(item);
          }, this);
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

      canMoveUp: function (colors) {
        return colors.length > 0 && this.selectedColors.indexOf(colors[0]) > 0;
      },

      moveBottom: function (colors) {
        while (this.canMoveDown(colors)) {
          this.moveDown(colors);
        }
      },

      moveDown: function (colors) {
        var last = colors[colors.length-1];
        if (colors.length > 0) {
          if (this.selectedColors.indexOf(last) < this.selectedColors.length-1) {
            var reverse = _.toArray(this.selectedSelection).reverse();
            _.each(reverse, function (item) {
              this.shiftDown(item);
            }, this);
          }
        }
      },

      shiftDown: function (item) {
        var index = this.selectedColors.indexOf(item);
        if (index >= 0) {
          var next = this.selectedColors[index+1],
            position = next.position;
          next.position = item.position;
          item.position = position;
          this.selectedColors = ColorService.sort(this.selectedColors);
        }
      },

      canMoveDown: function (colors) {
        return colors.length > 0 &&
          this.selectedColors.indexOf(colors[colors.length-1]) < this.selectedColors.length-1;
      }
    };

    colorCtrl.refreshColors();
    $scope.color = colorCtrl;

  }])
  .controller('MyCtrl2', ['$scope', 'ColorService', function($scope, ColorService) {

  }]);