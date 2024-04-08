class fruits {
    name ="orange"
    constructor() {
        console.log("constructore",this.name)
    }
    getfruits(){
        return "apple"
    }
}
let f1 = new fruits
console.log(f1.getfruits())