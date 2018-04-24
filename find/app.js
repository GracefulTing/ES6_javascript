/**
 * 场景一：假定有一个对象数组A,找到符合条件的对象
 */

 //es5
var users = [
     {name:'Jill'},
     {name:'Alex',id:2},
     {name:'Bill'},
     {name:'Alex'},     
];
var user;
for(var i=0;i<users.length;i++){
    if(users[i].name == 'Alex'){
        user = users[i];
        break;
    }
}
//console.log(user);              //{name:'Alex'} 找到后依然执行，造成消耗

//es6 find
user = users.find(function(user){
    return user.name === 'Alex';
})
//console.log(user);             //{name:'Alex'}  好处：找到后不再执行  找到ID为2的


 /**
  * 场景二：假定有一个对象数组A,根据指定对象的条件找到数组中符合条件的对象
  */

var posts = [
    {id:1,title:'Node.js'},
    {id:2,title:'React.js'}
];

var comment = {postId:1,content:'Hello world!'};

function postForComments(posts,comment){
    return posts.find(function(post){
        return post.id === comment.postId;
    })
}
//console.log(postForComments(posts,comment));        //Node.js