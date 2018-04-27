/**
 * generator生成器
 * 可以返回多次的函数
 */

//  function* numbers(){
//     yield;
//  }

//  const gen = numbers();
//  console.log(gen.next());                //false
//  console.log(gen.next());                //true



//  function* numbers(){

//  }

//  const gen = numbers();
//  console.log(gen.next());               //true
//  console.log(gen.next());               //true



//斐波那契数列
// function fib(max){
//     var a = 0,b = 1,arr = [0,1];
//     while(arr.length < max){
//         [a,b] = [b,a+b];
//         arr.push(b);
//     }
//     return arr;
// }
// console.log(fib(5));                 //0,1,1,2,3


function* fib(max){
    var a = 0,b = 1,n = 0;
    while(n < max){
        yield a;
        [a,b] = [b,a+b];
        n++;
    }
    return ;
}
// let f = fib(5);
// console.log(f.next());               //{value:0,done:false}
// console.log(f.next());               //{value:1,done:false}
// console.log(f.next());               //{value:1,done:false}
// console.log(f.next());               //{value:2,done:false}
// console.log(f.next());               //{value:3,done:false}
// console.log(f.next());                //{value:undefined,done:false}

for(var x of fib(10)){
    console.log(x);                     //0,1,1,2,3,5,8,13,21,34
}