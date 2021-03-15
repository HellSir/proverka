let app = new Vue({
    el: '#app',
    data: {
        products: [
            // {name: 'product1', price: 100, quantity: 4,total:0},
            // {name: 'product2', price: 200, quantity: 5,total:0},
            // {name: 'product3', price: 300, quantity: 6,total:0}
            ],
        sum:0,
        name:'',
        price:'',
        quantity:'',
        total:0,
        value1: 40
    },
    methods:{
        app: function (){

    },
        plus: function (){
            this.products.push({name:this.name,price:this.price,quantity:this.quantity, total:this.total})
            console.log(this.products);
            let summ = 0;
            this.products.forEach(element => console.log(element.total = element.price*element.quantity));
            this.products.forEach(element => console.log(summ += element.total));
            this.sum = summ;
            this.value1 = parseInt(this.value1) +  40+'px';
        },
        deleted: function (){
          this.products.pop();
            this.value1 = parseInt(this.value1) -  40+'px';
        }
    }
});