// inheritance me data parent se child me chala jata
class Category{
    getfruits(){
        return "allmond is dry furit"
    }
    pomefruit(){
        return "apple is pome fruit"
    }
}
class fruits extends  Category{
    constructor(){
        super()
        console.log("constructor")
    } 
    getfruits(){
        return "you got apple"
    }
}
 let f1 = new fruits;
 console.log(f1.getfruits())
console.log(f1.pomefruit())
 // super() parent class ko use kane ke liye use kiya jata 