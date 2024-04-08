let data= [10,20,30,40,50]

        function test()
        {
            return 1;
        }
        let test2 = function()
        {
            return 1;
        }
        let test3 =()=>{
            return 1
        }
        console.log(test())
        console.log(test2())
        console.log(test3())
        let newdata= data.map(function(item){
            return item*2
        })
        console.log(newdata)
      // ---- ARROW FUNTION ------- //
      let item = {
        name:"rahul",
        getName:function()
        {
            console.log("normal",this.name)
        },
        getNameArrow:()=>{
            console.log("arrow",this.name)
        }
      }

      item.getName(); // normal function me arrow hota h
      item.getNameArrow(); // Arrow function me this nhi hota h to parent to call kra let h 