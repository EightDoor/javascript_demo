/**
 * 关于引用变量赋值问题
 * 两个引用变量，指向同一个对象,通过一个变量修改内部的数据，另一个变量看到的是修改之后的数据
 * 两个引用变量，指向同一个对象，让其中一个引用变量指向另一个对象，另一个引用变量依然指向前一个对象
 */

var obj1 = { name: "Tom" };
var obj2 = obj1;

obj1.name = "Jack";
console.log(obj2.name);

function fn(obj) {
  obj.name = "A";
}

fn(obj1);
console.log(obj1.name);

var a = { age: 12 };
var b = a;
a = { name: "Bob", age: 13 };

console.log(b.age, a.age, a.name);

function fn2(obj) {
  obj = { age: 15 };
}

fn2(a);
console.log(a.age);
