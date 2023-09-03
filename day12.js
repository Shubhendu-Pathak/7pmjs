// //pass by value and pass by refrence

// let a = 11
// console.log('A Says ', a);

// let b = a
// console.log('B says ',b);

// b =  a + 10 
// console.log('B says ',b);

// ///----------------------------
// console.log('---------------------------');

// let c = {
//     name:'Leo',age:54
// }
// // console.log(c);

// let d = c 

// d.age=99

// console.log('C says ',c);
// console.log('D says ',d);

//Arrays

// let a = 45
// let b = true

// console.log(a);
// console.log(b);

// let a = [false,'orange','',,45]

// // console.log(a);
// console.log(typeof(a));// arrays are special type of objects

// console.log( a.length );
// console.log( a[4] );

// let a = [false,'orange','',,45]
// console.log(a);

//indexof

// console.log( a.indexOf(false) );
// console.log( a.indexOf(45) );
// console.log( a.indexOf('') );


// includes 
// console.log( a.includes(false) );
// console.log( a.includes(45) );

// push pop shift unshift
// console.log(  a.push(67) );// add at the last
// console.log( a.unshift('tree') );// add infront
// console.log( a.pop() );// removes from the end
// console.log(a.shift());// removes from the front 


// console.log(a);

//loop

// let a = [false,'orange','','Kitten',45]
// // console.log(a);

// // for( const gem of a  ) console.log(gem);

// // for( const gin in a ) console.log( gin );

// let b = a.forEach( (element,index,arr)=>{
//     // console.log(element);
//     // console.log(index);
//     // console.log(arr);
// } )

// for(let i=0;i<a.length;i++){
//     // console.log(i);
//     // console.log(a[i]);
// }

// let a = [false,'orange','','Kitten',45]
// console.log(a);

// let b = a.forEach((a,b,c )=> {
//     // console.log(a);
//     // return a // never use return
// });
// console.log(b);

//exercise

// console.log( 'Kitten'.substring(1)  );

// function one(para){
// console.log(para);

// let a = para.split(' ')
// console.log(a);

// let str = []

// for( let b of a ){
//     console.log(b)
// b.substring(1)
//     // str.push(b[0].toUpperCase()+b.substring(1))
//     // str.push(b[0].toUpperCase()+b.slice(1))
//     // str.push(b[0].toUpperCase()+b.substr(1,b.length-1))
//     // str.push(b.replace(b[0],b[0].toUpperCase()))
// }
// console.log(str);
// return str.join(' ')

// }
// console.log( one('jimmy and jack on titanic') );

let a = [1,2,3,4]
let b = ['a','b','c']
let c = [true,false]
console.log(a,b,c);


// let d = [a,b,c] // [   [a],[b],[c]   ]
// console.log(d);


// let d = [[a],[b],[c] ] // [  [[a]] , [[b]] , [[c]]  ]
// console.log(d);
// console.log( d.flat(Infinity) );

// let e = a.concat(b).concat(c)
// console.log(e);

//spread operator ( ... )
// let f = [ ...a,'jim' ]
// console.log(f);

//destructuring 

// let b = ['45','55','65',76,89,54]
// console.log(b);

// // rest operator (...)
// let [u,v, ...z ] = b
// console.log(u,v, z);


// let a =  [ 34,56,78,334,'Ear','Jam','Kin',98 ]
// console.log(a);
// console.log( a.toString() );

//slice return a new aray and does not mutates the original array

// console.log( a.slice(3) );
// console.log( a.slice(5) );
// console.log( a.slice(1,6) );
// console.log(a);

//splice return a new aray and  mutates the original array

// console.log( a.splice(2) );
// console.log( a.splice(1,6) );// start 1  num-of -elements = 6
// console.log( a.splice(1,6,'Dam') )
// console.log(a);

// let b  =[98,78]
// console.log( a.splice(1,6,b) );
// console.log(a);

// const a = 'yes'
// a= true
// console.log(a);

// const b = [ 76,87,98,54]

// b[0]='Umbra'
// b[4]='Gem'
// delete b[2]

// console.log(b);
