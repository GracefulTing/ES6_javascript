/**
 * map
 * 键值对：与对象不同的是键和值可以是任何类型
 */

const map1 = new Map();

//设置key键
const key1 = 'something',
      key2 = {},
      key3 = function(){};


//为key设置value值
map1.set(key1,'Value of key1');
map1.set(key2,'Value of key2');
map1.set(key3,'Value of key3');

//根据key获取对应的value
console.log(map1.get(key1));                //Value of key1
console.log(map1.get(key2));                //Value of key2
console.log(map1.get(key3));                //Value of key3

//获取对应的value数量
console.log(map1.size);                   //3

//for...of遍历map1中的key value
for(let [key,value] of map1){
    console.log(`${key} = ${value}`);             
}

// something = Value of key1
// [object Object] = Value of key2
// function (){} = Value of key3


//only key
for(let key of map1.keys()){
    console.log(key);
}

//only value
for(let value of map1.values()){
    console.log(value);
}

//forEach遍历map1
map1.forEach((value,key) => {
    console.log(`${key} = ${value}`);
})

//将map1转化为正常的数组
const keyValueArray = Array.from(map1);
console.log(keyValueArray);


//将map1中key转为数组
const keyArr = Array.from(map1.keys());
console.log(keyArr);

//将map1中value转为数组
const valueArr = Array.from(map1.values());
console.log(valueArr);