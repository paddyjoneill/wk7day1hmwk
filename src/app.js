import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');
  new Vue({
    el: '#app',
    data: {
      todos: [{name:"Buy Shopping", priority: "low"},
              {name:"Wash Car", priority: "high"},
              {name:"Do Laundry", priority: "low"}],
      newTodo: "",
      newPriority: "low"
    },
    methods: {
      addTodo: function() {
        this.todos.push({name:this.newTodo, priority:this.newPriority});
        this.newTodo = ""
      }
    }
  });
});
