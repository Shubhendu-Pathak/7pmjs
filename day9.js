//5 real.png = png     erwe.mp4 = mp4

// function a(para){
//     console.log(para);

//     let a = para.split('.')
//     console.log(a);
//     return `The extension of your filename ${para} is ${a[1]}`


// }
// console.log( a('frank.txt') );
// console.log( a('index.html') );

//6  a-b <=13   a-b ===> 2(a-b)

// console.log( Math.abs(-78) );

// function one(num1,num2){
// console.log( num1,num2 );
// let a = Math.abs(num1-num2) 
// if( a <= 13 ){
//     return `The diff of ${num1} and ${num2} is ${a}` 
// }else{
//     return `The diff of ${num1} and ${num2} is ${2*a}` 
// }

// }
// console.log( one(2,8) );
// console.log( one(20,5) );

//7  do  a+b ,else if a===b   or  3( a+b )

// function one(a,b){

// console.log(a,b);
// if( a===b ) return `The sum of ${a,b} is ${3*(a+b)}`
// else  return `The sum of ${a,b} is ${a+b}`

// }
// console.log( one(9,11) );
// console.log(one(9,9));

//8 do a-b if a-b>20 then 3(a-b)

//9 check if a num is between 100 & 400

//10 check if a num is -ve or +ve   Hint ( num > 0 = +ve else num < 0 -ve)

//11

// function one(para){
// console.log(para);

// let a = para.toLowerCase().substr(0,2)
// console.log(a);

// if( a=='py' ) return para.slice(2) 
// else return para

// }
// console.log( one( 'Python' ) );
// console.log( one('Javascript') );

//12  min 3 charac   one = eno

// function one(para){

//     console.log(para);
//     let a = para.length
//     console.log(a);
// let first = para.substr(0,1)
// console.log('first '+ first);
//     let last = para.slice(-1)
//     console.log(last);
//     let middle = para.substr(1,para.length-2)
//     console.log(middle);

//     if( a >= 3 ) return last+middle+first
//     else  return 'You entered less than 3 characters'

// }
// console.log(one('apple'));
// console.log( one( 'one' ) );
// console.log( one('on') );


//13// num is multiple of 3 or 7 or both  hint(use remainder operator)

//14 

// function one(para){

// console.log(para);

// let a = para.toLowerCase().includes('java')
// console.log(a);

// if( a===true  ) return para.substring(4)
// else return para

// }
// console.log( one('JavaScript') );
// console.log(one('cAscading'));

//15 

// 1 & 2 & 3 
// 1&2 || 2&3 || 1&3
// else false

// function one(num1,num2,num3){

// if(  num1 <= 100 && num1 > 50 &&  num2 <= 100 && num2 > 50 &&  num3 <= 100 && num3 > 50  ) return true
// else if( (num1 <= 100 && num1 > 50 &&  num2 <= 100 && num2 > 50) || (num1 <= 100 && num1 > 50 &&  num3 <= 100 && num3 > 50)  || ( num3 <= 100 && num3 > 50 &&  num2 <= 100 && num2 > 50 ) ) return true
// else return false

// }
// console.log( one( 78,56,199 ) );
// console.log( one(199,299,56) );


//16 
// function one(num1,num2,num3){
// if(  num1 <= 100 && num1 > 50 &&  num2 <= 100 && num2 > 50 &&  num3 <= 100 && num3 > 50 || ( num1 <= 100 && num1 > 50 &&  num2 <= 100 && num2 > 50 || num1 <= 100 && num1 > 50 &&  num3 <= 100 && num3 > 50 ||  num3 <= 100 && num3 > 50 &&  num2 <= 100 && num2 > 50)  )  return true
// else return false

// }
// console.log( one( 78,56,199 ) );
// console.log( one(199,299,56) );

//20  find script at index 4 if true remove a nd return the remaining string else script + para 

//21 
// 100- 30 =70
// 100 - 70 =30

// function one(num1,num2){

// if( 100-num1 > 100 -num2 ) return `${num2} is closer to 100`
// else return `${num1} is closer to 100`

// }
// console.log( one(67,98) );
// console.log( one(67,8) );

//21 betn 2 num   num1 is within 40-60 and num2 is 70-100

// 22
// fishing
// start end 'f' 

// function one(para1,para2,para3,para4){

// console.log( para1,para2,para3,para4 );

// let a =  para1.slice(para3,para4+1)
// console.log(a);
// let b = a.includes('h') ? true :false
// return b

// }
// console.log( one( 'fishing','h',3,6 ) );
// console.log( one( 'sunflower','r',4,8 ) );

//23

function one(para){

    console.log(para);
    let a = para.split(' ')
    console.log(a);
let txt 
    for(let i=0;i<a.length;i++){
        let b =  a[i][0].toUpperCase()  ;
        console.log(b);
        let c= a[i].slice(1)
    }

}
console.log( one('tierry henry is a soccer player') );