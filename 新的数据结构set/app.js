/**
 * 集合：可以存储任何数据类型，并且是唯一的（不重复的值）
 */

 const set1 = new Set();

 //往set1中添加数据
 set1.add(100);
 set1.add("String");
 set1.add({name:"tt"});
 set1.add(true);
 set1.add(100);           //不可以重复添加，无作用

 console.log(set1);                //Set(4){100,'String',{...},true}


 const set2 = new Set([1,true,'string']);
 console.log(set2);                  //Set(3){1,true,'string'}

 //计算set1中的数据个数
 console.log(set1.size);            //4

 //检查set中是否拥有对应的值
 console.log(set1.has(100));          //true

 console.log(set1.has({name:'tt'}))              //false  匹配的是地址
 console.log({name:'tt'} === {name:'tt'})         //false


 //删除set中内容
 set1.delete(100);
 console.log(set1);

 //for...of遍历set
 for(let item of set1){
     console.log(item)
 }

 //forEach遍历
 set1.forEach(value => {
     console.log(value)
 })


 //将set转化为数组
const setArray = Array.from(set1);
console.log(setArray);