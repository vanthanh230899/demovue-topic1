var vuecomputed = new Vue({
      el: '#vue_computed',
      data: {
            firstName: "Ngô Thị Ngọc",
            lastName: "Diễm"
      },
      computed: {
            getfullName: function(){
                  return this.firstName + " " + this.lastName;
            },
      },
      
});

var vuewatcher = new Vue({
      el: '#vue_watcher',
      data: {
            firstName: "Ngô Thị Ngọc Diễm",
            lastName: "Diễm",
            getfullName: "Ngô Thị Ngọc Diễm"
      },
      watch: {
            firstName: function (val) {
                  this.getfullName = val + ' ' + this.lastName;
            },
            lastName: function (val) {
                  this.getfullName = firstName + val + ' ';
            }
      }
});