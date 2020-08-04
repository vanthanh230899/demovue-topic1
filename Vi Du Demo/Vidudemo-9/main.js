var vm = new Vue({
    el: ".container",
    data: {
        source: "https://thuthuatnhanh.com/wp-content/uploads/2020/03/hinh-ve-de-thuong-cute.jpg"
    },
    methods: {
        changeImage: function () {
            this.source = "https://img2.thuthuatphanmem.vn/uploads/2018/12/01/hinh-ve-de-thuong-va-dep_114054727.jpg"
        }
    }
})