(function () {
  'use strict';

  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($log, homeService, todoService) {
    let vm = this;
    let circleOptions = {
      size: 190,
      thickness: 30,
      fill: {
        gradient: ['green', '#A990B0', 'rgb(63, 97, 176)']
      }
    };

    todoService.setCircleOptions(circleOptions);

    vm.circleOptions = todoService.getCircleOptions();
    
    vm.fetchTodos = fetchTodos;

    function fetchTodos() {
      homeService.getTodos()
      .then(
        response => {
          if (response.data.todos.length) {
            console.log(response);
            vm.todos = homeService.getSixRandomTodos(response.data.todos);
          } else {
            vm.noTodosMsg = 'There are no to-dos for today!';
          }
        },
        err => {
          $log.error('Error: ', err);
          vm.error = 'There was an error loading the application. Please try again later. We apologize for any inconvenience.';
        }
      );
    }

    fetchTodos();
  }
})();