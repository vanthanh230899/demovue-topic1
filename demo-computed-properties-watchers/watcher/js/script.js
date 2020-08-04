var vuewatcher = new Vue({
  el: "#vue_watcher",
  name: "Test",
  data() {
    return {
      Diem: 0,
      Thuy: 0,
    };
  },
  methods: {
        addDiem: function() {
              this.Diem++;
        },
        addThuy: function() {
              this.Thuy++;
        }
  },
  watch: {
        Diem: function(newValue, oldvalue) {
              console.log('Diem co so xu cu la: ' + oldvalue + ' xu. Va so xu moi la: ' + newValue + ' xu!');
        },
        Thuy: function(newValue, oldvalue) {
              console.log('Thuy co so xu cu la: ' + oldvalue + ' xu. Va so xu moi la: ' + newValue + ' xu!');
        }
  }
});
