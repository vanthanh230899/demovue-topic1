var vueInstance = new Vue({
    el: '#app',
    data: {
        ass:"123123",
        title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        url: 'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
        target: '_blank',
        price: 40000,
        sale: 0.1,
        selectedProduct: 0,
        cardNumber: 1,
        listProductDetail: [
            {
                image: './images/red.jpg',
                quantity: 0,
                textColor: 'Màu Đỏ'
            }, {
                image: './images/blue.jpg',
                quantity: 8,
                textColor: 'Màu Xanh'
            }, {
                image: './images/black.jpg',
                quantity: 2,
                textColor: 'Màu Đen'
            }, 
        ],
        listDesc: [
            'Chất liệu: polyester và thun',
            'Thoát mồ hôi tốt',
            'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
            'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
            'Chất liệu: polyester và thun'
        ],
        description: `<h1>lalalal</h1>`
       
    },
    methods: {
        handleClickColor(e, index) {
            this.selectedProduct = index;
            // console.log(e, index, this);
        },
        classActive(index) {
            return {
                active: this.selectedProduct === index
            }
        },
        handleAddToCart(e) {
            if(this.getProduct.quantity < 1) {
                alert('So luong khong du');
            } else {
                this.cardNumber = this.cardNumber + 1;
            }
            console.log(e.target)
            this.getProduct.quantity -= 1;
            this.ass = "vanthanh";
        }
    },
    computed: {
        formatOriginalPrice() {
            var number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        formatFinalPrice() {
            var number = this.price - this.sale * this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        getProduct() {
            let index = this.selectedProduct;
            return this.listProductDetail[index];
        }
    }
});
