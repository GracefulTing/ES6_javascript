/**
 * new http:fetch
 * 一个基于promise的请求方法，更简单快捷
 */

//  let promise = new Promise((resolve,reject) => {
//      setTimeout(() => {
//          resolve();
//      },3000)
//  })

//  promise
//     .then(() => console.log("成功！没有任何问题！"))
//     .then(() => console.log("成功！可以无限调用then方法"))
//     .catch(() => console.log("uh oh,出现了重大问题！"))


// console.log(fetch)

let url = "http://jsonplaceholder.typicode.com/posts";

fetch(url)
    .then(response => response.json())                  //json解析
    .then(data => console.log(data))
    .catch(err => console.log("error:"+err))            //在posts前面错误才会打印