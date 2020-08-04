var vuecomputed = new Vue({
   
      el: '#computed_properties',
      data: {
        firstname: "",
        lastname: "",
        birthday: "",
      },
      computed: {
        getfullname: function(){
              return this.firstname + " " + this.lastname;
        },
      },
});
