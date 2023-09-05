// bind

// let a = {
//     registrationNumber:'Hy234',
//     brand:'Audi',
//     displaydetails(){
//         return this.registrationNumber+' '+this.brand
//     }
// }

// console.log( a.displaydetails() );

// console.log(a.displaydetails);
// let b = a.displaydetails
// console.log( b() );

// let c = a.displaydetails.bind(a)
// console.log(c());

//optional chaining

// let a ={
//     name:'Philip Lahm',
//     homeaddress:{country:'india'},
//     myhobby:['swimming','singing'],
//     about(){
//         return `My name is ${this.name}`
//     }
// }
// console.log(a);

// console.log( a.myname );
// console.log( a.homeaddress.country );
// console.log(a.officeaddress?.country);
// console.log(a.myhobby[1]);
// console.log(a.myhobbies?.[1]);
// console.log(a.about());
// console.log(a.aboutme?.());

// console.log(87);

//Nullish Operator ??

// let a ={
//     name:'Philip Lahm',
//     homeaddress:{country:'india'},
//     myhobby:['swimming','singing'],
//     about(){
//         return `My name is ${this.name}`
//     }
// }
// console.log(a);

// console.log( a.homeaddress.country );
// console.log(a.officeaddress?.country ??  'Office address is not Defined');
// console.log(a.myhobby?.[1] ?? 'Index not available');
// console.log( a.myhobbies?.[1] ?? 'Not Available' );
// console.log(a.about());
// console.log(a.myabout?.() ?? 'method undefined');

// Array of Obbjects

// const account1 = {
//     owner: 'Jonas Schmedtmann',
//     movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//     interestRate: 1.2, // %
//     pin: 1111,
//   };
  
//   const account2 = {
//     owner: 'Jessica Davis',
//     movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//     interestRate: 1.5,
//     pin: 2222,
//   };
  
//   const account3 = {
//     owner: 'Steven Thomas Williams',
//     movements: [200, -200, 340, -300, -20, 50, 400, -460],
//     interestRate: 0.7,
//     pin: 3333,
//   };
  
//   const account4 = {
//     owner: 'Sarah Smith',
//     movements: [430, 1000, 700, 50, 90],
//     interestRate: 1,
//     pin: 4444,
//   };

//   const accounts = [account1, account2, account3, account4];// array of objects

// console.log(accounts);

// //creata a new array with only names

// let a = accounts.map((ele)=>{
// // console.log(ele)
// return ele.owner
// })
// // console.log(a);

// //creata a new array with only pinnum
// let b = accounts.map(ele=>ele.pin).reduce((acc,ele)=>acc+ele)
// console.log(b);

//grt only +ve movement nums

// let c = accounts
// .map(ele=>ele.movements)
// .flat(Infinity)
// .filter(ele=>ele>0)
// .reduce((acc,ele)=>acc+ele)

// // console.log(c);

// //
// let d = accounts.map(ele=>{
//     return Object.entries(ele)
// })
// console.log(d);

