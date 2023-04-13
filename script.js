class Tort{

    //  Оказалось, что поля можно не задавать таким образом,
    //  если они есть в конструкторе
    
    price
    name

    sugar
    eggs
    chocolate
    cream

    constructor(n){

        this.name = n

        switch(this.name){
            case "Прага":
                this.sugar = 100
                this.eggs = 6
                this.chocolate = 500
                this.cream = 200

                break

            case "Зебра":
                this.sugar = 150
                this.eggs = 3
                this.chocolate = 700
                this.cream = 300

                break

            default: break
        }

        this.calculatePrice()

        this.returnInfo()
    }

    calculatePrice(){
        this.price = (this.sugar * 50) + (this.eggs * 100) + (this.chocolate * 200) + (this.cream * 25)
    }

    returnInfo(){
        console.log(`Торт: ${this.name}, содержит в себе:\nСахар: ${this.sugar}\nЯйца: ${this.eggs}\nШоколад: ${this.chocolate}\nСливки: ${this.cream}\n\nСтоимость: ${this.price}`)
    }
}


//let zebr = new Tort("Зебра")

let cart = []


function placeInCart(name){
    cart.push(new Tort(name))
}

function calcCart(){

    let summ = 0

    for (const iterator of cart) {
        summ += iterator.price
    }

    console.log(summ)
}


placeInCart("Прага")
placeInCart("Зебра")
placeInCart("Зебра")


calcCart()