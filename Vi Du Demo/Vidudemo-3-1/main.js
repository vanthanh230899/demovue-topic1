var vm = new Vue({
    el: ".container",
    data: {
        title: "demo Vue"
    },
    beforeCreate() {
        console.log(this.title);
    },
    created() {
        console.log(this.title);
    },
    beforeMount() {
        console.log("day la ham BeforeMouse");
    },
    mounted() {
        console.log("day la ham Mouse");
    }
})