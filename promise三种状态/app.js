/**
 * 构造函数:promise
 * 一个非常牛逼闪电的东西！
 */

 let promise = new Promise((resolve,reject) => {
    // resolve();           //执行then
    reject()                 //执行catch
 });
//  console.log(promise);            

promise
    .then(() => console.log("成功！没有任何问题！"))
    .then(() => console.log("成功！可以无限调用then方法"))
    .catch(() => console.log("uh oh,出现了重大问题！"))
