/*
场景一：假定有一个数值数组A，将A数组中的值以双倍的形式放在B数组中.
*/

var numbers = [1,2,3];

var doubleNumbers = [];

//ES5
// for(var i=0;i<numbers.length;i++){
//     doubleNumbers.push(numbers[i]*2);
// }
// console.log(doubleNumbers);
// for(var i=0;i<doubleNumbers.length;i++){
//     console.log(doubleNumbers[i]);
// }

//ES6 map:返回一个数组 map实现上面console之上的for循环
var doubled = numbers.map(function(num){
    return num*2;
})
console.log(doubled);
doubled.forEach(function(num){
    console.log(num);
})


/*
场景二：假定有一个对象数组A,将A数组中对象某个属性的值存储到B数组中.
*/

var cars = [
    {model:"Buick",price:'CHEAP'},
    {model:"BMW",price:'expensive'}
];

var prices = cars.map(function(car){
    return car.price;
})
console.log(prices);
