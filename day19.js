// // let p1 = new Promise((resolve,reject)=>{
// //     setTimeout(() => {
// //         resolve('FIRST');
// //         // reject('ERROR IN One')
// //     }, 3000);
// // })

// // let p2 = new Promise((resolve,reject)=>{
// //     setTimeout(() => {
// //         // resolve('Second');
// //         reject('ERROR IN TWO')
// //     }, 2000);
// // })

// // let p3 = new Promise((resolve,reject)=>{
// //     setTimeout(() => {
// //         // resolve('Third');
// //         reject('Error in Three')
// //     }, 1000);
// // })

// // // let a = Promise.all([p1,p2,p3])
// // // let a = Promise.allSettled([p1,p2,p3])
// // // let a = Promise.race([p1,p2,p3])
// // let a = Promise.any([p1,p2,p3])
// // a.then(data=>console.log(data))

// //Async Await


// function getCheese() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const cheese = "CHEESE";
//         console.log("Here is " + cheese);
//         resolve(cheese);
//         // reject('error')
//       }, 2000);
//     });
//   }
  
//   function makeDough(para) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const dough = para + " Dough";
//         console.log("here is  " + dough);
//         resolve(dough)
//         // reject("error");
//     }, 2000);
//     });
//   }
  
// async function one(){

// const pen = await getCheese()
// // console.log(pen);
// const tree = await makeDough(pen)
// console.log('Pizza is ready');
// }
// one()



// //   getCheese()
// //   .then((a) => {
// //     console.log("Got the " + a);
// //     return makeDough(a);
// //   })
// //   .then((b) => {
// //     console.log("Got the " + b);
// //   })
// //   .catch((data) => {
// //     console.log(data);
// //   });


//Example 2

// async function one(){
//     let india = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('India')
//         }, 1000);
//     })

// let nepal =  new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('NEPAL')
//     }, 5000);
// })



// console.log('GETTING INDIA');
// let i = await india 
// console.log('GETTING NEPAL');
// let n = await nepal
// console.log('GOT NEPAL');
// return [i,n]

// }


// let result =  one() 
// result.then(data=>console.log(data))