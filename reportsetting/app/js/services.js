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
      {name:'green', shade:'dark', selected: true},
      {name:'black', shade:'dark', selected: false},
      {name:'white', shade:'light', selected: false},
      {name:'red', shade:'dark', selected: false},
      {name:'blue', shade:'dark', selected: false},
      {name:'yellow', shade:'light', selected: false}
    ];
    var ColorService = {
      colors: function () {
        console.log('colors()');
        return colors;
      },
      selectedColors: function () {
        var selected = [];
        angular.forEach(colors, function (color) {
          if (color.selected) {
            selected.push(color);
          }
        });
        console.log('selectedColors');
        return selected;
      },
      availableColors: function () {
        var available = [];
        angular.forEach(colors, function (color) {
          if (!color.selected) {
            available.push(color);
          }
        });
        console.log('availableColors');
        return available;
      }
    };

    return ColorService;
  });