var vueObjectClassBinding = new Vue({
      el : "#vue_object",
      data: {
            isActive: true,
            error: null
          },
      computed: {
            classObject: function () {
              return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
              }
            }
          }
  });