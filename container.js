const fs = require('fs');

class Product {
    constructor (title, price){
        this.title = title
        this.price = price
    }
}

module.exports = class Container {
    constructor(name){
        this.name = name
        
        try {
            this.products = fs.readFileSync(this.name, 'utf-8')
            this.products = JSON.parse(this.products)
        } catch (error) {
            this.products = []
        }
    };

    getAll(){
        return this.products
    };
   
    getRandom(){
        return this.getById(Math.floor(Math.random() * this.products.length) + 1)
    }

    getById(id){
        try {
            let product = { id }
            for (let i = 0; i < this.products.length; i++){
                if(product.id == this.products[i].id){
                    product = this.products[i]
                }
            }
            return product;
        } catch (error) {
            return error
        }
    };
}

// const productoNew = new File('./productos.txt')
