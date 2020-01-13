import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');
  new Vue({
    el: '#app',
    data: {
      todos: ["Buy Shopping", "Wash Car", "Do Laundry"],
      newTodo: ""
    },
    methods: {
      addTodo: function() {
        this.todos.push(this.newTodo)
        this.newTodo = ""
      }
    }
  })
})
