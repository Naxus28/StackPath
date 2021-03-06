(function() {
  'use strict';
  angular
    .module('services')
    .factory('homeService', homeService);

  function homeService($http) {
    let getSixRandomTodos = (todoList) => _.shuffle(todoList).slice(0, 6);

    let getTodos = () => {
      const url = 'app/data/todos.json';
      const requestObj = { 
        method: 'GET', 
        url: url,
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      return $http(requestObj); // returns a promise
    };
    
    const service = { 
      getSixRandomTodos,
      getTodos
    };

    return service; // exposes API
  }
})();