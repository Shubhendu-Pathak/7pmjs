// execution context
// var a =5

// console.log(c);

// function sq(num){
//     var ans = num**2
//     console.log(ans);
//     return ans
//     // console.log(ans);
// }
// var sq2 = sq( a )
// var sq3 = sq(6)

//  funct express and arrow func are treated like a variable

// function one(){
//     return 'Decleration'
// }

// var two = ()=> 'Arrow Func'

// var three = function(){
//     return 'Func Expression'
// }

// console.log(  one() )
// console.log( two() );;
// console.log(three());

//hoisting

// console.log( a );

// var a = 89

// console.log(a);

// {
// // TDZ starts
// //TDZ CONTINNUES
// //TDZ CONTINNUES
// //TDZ CONTINNUES
// //TDZ CONTINNUES
//     // console.log(b);// Refrence Error //TDZ CONTINNUES
//     //TDZ CONTINNUES
//     //TDZ CONTINNUES
//     //TDZ CONTINNUES
// //TDZ CONTINNUES
//     let  b = true// TDZ stops
//     //TDZ not exist
//     //TDZ not exist
//     //TDZ not exist
//     console.log(b);

// }

// {
//     // TDZ starts
//     //TDZ CONTINNUES
//     //TDZ CONTINNUES
//     //TDZ CONTINNUES
//     //TDZ CONTINNUES
//         console.log(b);// Refrence Error //TDZ CONTINNUES
//         //TDZ CONTINNUES
//         //TDZ CONTINNUES
//         //TDZ CONTINNUES
//     //TDZ CONTINNUES
//         const  b = true// TDZ stops
//         //TDZ not exist
//         //TDZ not exist
//         //TDZ not exist
//         console.log(b);

//     }

// console.log( a() );

// function a(){
//     return 'A'
// }
// console.log(a());

// console.log('---------------------');

// TDZ continuse

// console.log(a());

// let a = function(){// TDZ stops
//     return 'A'
// }

// // TDZ doesnt exists
// console.log(a());

// console.log('----------------');

// //TBZ Continues
// console.log( arr() );//Tdz continues

// const  arr = ()=> 'Arrow'// TBZ COntinues

// //TDZ does not exist

// console.log(arr());

//scope and scope chain

// function a(){
//    console.log(d);
//     var b = 99
//     c()
//     function c(){
//         console.log(b);
//     }

// }
// var d = false
// a()

// console.log('----------------------------');

// function a() {
 
//     console.log(b);

//   c();
//   function c() {

//   }
// }

// let b = 56
// a();

// function a(){
//     var  b = 55
// c()
//     function c(){
// console.log(b);
//     }
// }

// a()

// function a(){

// c()
//     function c(){
// console.log(b);
//     }
// }
// var  b = 55
// a()

function a(){

    c()
        function c(){
            var  b = 55
        }
    }

    console.log(b);
    a()