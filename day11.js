// // \w = checks for a-z A-Z 0-9 and underscore
// let a = 'The five boxing wizards jump quickly 867867 $#%#%#$'
// let b = /\w/gi
// let c = a.match(b)
// console.log(c);

//  \W = checks for element except a-z A-Z 0-9 and underscore
// let a = 'The five boxing wizards jump quickly 867867 $#%#%#$'
// let b = /\W/gi
// let c = a.match(b)
// console.log(c); 

// let a = 'Your sandwich will be Rs 45.00'
// // let b = /\d/g
// let  b = /WiLL/gi
// let c = a.match(b)
// console.log(c); 

// let a = 'Your sandwich will be Rs 45.00 ^*%%_'
// let b = /\D/gi // return non-number characters
// let c = a.match(b)
// console.log(c); 

//exercise
// + = one or more 
// * = zero or more


// let a = 'hari'
// let b = /^[A-Za-z]{2,4}\d*$/gi 
// let c = a.match(b)
// console.log(c); 

// let a ='Whitespace is important in seperating words'
// let b = /\s/g
// let c = a.match(b)
// console.log(c);
// console.log(  a.replace(b,'-')  );

// let a ='Whitespace is important in seperating words'
// let b = /\S/g
// let c = a.match(b)
// console.log(c);
// console.log(  a.replace(b,'*')  );

// let a = "Ohh no"
// let b = /Oh{3,} no/
// let c = b.test(a)
// console.log(c);

// let a = "Hazzzzah"
// let b = /z{3,}/
// let c = b.test(a)
// console.log(c);

// let a = "Timmmmber"
// let b = /Tim{4}ber/
// let c = b.test(a)
// console.log(c);

// let a = "favorite"
// let b = /favou?rite/
// let c = b.test(a)
// console.log(c);

// let a = "su fu qu tu yu hg ty re"
// let b = /t(?=u)/g
// let c = a.match(b)
// console.log(c);

// let a = "su fu qu tu yu hg ty re qd"
// let b = /q(?!u)/
// let c = a.match(b)
// console.log(c);

// **************************************
// let a = "astro56"
// let b = /(?=\w{5})(?=\D*\d{2})/
// // let c = a.match(b)
// let c = b.test(a)
// console.log(c);
// *****************************************


// let a ='regex regex regex' 
// let b =/(\w+)\s\1/
// let c = a.match(b)
// console.log(c);

// **********************
// let a ='42 42 42' 
// let b =/^(\d+)\s\1\$/
// let c = a.match(b)
// console.log(c);
//************************ */

// let  a= 'The sky is blue'
// console.log(a);
// let b = /blue/
// console.log(a.replace(b,'*'));

// let a  = 'Evolution Code Camp'
// console.log(a);
// console.log(a.replace(/(\w+)\s(\w+)\s(\w+)/,'$3 $2 $1')  );


// let a = ' Hello World!  '
// let b = /^\s+|\s+$/g
// console.log( a.replace(b,'*') );

// loops = iterates

// for( let a = 1; a < 7 ;a++){
//     console.log('hen '+a);
// }

// for(let a =3;a<15;a++){
//     // if(a===7) break;
//     // if(a===7) continue;

// if( a%2===0 ) continue;

//     console.log(a);
// }