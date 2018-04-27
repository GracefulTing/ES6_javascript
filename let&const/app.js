// var a = "Test1";

// let b = "Test2";

function testVar(){
    var a = 30;
    if(true){
        var a = 50;
        console.log(a);         //50
    }
    console.log(a);             //50
}

// testVar();

function testLet(){
    let a = 30;
    if(true){
        let a = 50;
        console.log(a);           //50
    }
    console.log(a);               //30
}

//testLet();

{
    let b = 100;
}
// console.log(b);                     //b is not defined.

// for(var i=0;i<10;i++){
//     console.log(i);                    //0,1,2...9
// }
// console.log(i);                        //10

// for(let i=0;i<10;i++){
//     console.log(i);                    //0,1,2...9
// }
// console.log(i);                       //i is not defined.


//const 常量
// const x = 10;
// x = 100;                  //报错

const colors = [];
colors.push("red");
console.log(colors);