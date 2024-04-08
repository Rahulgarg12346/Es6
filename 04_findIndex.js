//find // ye output me value deta h 
// iske ander object bhi le skte h-->
//finIndex // ye output me index value deta h jus like 0 ,1  

    let data  = [10,20,7,50,1,100]
    let result = data.find(function(item){
        return item<10;
    })
    console.log(result)
    let result1 = data.findIndex((item)=>item<7)
    console.log(result1)

    //------object example------//

    let data1 = [
        {id:20},
        {id:10},
        {id:30},
        {id:40},
        {id:50}
    ]
    let result3 = data1.find((item)=>{
        return item.id>20
    })
    console.log(result3)