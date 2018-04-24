/**
 * 场景一：假定有一个对象数组A,获取数组中指定类型的对象放到B数组中
 */

 var products = [
     {name:"cucumber",type:"vegetable"},
     {name:"banana",type:"fruit"},
     {name:"celery",type:"vegetable"},
     {name:"orange",type:"fruit"},
 ];

//es5
var filteredProducts = [];
for(var i=0;i<products.length;i++){
    if(products[i].type === 'fruit'){
        filteredProducts.push(products[i]);
    }
}
//console.log(filteredProducts);          //banana orange

//es6 filter
var filtered2 = products.filter(function(product){
    return product.type === 'fruit';
})
//console.log(filtered2);                 //banana orange


 /**
  * 场景二：假定有一个对象数组A,过滤掉不满足以下条件的对象
  * 条件：蔬菜 数量大于0，价格小于10
  */

 var products = [
    {name:"cucumber",type:"vegetable",quantity:2,price:1},
    {name:"banana",type:"fruit",quantity:10,price:16},
    {name:"celery",type:"vegetable",quantity:30,price:10},
    {name:"orange",type:"fruit",quantity:3,price:6},
];

products = products.filter(function(product){
    return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
})
//console.log(products);        //vegetable


  /**
   * 场景三：假定有两个数组A,B,根据A中的id值，过滤掉B数组不符合的数据
   */

   var post = {id:4,title:"JavaScript"};
 
   var comments = [
        {postId:4,content:"Angular4"},
        {postId:2,content:"React.js"},
        {postId:3,content:"Node.js"},
        {postId:4,content:"vue.js"}
   ];

   function commentsForPost(post,comments){
        return comments.filter(function(comment){
            return comment.postId === post.id;
        })
   }

 //  console.log(commentsForPost(post,comments));            //Angular4  vue.js