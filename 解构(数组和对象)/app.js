/**
 * 解构
 * 更快更便捷
 */


 //对象解构

 var expense = {
     type:'es6',
     amount:"45"
 };

//  var type = expense.type;
//  var amount = expense.amount;
//  console.log(type,amount);             //es6  45

//解构形式 {}和[]    {此处内容要和对象的变量名一致}
// const { type,amount } = expense;
// console.log(type,amount);                 //es6  45



var saveFiled = {
    extension:'jpg',
    name:'girl',
    size:14040
};

//es5
// function fileSammary(file){
//     return `${file.name}.${file.extension}的总大小是${file.size}`;   
// }
// console.log(fileSammary(saveFiled));              //girl.jpg的总大小是14040

//es6
// function fileSammary({name,extension,size}){
//     return `${name}.${extension}的总大小是${size}`;
// }
// console.log(fileSammary(saveFiled));              //girl.jpg的总大小是14040


//----------------------------------------------------------------------------

//数组解构

const names = ["tt","wf","ll"];

//解构
// const [name1,name2,name3] = names;
// console.log(name1,name2,name3);              //tt wf ll

//返回数组个数
// const {length} = names;
// console.log(length);                       //3

//结合展开运算符
// const [name,...rest] = names;
// console.log(name,rest);              //tt  ['wf','ll']

// let a,b;
// [a,b] = [100,200];
// console.log(a,b);                //100,200

//对象数组
const people = [
    {name:'tt',age:20},
    {name:'wf',age:21},
    {name:'ll',age:23}
];

//es5
// var age = people[0].age;
// console.log(age);                    //20

//es6 解构
// const [age] = people;
// console.log(age);            //{name:"tt",age:20}

// const [{age}] = people;
// console.log(age);               //20



//----------------------------------------------------------------

//使用场景：将数组转化为对象
const points = [
    [4,5],
    [10,1],
    [0,40]
];

//期望数据格式
// [
//     {x:4,y:5},
//     {x:10,y:1},
//     {x:0,y:40},
// ]

//es6
// let newPoints = points.map(pair => {
//     const x = pair[0];
//     const y = pair[1];
//     return {x,y};
// })
// console.log(newPoints);


// let newPoints = points.map(pair => {
//     const [x,y] = pair;
//     return {x,y};
// })
// console.log(newPoints);


// let newPoints = points.map(([x,y]) => {
//     return {x,y};
// })
// console.log(newPoints);


