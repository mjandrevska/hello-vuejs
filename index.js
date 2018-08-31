window.onload = function(){
  var app = new Vue({
    el: '#app',
    data: {
      message:'Hello Vue'
    }
  });

  var app2 = new Vue({
    el: '#app-2',
    data:{
      message:'You loaded this page on ' + new Date().toLocaleString()
    }
  });

  var app3 = new Vue({
    el:'#app-3',
    data:{
      seen: false
    }
  });

  var app4 = new Vue({
    el:'#app-4',
    data:{
      todos:[
        { text: 'Learn Javascript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  });

  var app5 = new Vue({
    el:'#app-5',
    data: {
      message:'Hello Vue.js'
    },
    methods: {
      reverseMessage: function(){
        this.message = this.message.split('').reverse().join()
      }
    }
  });

  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  });

  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })

  var app7 = new Vue({
    el: '#app-7',
    data:{
      groceryList:[
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  });

  var app8 = new Vue({
    el: '#app-8',
    data: {
      msg: 'This is another message to show'
    }
  });

  var app9 = new Vue({
    el: '#app-9',
    methods:{
      doSomething: function(){
        alert('Hello')
      }
    }
  });

  var app10 = new Vue({
    el:'#app-10',
    data:{
      message: 'Hello'
    },
    computed: {
      reversedMessage: function(){
        return this.message.split('').reverse().join('')
      }
    }
  });
  console.log(app10.reversedMessage);
  app10.message = 'Goodbye';
  console.log(app10.reversedMessage);
};
