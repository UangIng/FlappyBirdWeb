(function () {
    'use strict';

    //函数声明
    // function Animal() {
    //
    // }

    var Animal = function (name, age) {
        this.name = name;
        this.age = age;
        this.say = function () {
            console.log(this.name + "-" + this.age)
        }
    }
//
//     Animal.prototype.say = function () {
//         console.log(this.name + "-" + this.age)
//     }
//
//     var cat = new Animal("小狗", 5);
//     cat.say();
//

// //    call() apply()
// //    调用一个对象的一个方法，用另一个对象替换
//
//     Animal.prototype.say.call(cat);
//     Animal.prototype.say.apply(cat);
//
//     var params = {
//         name:"小猫",
//         age:4
//     }
//     cat.say.call(params)

    // //    寄生组合继承
    var Cat = function (name, age) {
        // Animal.apply(this, arguments);
        Animal.call(this,name,age);
    }

    Cat.prototype = Object.create(Animal.prototype);
    //区分
    // Cat.prototype = new Animal();
    Cat.prototype.say = function () {
        var p = {
            name: "父类的名字",
            age: 10
        }
        Animal.prototype.say.apply(p);
        console.log("这是子类的名字" + this.name + this.age);
    }
    var cat = new Cat("子猫",5);
    cat.say();


})();