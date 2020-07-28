(function(){
  'use strict'
  var vm = new Vue({
    el: '#app',
    data: {
      newItem:'',
      todos:[
        'task1',
        'task2',
        'task3'
      ]
    },
    methods: {
      addItem: function(e){
        e.preventDefault();
        this.todos.push(this.newItem);
      }
    }
  });
  // two way data binding (to UI)
})();