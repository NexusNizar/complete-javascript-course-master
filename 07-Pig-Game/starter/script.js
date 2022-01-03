'use strict';

var arr=[1,3,4,5];



console.log( 1,arr.map((num) => num*2));

console.log( 1,arr.filter((num) => num%2==0));

console.log(2,arr.reduce((sum,num,index,arr) =>{  console.log(index,arr) ; return sum * num * index}))
var fruits = { apples : 200 , mangoes : 300 ,
   getData : () => {const a= 23 ; return}
}

console.log(fruits.getData())

console.log(JSON.parse (JSON.stringify(fruits)));

var a = fruits;
a.apples = 500;
console.log(a,fruits);


