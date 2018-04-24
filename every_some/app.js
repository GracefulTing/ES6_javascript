/**
 * 场景一：计算对象数组中每个电脑的操作系统是否可用，大于16位操作系统表示可用，否则不可用
 */

 var computers = [
     {name:'Apple',ram:16},
     {name:'IBM',ram:4},
     {name:'Acer',ram:32}
 ];

 var everyComputersCanRunProgram = true;
 var someComputersCanRunProgram = false;

 for(var i=0;i<computers.length;i++){
     var computer = computers[i];
     if(computer.ram < 16){
         everyComputersCanRunProgram = false;
     }else{
         someComputersCanRunProgram = true;
     }
 }

 //console.log(everyComputersCanRunProgram,someComputersCanRunProgram);       //false  true

 /**
  * Every:一假即假
  * Some:一真即真
  */

  var every = computers.every(function(computer){
      return computer.ram > 16;
  })
  //console.log(every);             //false

  var some = computers.some(function(computer){
      return computer.ram > 16;
  })
  //console.log(some);                 //true

 /**
  * 场景二：假定有一个注册页面，判断所有input内容的长度是否大于0
  */

  function Field(value){
      this.value = value;
  }

  Field.prototype.validate = function(){
      return this.value.length > 0;
  }

  var username = new Field("tt");
  var password = new Field("123456789");

 // console.log(username.validate());         //true
 // console.log(password.validate());         //true

var fields = [username,password];

var formValid = fields.every(function(field){
    return field.validate();
})

//console.log(formValid);                      //true

if(formValid){
    //注册成功！

}else{
    //给用户提醒
    
}