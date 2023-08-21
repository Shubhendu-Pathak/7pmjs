// Function
// let a = 2
// let b = 3

// let sum = a + b // 7
// let sq = sum**2 // 7**2  49
// console.log(sq);

// console.log('-----------------------');

//function decleration

// function one(a,b){
//     let sum = a+ b
//     return sum**2
// }

// console.log( one( 4,3 ) );
// console.log( one( 2,3 ) );

// function funcName(para){
//     return para * 10
// }

// funcName(argument)//invoking or calling a function

// function one(a,b){
//     console.log(`a is ${a} and b is ${b}`);
//     let sum =  a + b
//     console.log('Console log says '+sum);
//     // console.log(typeof(sum));
//     return `Return says ${sum}`
// }

// console.log( one( 10,4 ) );
// console.log( one( 'Milk','Man' ) );
// console.log( one( 'Milk',400 ) );
// console.log( one(20,) );

//functional, Expression

// const  one = function(para1,para2){
//     return para1*para2
// }

// console.log( one(20,10) );

//arrow function

// const one = (para)=>{
// return para+2
// }
// console.log( one( 10 ) );

// const one = (para,para2) => {
//     return para + para2
// }
// console.log( one( 5,10 ) );

// const one = para =>  para + 5
// console.log( one( 5,10 ) );

// console.log('--------------------------');

//  function a(x){
//     console.log(x);
//  }

//  function b() {
//     a('B says jamie vardy')
//  }

//  function c(){
// a('C says Lionel Scolari')
//  }

//  c()
//  b()

console.log("--------------------------");

// callback funct =  func returned or passed as parameter


// callback hell
// function a() {
//   return function b() {
//     return function c() {
//       return "C is Returned";
//     };
//   };
// }
// console.log(a()()());
// console.log(b());

// function a( para ){
    
//     return para
// }

// console.log( a(  () =>  'Call Back Function'   )()  );
// console.log(  a(99) );

// ques

//even or odd

// function one(para){

// if( para%2===0 ){
//     return 'EVEN'
// }else{
//     return 'ODD'
// }

// }

// console.log( one(23)  );
// console.log( one(22)  );


///check if number


// console.log(  isNaN('Jam') );

// console.log(  typeof(false)===typeof(45) );

// const one = para =>{
// console.log(typeof(para));

// if(typeof(10)===typeof(para)){
//     return ' A NUMBER DATA TYPE';
// }else{
//     return 'Not A NUMBER DATA TYPE';
// }

// }

// console.log( one( 'Fan' ) );
// console.log( one( 56 ) );
// console.log( one( true ) );

// area of triangle

function one( b,p ){

    let area = 0.5 * b * p
    return `The area of Triangle is ${area}`

}

let b = +(prompt('Enter Base'))
console.log(b);
console.log(typeof(b));
let p = +(prompt('Enter the height'))
console.log(p);
console.log(typeof(p));

console.log(  one( b,p ) );
