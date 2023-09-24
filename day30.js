// Es6 class

//class expression
// const PersonCl = class{} 

//class declaration

// class PersonCl{
// constructor(fullname,birthyear){
// this.fullname=fullname
// this.birthyear=birthyear
// }

// calcAge(){
//     console.log(`My age is ${2023-this.birthyear}`);
// }

// greet(){
//     console.log(`Hello ${this.firstname}`);
// }

// get age(){
//     return 2023-this.birthyear
// }

// set fullName(name){
//     console.log(name);
// if(name.includes(' ')) this._fullName = name
// else console.log(`${name} is not a fullname`);
// }

// get fullName(){
//     return this._fullName
// }

// static hey(){
//     return this.fullname + ' ' +'today is a great day'
// }

// }

// // PersonCl.prototype.greet=function(){
// //     console.log(`Hello ${this.firstname}`);
// // }

// const jass = new PersonCl('Jass Dosanjh',1995)
// console.log(jass);
// jass.calcAge()
// jass.greet()
// // console.log(jass.hey())

// console.log(PersonCl.prototype);

// console.log(jass.age);
// jass.fullName= 'Jim' 
// console.log( jass.fullName );


// console.log( jass.__proto__=== PersonCl.prototype );

// getter setter

// const account = {
//     owner:'Jill',
//     movements:[200,250,350,400],

//     get latest(){
//         return this.movements.slice(-1).pop()
//     },

//     set latest(mov){
// this.movements.push(mov)
//     }

// }

// console.log(account);
// console.log( account.latest );

// account.latest = 666
// console.log(account.movements);


//exercise

// class Car{
//     constructor(make,speed){
//         this.make=make
//         this.speed = speed
//     }
 
//     accelerate(){
//         this.speed += 10
//         console.log(`${this.make} is going at ${this .speed} km/hr`);
//     }
    
//     decelerate(){
//         this.speed -= 10
//         console.log(`${this.make} is going at ${this .speed} km/hr`);
//     }

// } 

// const audi = new Car('AUDI',40)
// console.log(audi);
// const bmw = new Car('BMW',100)
// console.log(bmw);

// audi.accelerate()
// audi.accelerate()
// audi.accelerate()
// audi.accelerate()
// audi.decelerate()
// audi.decelerate()
// audi.decelerate()

//Inheritance between class

// class PersonCl{
//     constructor(fullname,birthyear){
//     this.fullname=fullname
//     this.birthyear=birthyear
//     }
    
//     calcAge(){
//         console.log(`My age is ${2023-this.birthyear}`);
//     }
    
//     greet(){
//         console.log(`Hello ${this.fullname}`);
//     }
    
//     get age(){
//         return 2023-this.birthyear
//     }
    
//     set fullName(name){
//         console.log(name);
//     if(name.includes(' ')) this._fullName = name
//     else console.log(`${name} is not a fullname`);
//     }
    
//     get fullName(){
//         return this._fullName
//     }
    
//     static hey(){
//         return this.fullname + ' ' +'today is a great day'
//     }
    
//     }
    
// class StudentCl extends PersonCl{
//     constructor(fullname,birthyear,course){
//         // /always need sto happen first
//         super(fullname,birthyear)
//         this.course = course
//     }
// }
    
//     const jass = new PersonCl('Jass Dosanjh',1995)
//     console.log(jass);

//     const martha = new StudentCl('martha Jones',1999,'Sociology')
//     console.log(martha);
//     martha.calcAge()
//     martha.greet()