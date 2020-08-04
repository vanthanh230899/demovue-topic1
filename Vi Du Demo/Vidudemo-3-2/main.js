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
        // document.getElementById("text").style.color = "blue";
    },
    mounted() {
        console.log("day la ham Mouse");
        document.getElementById("text").style.color = "blue";
    }
})