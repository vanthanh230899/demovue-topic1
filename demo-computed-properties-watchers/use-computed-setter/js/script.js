var vm = new Vue({
      el: '#vue_setter',
      data: {
        a: 1
      },
      computed: {
        b: {
          // getter
          get: function () {
            return this.a + 1;
          },
          // setter
          set: function (newValue) {
            this.a = newValue - 1;
          }
        }
      }
});