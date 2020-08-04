var vm = new Vue({
    el: ".container",
    data: {
        biena: null,
        bienb: null,
    },
    methods: {
        tinhTong: function (a, b) {
            return a == null || b == null ? 0 : parseInt(a) + parseInt(b);
        }
    }
})