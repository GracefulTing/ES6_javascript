/**
 * 场景一：计算数组中所有值的总和
 */

 var numbers = [1,3,4];

 var sum = 0;

//es5
 for(var i=0;i<numbers.length;i++){
     sum += numbers[i];
 }
 //console.log(sum);               //8

//es6 reduce
var sumValue = numbers.reduce(function(sum2,number){        //sum2和sum无关，sum2要初始化，此处为0
   // console.log(sum2);          //0 1 4
   return  sum2 + number;
},0);
//console.log(sumValue);             //8


 /**
  * 场景二：将数组中对象的某个属性抽离到另一个数组中
  */

var primaryColors = [
    {color:'red'},
    {color:'yellow'},
    {color:'blue'},
];

var colors = primaryColors.reduce(function(previous,primaryColor){
    previous.push(primaryColor.color); 
    return previous;
},[]);
//console.log(colors);               //red yellow blue



/**
 * 场景三：判断字符串中括号是否对称
 */

 function balanceParents(string){
     return !string.split("").reduce(function(previous,char){
        if(previous < 0){
            return previous;
        }
        if(char == '('){
            return ++previous;
        }
        if(char == ')'){
            return --previous;
        }
        return previous;
     },0)
 }
//console.log(balanceParents("(((()"));            //3  加！为true或者false