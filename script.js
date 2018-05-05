console.log('hello');

new Vue({
  el: '#app',
  data: {
    color: 'blue',
    width: 100
  },
  computed: {
    myStyle: function(){
      return{
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  }

})