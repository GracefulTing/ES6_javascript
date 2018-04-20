var colors = ["red","blue","green"];

//ES5遍历数组的方法
// for(var i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }

//ES6 forEach  括号里面是迭代器函数,需要形参接收colors
colors.forEach(function(color){
    // console.log(color);
})

//练习：遍历数组中的值，并计算总和
var numbers = [1,2,3,4,5];
var sum = 0;
numbers.forEach(function(num){
    sum += num;
})
console.log(sum);       //15

//代码抽离
// function adder(num){
//     sum += num;
// }
// numbers.forEach(adder);
// console.log(sum);        //15