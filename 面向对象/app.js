//Class 万事皆对象

// function Car(options){
//     this.title = options.title;
// }

// const car = new Car({title:'BMW'});
// //console.log(car);                     //Car{title:'BMW'}

// Car.prototype.drive = function(){
//     return 'Vroom';
// }
//console.log(car.drive());         //Vroom



//继承
// function Toyota(options){
//     this.color = options.color;
// }

// const toyota = new Toyota({color:'red',title:'Focus'});
// console.log(toyota);                  //Toyota{color:'red'}


// function Toyota(options){
//     Car.call(this,options);          //this指Toyota对象,{}作为options传入,传入Car，this指Car对象,得到title
//     this.color = options.color;
// }

// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;

// const toyota = new Toyota({color:'red',title:'Focus'});
// console.log(toyota);                  //Toyota{title:'Focus',color:'red'}
//console.log(toyota.drive());            //Vroom   与31.32使用





//es6
class Car{
    constructor({title}){
        this.title = title;
    }
    drive(){
        return 'vroom';
    }
}

// const car = new Car({title:'BMW'});
// console.log(car);                 //Car{title:'BMW}
// console.log(car.drive())            //vroom


// class Toyota{
//     constructor(options){
//         this.color = options.color;
//     }
// }

// const toyota = new Toyota({color:'red',title:'Focus'});
// console.log(toyota);                  //Toyota{color:'red'}

class Toyota extends Car{
    constructor(options){
        super(options);
        this.color = options.color;
    }
}

const toyota = new Toyota({color:'red',title:'Focus'});
console.log(toyota);              //Toyota{title:'Focus',color:'red'}
console.log(toyota.drive());            //vroom