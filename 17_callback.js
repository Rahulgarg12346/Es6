// CALLBACKS

// JavaScript mein, ek "callback function" ek function hoti hai jo dusre function mein parameter ke roop mein pass ki jati hai aur baad mein wo function execute hoti hai. Jab ek particular event ya operation complete hoti hai, tab callback function execute hoti hai.



// A callback is a function passed as an argument to another function
// function sum(a,b){
//     console.log(a+b)
// }
// function calculator(a,b){
// sumCallback(a,b)
// }

// calculator(1,2,sum)

// nesting

// nesting hota h if else ke ander if lagana

// callback Hell

function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("Data",dataId)
        if(getNextData){
            getNextData();
        }
        
    }, 2000);
}

// callback hell
getData(1,()=>{
    console.log("call back hell")
    getData(2,()=>{
    console.log("call back hell")
        getData(3);
    })
})
