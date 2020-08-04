var vm = new Vue({
    el: ".container",
    data: {
        title: "demo Vue",
        mssg: "Nguyen Thu Tuyet"
    },
    methods: {
        eventClick: function () {
            return this.mssg = "Hoa Tuyet"
        }
    }

})