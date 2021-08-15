const app = new Vue({
    el: '#app',
    data: {
        message: '你好啊',
        books:[
            {
                id:1,
                name: '算法导论',
                date: '2020-9',
                price:'85.00',
                count:'1'
            },
            {
                id:2,
                name: 'UNIX编程技术',
                date: '2020-10',
                price:'59.00',
                count:'1'
            },
            {
                id:3,
                name: '编程珠玑',
                date: '2020-11',
                price:'39.00',
                count:'1'
            },
            {
                id:4,
                name: '代码大全',
                date: '2020-12',
                price:'128.00',
                count:'1'
            },
        ]
    },
    methods: {
        // getFainlPrice (price) {
        //       toFixed(2) 保留数字后面2个小数点
        //       vue使用toFixed() 这里传过来要加工转换一下类型，不然会报错
        //     price = Number(price);
        //     return '￥'+ price.toFixed(2)           
        //     }
        add(index){
            this. books[index].count++
        },
        sub(index){
            this. books[index].count--
        },
        removeHandle(index){
            this.books.splice(index,1);
        }
        },
        computed: {
            showPrice: function () {
                // 1.普通for循环
                // let totalPrice = 0;
                // for (let i = 0; i < this.books.length; i++) {
                //     totalPrice+= this.books[i].price * this.books[i].count;
                // }
                //  return totalPrice

                // 2. for (let i in this.books) 
                // let totalPrice = 0;
                // for (let i in this.books) {
                //     let books = this.books[i];
                //     totalPrice+= books.price * books.count;
                // }
                // return totalPrice
                
                // 3. for (let i of  this.books) 
                // let totalPrice = 0;
                // for (let i of  this.books) {
                //     totalPrice+= i.price * i.count;
                // }
                // return totalPrice

                // 4. reduce函数的使用  reduce(function(preValue,book){},0)
                // book代表 this.books数组下面的对象。一样可以随便命名。都能有效
                return  this.books.reduce(function(preValue,book){
                    return  preValue + book.price *book.count;
                },0)
            }
        },
        filters:{
            showPrice(price){
                price = Number(price);
                return '￥'+ price.toFixed(2)  
            }
        }
})