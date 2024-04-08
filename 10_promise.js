let a = undefined;

let promiseData = new Promise((resolved,reject)=>{
    setTimeout(() => {
        a ="hello ecma"
    }, 3000);
    resolved("done")
})

promiseData.then(() => {
    console.log(a);
})

