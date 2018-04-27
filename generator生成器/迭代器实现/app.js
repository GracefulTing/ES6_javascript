//迭代器还原生成器的解构
// function nameIterator(names){
//     let nextIndex = 0;
//     return {
//         next:function(){
//             return nextIndex < names.length ? 
//             {value:names[nextIndex++],done:false} : 
//             {value:undefined,done:true}
//         }
//     }
// }
// const nameArray = ["tt",'wf','ll'];
// const names = nameIterator(nameArray);

// console.log(names.next());         //{value:'tt',done:false}
// console.log(names.next());         //{value:'wf',done:false}
// console.log(names.next());         //{value:'ll',done:false}
// console.log(names.next());         //{value:undefined,done:true}


// function* sayNames(){
//     yield 'tt';
//     yield 'wf';
//     yield 'll';
// }

// const name = sayNames();

// console.log(name.next());         //{value:'tt',done:false}
// console.log(name.next());         //{value:'wf',done:false}
// console.log(name.next());         //{value:'ll',done:false}
// console.log(name.next());         //{value:undefined,done:true}


//id自增  es6生成器
function* createIds(){
    let index = 1;
    while(true){
        yield index ++;
    }
}

const gen = createIds();

for(var i=0;i<10;i++){
    console.log(gen.next().value);              //1-10
}