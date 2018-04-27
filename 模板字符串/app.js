let template = '<h1>Hello</h1><p>大家好！ES6为我们提供了很多好用的语法和方法！</p>';
document.getElementById('template').innerHTML = template;

let name = "tt";

function makeUppercase(word){
    return word.toUpperCase();
}

let ele = `
<h3>${makeUppercase('Hello')},${name}!</h3>
<p>这是ES6的新方法</p> 
`;
document.getElementById('con').innerHTML = ele;
