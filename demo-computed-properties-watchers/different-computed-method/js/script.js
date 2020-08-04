var vuemethod = new Vue({
      el: '#vue_method',
      data: {
            a: 0,
            b: 0, 
            age: 10
      },
      methods: {
            addtoAMethod: function(){
                  console.log('addtoAMethod');
                  return this.a + this.age;
            },
            addtoBMethod: function(){
                  console.log('addtoBMethod');
                  return this.b + this.age;
            }

      }
});


var vuecomputed = new Vue({
      el:'#vue_computed',
      data: {
            a: 0,
            b: 0, 
            age: 10
      },
      computed: {
            addtoAComputed: function(){
                  console.log('addtoAComputed');
                  return this.a + this.age;
            },
            addtoBComputed: function(){
                  console.log('addtoBComputed');
                  return this.b + this.age;
            }
      }
});