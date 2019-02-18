/*new Vue({
  el: '#app',
  data: {
      title: 'Hello World!',
      link : 'https://www.googl88.com',
      finishedLink : '<a href="http://www.google.com">Google</a>'
  },
  methods:
  {
    sayHello: function()
    {
        this.title = 'Hello !';
        return this.title;
    }
  }
});*/

/*
new Vue({
el:'#app',
data:{
  counter :0,
  x:0,
  y:0
},
methods:
{
  increase: function(step,event)
  {
    this.counter+=step;
  },
  updateCoordinates: function(event)
  {
      this.x = event.clientX;
      this.y = event.clientY;
  },
  alertMe: function()
  {
    alert('Alert!');
  }

}

});*/

/*
new Vue({
  el:'#app',
  data:
  {
    counter: 0,
    seconCounter: 0
  },
  computed:
  {
    output: function()
    {
      console.log('computer');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  },
  methods:
  {
    result: function()
    {
     console.log('resulted');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  },
  watch : 
  {
    counter : function(){
      var vm = this;
      setTimeout(function(){
        vm.counter=0;
      },2000);
    }
  }

});*/
new Vue({
	el: '#app',
  data: {
  	color: 'gray',
    width: 100
  },
  computed: {
  	myStyle: function() {
    	return {
      	backgroundColor: this.color,
        width: this.width + 'px'
      };
    }
  },
  object:
  {
    firstname : 'Yilmaz',
    lastname : 'SEN',
    age : 25
  }
});