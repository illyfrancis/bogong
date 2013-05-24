/*global _*/
'use strict';

/* Services */

angular.module('myApp.services', []).
  value('version', '0.1')
  .service('repository', function () {
    var accounts = [{
      name: 'one',
      selected: true
    }, {
      name: 'two',
      selected: false
    }, {
      name: 'three',
      selected: false
    }];

    var accountService = {
      findAllAccounts: function () {
        return accounts;
      },
      deleteFirst: function () {
        if(accounts.length > 0) {
          accounts.splice(0, 1);
        } else {
          console.log('all gone!');
        }
      }
    };

    return accountService;
  })
  .service('ColorService', function () {
    var colors = [
      {name:'green', shade:'dark', position: 0, selected: false},
      {name:'black', shade:'dark', position: 0, selected: true},
      {name:'white', shade:'light', position: 0, selected: false},
      {name:'red', shade:'dark', position: 0, selected: true},
      {name:'blue', shade:'dark', position: 0, selected: true},
      {name:'yellow', shade:'light', position: 0, selected: false}
    ];

    // dummy ordering for all selected colors
    (function () {
      var position = 0,
        selected = _.where(colors, {selected: true});
      _.each(selected, function (color) {
        color.position = ++position;
      });
    })();

    var ColorService = {
      colors: function () {
        console.log('colors()');
        return colors;
      },
      sortFirst: function () {
        colors = _.sortBy(colors, function (color) {
          return color.name;
        });
      },
      sort: function (colors) {
        return _.sortBy(colors, function (color) {
          return color.position;
        });
      },
      selectedColors: function () {
        // return _.where(colors, {selected: true});
        return _.sortBy(_.where(colors, {selected: true}), function (color) {
          return color.position;
        });
      },
      availableColors: function () {
        return _.where(colors, {selected: false});
      }
    };

    ColorService.sortFirst();

    return ColorService;
  });