/**
 *1.this是什么
   任何函数本质上都是通过某个对象来调用的，如果没有直接指定就是global
   所有函数内部都有一个变量this
   它的值是调用函数的当前对象
  2.如何确定this的值
   test() global
   p.test()  p
   new test() 新创建的对象
   p.call(obj) obj
 */

function Person(color) {
  console.log(this);
  this.color = color;
  this.getColor = function () {
    console.log(this);
    return this.color;
  };

  this.setColor = function (color) {
    console.log(this);
    this.color = color;
  };
}

Person("red"); // this是谁? global

var p = new Person("yellow"); // this是谁? p

p.getColor(); // this是谁? p

var obj = {};

p.setColor.call(obj, "black"); // this是谁? obj

var test = p.setColor;
test(); // this是谁? global

function fun1() {
  function fun2() {
    console.log(this);
  }

  fun2(); // this是谁? global
}

fun1();
