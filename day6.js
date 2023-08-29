// // Strings

// // let a  = 'Pine - Apple'
// // console.log(a);
// // console.log( a.length );

// //index number
// // console.log( a[0] );
// // console.log( a[1] );
// // console.log( a[11] );
// // console.log(a[-1]);

// // console.log('------------------');

// // // //indexof
// // console.log( a.indexOf('P') );
// // console.log( a.indexOf('i') );
// // console.log(a.indexOf('e'));
// // console.log( a.indexOf('I') );

// // // charAt
// // console.log( a.charAt(0) );
// // console.log( a.charAt(1) );
// // console.log( a.charAt(2) );
// // console.log( a.charAt(3) );

// // //includes
// // console.log( a.includes('P') );
// // console.log( a.includes('I') );

// // trim
// // let a  = '   Pi ne    '
// // console.log(a);
// // console.log( a.length );

// // console.log(a.trimStart());
// // console.log(a.trimEnd());
// // console.log(a.trim());

// //lowercase and uppercase


// // let a  = 'PineAPPLE'
// // console.log(a);
// // console.log( a.length );

// // console.log(a.toUpperCase());
// // console.log(a.toLowerCase());

// ///exercise

// // let user = 'kripa12@yahoo.com'

// // function checkemail(myemail){

// // console.log( myemail );

// // let a = myemail.toLowerCase()
// // console.log(a);

// // // if( user.includes(a) ){
// //     if( user===a ){
// //     return 'Logged In '
// // }else{
// //     return 'Login failed'
// // }


// // }
// // console.log( checkemail('KRipa12@YAHoo.com') );
// // console.log( checkemail('KRipa23@yahOO.com') );

// //concatination

// // let  a= 'Lion'
// // let b ='ess'
// // console.log(a+b);

// // let c = a.concat(b)
// // console.log(c);

// // substring
// // let a  = 'Pine-Apple'
// // console.log(a);
// // console.log( a.length );

// // console.log( a.substring(3) );
// // console.log( a.substring(2) );
// // console.log( a.substring(6) );

// // console.log( a.substring(2,5) );//start = 2  end = 5-1
// // console.log( a.substring(1,7) );//start = 1  end = 7-1

// // loop to find index of string ex

// //substr
// // let a  = 'Pine-Apple'
// // console.log(a);
// // console.log( a.length );

// //  console.log( a.substr(4));
// //  console.log(a.substr(7));

// //  console.log( a.substr(1,4) );// start = 1  length = 4
// //  console.log( a.substr(3,2) );//start = 3  length = 2

// //slice
// // let a  = 'Pine-Apple'
// // console.log(a);
// // console.log( a.length );

// // console.log( a.slice(4) );
// // console.log( a.slice(4,7) );// start = 2  end = 7-1 
// // console.log( a.slice(5,8) );// start = 2  end = 7-1

// // console.log( a.slice(-2) );
// // console.log( a.slice(-4) );

// // console.log( a.slice(-7,-2)  );//start = -7   end = -2-1= -3

// //exercise 2 

// // let a = 'Kite'
// // console.log(a);
// // console.log(a.length);

// // for(let i=0;i<a.length;i++){
// //     console.log( i+' '+a[i] );
// // }

// //replace

// // let  a= 'PineApple'
// // console.log(a);
// // console.log( a.replace('Pine','PEAR') );
// // console.log( a.replace('Apple','⚡') );

// //exercise 3

// // function one(name){
// // console.log(name);

// // let a = name.replace('Dev','Dev'.toUpperCase())
// // return a

// // }
// // console.log( one('Dev-Swami') );

// //pad start amd padend

// // let a = 'Lime'
// // console.log(a);
// // console.log(a.length);

// // console.log( a.padStart(4,'*') );
// // console.log( a.padEnd(7,'*') );

// //exercise 4 
// // ******7857

// // function one( num ){

// // let a = String(num)
// // let b = a.slice(-4)
// // console.log(b);
// // let c = b.padStart(10,'*')
// // return c

// // }
// // console.log( one(987654320) );

// //split and join

// // let a ='Mis sis sip pium'
// // console.log(a);

// // let b = a.split(' ')
// // console.log(b);

// // let a ='Mississippium'
// // console.log(a);

// // let b = a.split('i')
// // console.log(b);

// // console.log( b.join('i') );


// // let a = 'Kangaroo'
// // console.log( a.split('a').join('^')  );

// // let a ='Mississippium'
// // console.log(a);
// // console.log(typeof(a));

// // let b = a.split('i')
// // console.log(b);
// // console.log( typeof(b) );

// // let c = b.join('i') 
// // console.log(c);
// // console.log(typeof(c));

// //exercise 5 

// // let a = 'Hill' 
// // console.log(a);
// // console.log( a.slice(0,1) );//start 0  end = 1-1 = 0

// function one(para){
//     // console.log(para);
// let a = para.split(' ')
// // console.log(a);

// let result =''

// for( let i=0;i<a.length;i++ ){
// let b  = a[i].slice(0,1).toUpperCase()+ a[i].slice(1)
// result += b+',' 
// // console.log(b);
// }
// // console.log(result);
// let c = result.split(',')
// // console.log(c);

// let d = c.join(' ').trim()
// return d;

// }
// console.log( one('i was on a hill'));
// console.log( one('we were going to play soccer in the fields'));000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000