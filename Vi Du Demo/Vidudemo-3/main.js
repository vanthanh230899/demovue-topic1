var vm = new Vue({
    el: ".container",
    data: {
        title: "demo Vue"
    },
    beforeCreate() {
        console.log("day la ham BeforeCreate");
    },
    created() {
        console.log("day la ham Create");
    },
    beforeMount() {
        console.log("day la ham BeforeMouse");
    },
    mounted() {
        console.log("day la ham Mouse");
    }
})