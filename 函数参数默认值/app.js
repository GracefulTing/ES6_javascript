/**
 * 函数参数默认值
 * 解决问题：优化代码
 */

//  function makeAjaxRequest(url,method){
//     if(!method){
//         method = 'GET';
//     }
//     return method;
//  }
//console.log(makeAjaxRequest('google.com'));            //GET
//console.log(makeAjaxRequest('google.com',"POST"));         //POST






// function makeAjaxRequest(url,method = "GET"){
//     return method;
// }
// console.log(makeAjaxRequest('google.com'));            //GET
// console.log(makeAjaxRequest('google.com',"POST"));         //POST





function User(id){
    this.id = id;
}

//console.log(new User(1));                 //User{id:1}


function randomId(){
    return Math.random() * 9999999;
}

//console.log(new User(randomId()));            //User{id:..}


function createAdminUser(user){
    user.admin = true;
    return user;
}

//console.log(createAdminUser(new User(randomId())));            //User{id:..,admin:true}


//优化写法
function createAdminUser(user = new User(randomId())){
    user.admin = true;
    return user;
}

// const user = new User(1);    //传值   User{id:1,admin:true}

console.log(createAdminUser(user));          //User{id:..,admin:true}