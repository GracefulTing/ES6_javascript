/**
 * spread operator 展开运算符
 * 更快，更便捷的操作数组
 */

//  function addNumbers(numbers){
//      return numbers.reduce((sum,num) => {
//          return sum + num;
//      },0)
//  }
//  const numbers = [1,2,3,4,5];
//  console.log(addNumbers(numbers));             //15


//  function addNumbers(a,b,c,d,e){
//      var numbers = [a,b,c,d,e];
//      return numbers.reduce((sum,num) => {
//          return sum + num;
//      },0)
//  }

//  console.log(addNumbers(1,2,3,4,5));             //15



//优化
// function addNumbers(...numbers){
//     return numbers.reduce((sum,num) => {
//         return sum + num;
//     },0)
// }

// console.log(addNumbers(1,2,3,4,5,6,7,8));             //36


var defaultColors = ["red","green"];
var favoriteColors = ["orange","yellow"];

//concat
// defaultColors = defaultColors.concat(favoriteColors);
// console.log(defaultColors);                //['red','green','orange','yellow']


//console.log([...defaultColors,...favoriteColors]);     //['red','green','orange','yellow']

// var fallColors = ['fire red','fall orange'];
// console.log([...fallColors,...defaultColors,...favoriteColors]);   //['fire red','fall orange','red','green','orange','yellow']




//练习
function validateShoppingList(...items){
    if(items.indexOf('milk') < 0){
        return ['milk',...items];
    }
    return items;
}

console.log(validateShoppingList('orange','bread','eggs'));     //['milk','orange','bread','eggs']