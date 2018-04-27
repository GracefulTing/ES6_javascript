/**
 * 增强对象字面量
 * 解决问题：缩减代码
 */

//  new Object(); {}

// new Array(); []

// {}和[]就是字面量

// function createBookShop(inventory){
//     return {
//         inventory:inventory,   
//         inventoryValue:function(){
//             return this.inventory.reduce((total,book) => total + book.price,0)     //初始值为0
//         },
//         priceForTitle:function(title){
//             return this.inventory.find(book => book.title === title).price;
//         }
//     }
// }

//增强字面量写法:key-value省略和方法
function createBookShop(inventory){
    return {
        inventory,   
        inventoryValue(){
            return this.inventory.reduce((total,book) => total + book.price,0)     //初始值为0
        },
        priceForTitle(title){
            return this.inventory.find(book => book.title === title).price;
        }
    }
}

const inventory = [
    {title:'Vue',price:100},
    {title:'React',price:50},
];

const bookShop = createBookShop(inventory);
//console.log(bookShop.inventoryValue());               //150
//console.log(bookShop.priceForTitle("Vue"));           //100




//例子
// function saveFile(url,data){
//     $.ajax({
//         method:"POST",        
//         url:url,
//         data:data,
//     })
// }

//增强对象字面量
function saveFile(url,data){
    $.ajax({
        url,
        data,
        method:"POST"                
    })
}

const url = 'http://fileupload.com';
const data = {color:'red'};

saveFile(url,data);