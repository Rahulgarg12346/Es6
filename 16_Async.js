
// ----------- async ex --------//
// console.log("one")
// console.log("two")
// setTimeout(() => {
//     console.log("hello")
// }, 2000);

// console.log("three")
// console.log("four")



// // Example asynchronous function that simulates fetching data
// function fetchData() {
//     return new Promise((resolve,rejected) => {
//         setTimeout(() => {
//             resolve('Data fetched successfully');
//         }, 2000); // Simulate a delay of 2 seconds
//     });
// }

// // Async function using await to wait for fetchData to complete
// async function processData() {
//     try {
//         console.log('Fetching data...');
//         const data = await fetchData();
//         console.log('Data:', data);
//         console.log('Data processing complete');
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// // Call the async function
// processData();

//---------------------------------------------------------
// function Jatin(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("data successfully sent")
//         }, 2000);
//     })
// }

// async function rahul(){
//     try{
//         console.log("data loading.....");
//         let me = await Jatin()
//         console.log("data",me)
//         console.log("data fetch successfully")
//     }catch{
//         console.log(error)
//     }
// }

// rahul();

//-------------------------------------------------------


const datafetch=()=>{
    return new Promise(()=>{
        setTimeout(() => {
            console.log('fetech data')
        }, 3000);
    })
}

async function fetch(){
    try{
        console.log("data fetch loading .....")
        let my = await datafetch()
        console.log('data', my)
    }catch{
        console.log(erro)
    }
}
fetch();


//---------------- api fetch data -------------------------------------

// async function data(){
//     try{
//         let response = await fetch("http//:localhost3000/data")
//         let date = await response();
//         console.log(data);
//     }catch{
//         console.log(error)
//     }
// }