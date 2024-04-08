console.log("lexical scope for this")

let data  = {
    list:"friend",
    name:["bruece","pooster","sam"],
    getfriends:function(){
        let that= this.list
        this.name.map(function(item){
            console.log(that,item)
        })
        this.name.map((item)=>{
            console.log(this.list,item)
        })
;    }
}
data.getfriends()