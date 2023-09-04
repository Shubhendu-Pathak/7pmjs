//find

// let a  =[false,56,'rat',23,'D','34',77,'H',true,'G']
// console.log(a);

// let f = a.find((ele,index)=>{
    // return ele > 50
    // return ele==='rat'
// })
// console.log(f);


// let b = [56,78,34,23]

// let f = b.find(a=>a>50)
// // console.log(f);

// let fl = b.filter( (a,b,c) => a > 50)
// // console.log(fl);

// let m = b.map( a =>  a>50)
// // console.log(m);

// let a  =[false,56,'rat',23,'D','34',77,'H',true,'G']
// // console.log(a);

// let ma = a.map(ele=>{
//     return ele + 1001
// })
// // console.log(ma);

//chaining method

// let a = [ [1,2,[3,4,[5,6,[7,8,[9,99]]]]] ]
// // console.log(a);

// let b = a.flat(Infinity).filter(ele=>ele>5).map(ele=>ele*100).reduce((a,b,c,d)=>a + b)
// console.log(b);

// let c= [1,2,3,4,5]
// console.log(c);

// let d = c.reduce((acculumutor,ele,index,arr)=>{
// return acculumutor + ele
// })
// console.log(d);

// acc  ele
// 1         2 / =  3
// 3         3  =  6
// 6          4 = 10
// 10          5 = 15
// 15

//sort

// let a = [23,45,67,43,21,32]

// let a = [203,15565,167,743,21,32]
// console.log(a);
// console.log(a.sort());


// a-b = -ve = a->b 
// a-b  +ve = b->a
// a-b = 0 = no change

// c    d 
// 203   15565 = -ve = 203,15565
// 203     167  = +ve  = 167,203


// let a = [203,15565,167,743,21,32]
// console.log(a);

// let b = a.sort((c,d)=>{
// return c-d
// })
// console.log(b);

// let d = a.sort((c,d)=>{
//     return d-c
//     })
//     console.log(d);


//objects
 //        key:value      1pair of key :value = 1 property
// const a = { 
//     name:'Ravi',
//     profession:'Trainer',
//     age:56 
// }

// a.name='Jimmy'
// a.hobbies='swimming'

// console.log(a);

// console.log( Object.keys(a) );
// console.log(Object.values(a));
// console.log(Object.entries(a));// [ [1p],[1p],[1p]  ]

let restaurant = {
name:'La Rosa Pizzeria',
locatedAt:'23 Ralphson Street',
starters:['Lemonade','sandwich','coffee'],
mainCourse:['Pizza','Gnocci','CheeseBread'],
timings:{
    mon:{
        open:11,close:20
    },
    tue:{
        open:12,close:21
    },
    wed:{
        open:13,close:22
    }
}
}
// console.log(restaurant);

// Dot Method
// console.log( restaurant.name );
// console.log( restaurant.mainCourse );
// console.log( restaurant.timings.tue.open );
// console.log('-----------------------------');
// // Bracket Method
// console.log( restaurant["name"] );
// console.log(restaurant["starters"]);

//dstructuring

// let {name,starters,locatedAt} = restaurant
// console.log(name,locatedAt,starters);

// let {name:one,starters:two,locatedAt:three} = restaurant
// console.log(one,two,three);

// let {timings:{mon:{open}}} = restaurant
// console.log(timings);
// console.log(mon);
// console.log(open);

//methods = func inside object
// var age =99
// let a = {
    // name:'Anand',
    // age:23,
// /    calcSalary:function(){
    // return this.age*1000
// }
// calcSalary(){
    // return this.age*1000
// }

// never use this keyword with arrow function
// calcSalary:()=>{
    // return this.age*1000
// }

// }
// console.log(a);
// console.log( a.calcSalary() );

//exercise


// console.log( 67/176**2*1000  < 77/186**2*1000 );

// let a = {
//     name:'Karan',height:176,weight:67,
//     calcBMi(){
//         return `BMI of ${this.name} is ${this.weight/(this.height**2)}`
//     }
// }

// let b = {
//     name:'Ajay',height:186,weight:77,
//     calcBMi(){
//         return `BMI of ${this.name} is ${this.weight/(this.height**2)}`
//     }
// }

// console.log(a);
// console.log(b);
// console.log(a.calcBMi());
// console.log(b.calcBMi());

// if(  (a.calcBMi()*1000) > b.calcBMi()*1000 ){
//     console.log('Karan is greater');
// }else{
//     console.log('Ajay is Greater');
// }


//calll bind apply


let a = {
    name:'Karan',
}

let b = {
    name:'Ajay',
    
}

let calcBMi = function(y,z){
    // console.log(this);
    return `My name is  ${this.name} and my hobbies are ${y} and ${z}`
}


let c = calcBMi.call(a,'Swimming','Boxing')
console.log(c);

let d = calcBMi.call(b,'Singing','Playing Soccer')
console.log(d);

let e = calcBMi.apply(a,['Swimming','Boxing'])
console.log(e);

let f = calcBMi.apply(b,['Singing','Playing Soccer'])
console.log(f);

// console.log(this);