/**
 * 箭头函数解决问题：
 * 1.缩减代码
 * 2.改变this指向
 */

//  const double = function(num){
//     return num * 2;
//  }
//console.log(double(3));                   //6

//  const double = (num) => {
//     return num * 2;
//  }
// console.log(double(10));                   //20
 
// const double = (num) => num * 2;
// console.log(double(5));                       //10

// const double = num => num * 2;
// console.log(double(4));                         //8

// const double = (num => num * 2);
// console.log(double(22));                //44

// const double = (num1,num2) => num1 + num2;
// console.log(double(5,4));                  //9

// const double = (num1,num2) => {
//     sum = num1 + num2;
//     return sum;
// }
// console.log(double(1,6));                      //7

//map一个数组,让数组中的值以double显示
// const numbers = [1,3,5];
// var newNumber = numbers.map(num=>num * 2);
// console.log(newNumber);                     //2,6,10








/**
 * 改变this指向
 */

//  const team = {
//      members:['tt','wf'],
//      teamName:"es6",
//      teamSummary:function(){
//          return this.members.map(function(member){
//              //this不知道该指向谁
//              return `${member}隶属于${this.teamName}小组`;
//          })
//      }
//  }
//  console.log(team.teamSummary());    //tt/wf隶属于undefined小组 



//  const team = {
//     members:['tt','wf'],
//     teamName:"es6",
//     teamSummary:function(){
//         let self = this;             //外部存储
//         return this.members.map(function(member){
//             return `${member}隶属于${self.teamName}小组`;
//         })
//     }
// }
// console.log(team.teamSummary());    //tt/wf隶属于es6小组 



// const team = {
//     members:['tt','wf'],
//     teamName:"es6",
//     teamSummary:function(){
//         return this.members.map(function(member){
//             return `${member}隶属于${this.teamName}小组`;
//         }.bind(this))                      //this绑定
//     }
// }
// console.log(team.teamSummary());    //tt/wf隶属于es6小组 


// const team = {
//     members:['tt','wf'],
//     teamName:"es6",
//     teamSummary:function(){
//         return this.members.map((member) => {
//             //this指向的就是team对象
//             return `${member}隶属于${this.teamName}小组`;
//         })                  
//     }
// }
// console.log(team.teamSummary());    //tt/wf隶属于es6小组 