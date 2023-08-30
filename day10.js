// Regular expression

//basics

// test mthod
// let  a = 'The dog chased the cat' 
// let b = /dog/
// let c = b.test(a)
// console.log(c);

// let  a ='Hello World ' 
// let b = /Hello/
// let c = b.test(a)
// console.log(c);


// let  a = 'Somewhere Waldo is hiding  in the text' 
// let b = /Waldo/
// let c = b.test(a)
// console.log(c);

// let  a = 'James has a pet bird ' 
// let b = /dog|cat|bird/
// let c = b.test(a)
// console.log(c);

// let  a = 'FreeBeesForCoders' 
//  i = case sensitive
// let b = /freebeesforcoders/i
// let c = b.test(a)
// console.log(c);

// Match = extract string

//  let a = 'Extract the word Coding from this string'
// //  console.log(a[17]);
// let b = /coding/i
// let c = a.match(b)
// console.log(c);

// let a = 'Repeat, Repeat, Repeat'
// let b = /Repeat/g
// let c = a.match(b)
// console.log(c);

// let a = 'Twinkle, twinkle ,little star'
// let b = /twinkle/ig
// let c = a.match(b)
// console.log(c);

// let a = "I'll hum a song and want to hug my mum"
// let b = /hu./g
// let c = a.match(b)
// console.log(c);

// let a = 'Bear hug'
// let b = /hu./g
// let c = a.match(b)
// console.log(c);

// let a = "Let's have fun with regular expression under the sun"
// let b = /.un/g
// let c = a.match(b)
// console.log(c);

// let a = 'Beware of bug in the above code ; I have only proved it correct'
// // let b = /b[aiu]g/g 
// let b = /[aeiou]/ig
// let c = a.match(b)
// console.log(c);
// console.log(c.length);

// let a = "The quick brown fox jumps over the lazy dog."
// let b = /[a-e]/ig
// let c = a.match(b)
// console.log(c);

// let a = "Blueberry 3.141595685 are delicious"
// let b = /[2-6a-e]/ig
// let c = a.match(b)
// console.log(c);

// let a = "3 blind mice."
// let b = /[^aeiou]/ig
// let c = a.match(b)
// console.log(c);


// let a = "Mississippi"
// let b= /s+/ig
// let b = /[^s+]/ig
// let c = a.match(b)
// console.log(c);

// let a = "gooooooal"
// let b = /go*/ig
// let c = a.match(b)
// console.log(c);

// let a = "Aaaaaargh"
// let b = /Aa*/ig
// let c = a.match(b)
// console.log(c);

// let a = "gut feeling"
// let b = /go*/ig
// let c = a.match(b)
// console.log(c);

// let a = "over the moon"
// let b = /go*/ig
// let c = a.match(b)
// console.log(c);

//lazy match ( ? )= finds smallest part of string
// greedy matchh looks for longest part of string

// let a = "titanic"
// let b = /t[a-z]*i/ig // greedy match is by default
// let b = /t[a-z]*?i/ig // lazy

// let c = a.match(b)
// console.log(c);

// let a = "<h1>Winter is Coming</h1>"
// // let b = /<.*>/ig // greedy
// let b = /<.*?>/ig// lazy match
// let c = a.match(b)
// console.log(c);

// let a = 'P1P2P3P4P5P6CCCCP7P8P9'
// let b = /C+/ig
// let c = a.match(b)
// console.log(c);

//match  from the start
// let a = 'Cal and Ricky both like racing.'
// let b = /^Cal/ig
// let c = a.match(b)
// console.log(c);

//  matches from the end
// let a = 'The last car on a train is in caboose'
// let b = /caboose$/ig
// let c = a.match(b)
// console.log(c);

// \w = a-z  0-9  underscore
let a = 'The five boxing $%^ wizards jump 55454 quickly'
let b = /\w/ig
let c = a.match(b)
console.log(c);