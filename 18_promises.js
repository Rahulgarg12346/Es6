// --- promises --- //

// promise is for "eventual" completion of task. It is an object in JS. it is a solution to callback hell

// let promise = new Promise((resolve, reject)=>{
//     console.log(`i am a promise`)
// })
//----------------------------------------------------------------------------
function getData(dataId, getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data",dataId)
            resolve("success")
            if(getNextData){
                getNextData();
            }

        }, 2000);
    })
}
// getData(1)
//     .then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res)
//     })
// })


console.log("getting data1.......");
getData(1)
  .then((res) => {
    console.log("getting data2.......");
    return getData(2);
    
  })
  .then((res) => {
    console.log(res);
  });

//--------------------------------------------------------------------------------
// Resolved: the result is a value(fulfilled)
// Rejected: the result is an error object

// const getPromise =()=>{
//    return new Promise ((resolve,reject)=>{
//         console.log("i am a promise")
//         resolve("success")
//         // reject("error")
//     })
// }

// let promise = getPromise();
// promise.then(()=>{
// console.log(`promise filled`)
// });
// promise.catch(()=>{
//     console.log(`promise falled`)
// })
//--------------------------------------------------------------------
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 2000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 2000);
//   });
// }

// console.log("function data1.......");
// asyncFunc1();
// then((res) => {
//   console.log(res);
//   console.log("function data2.......");
//   asyncFunc2();
//   then((res) => {
//     console.log(res);
//   });
// });
//---------------------------------------------------------------------