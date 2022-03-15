/**
 * 1.什么是函数？
 * 具有实现特定功能的n条语句的封装体
 * 只有函数是可以执行的，其他类型的数据不能执行
 * 2.为什么要用函数？
 * 提高代码复用
 * 便于阅读交流
 * 3.如何定义函数？
 * 函数声明
 * 表达式
 * 4.如何调用（执行）函数？
 * test() 直接调用
 * obj.test() 通过对象调用
 * new test() new 调用
 * test.call()/.apllay(obj) 临时让test方法成为obj的方法进行调用
 */

function showInfo(age) {
  if (age < 18) {
    console.log("未成年，再等等吧");
  } else if (age > 60) {
    console.log("算了吧");
  } else {
    console.log("刚好");
  }
}

showInfo(17);
showInfo(20);
showInfo(65);

// 函数声明
function fn() {
  console.log("fn1");
}

// 表达式方式
var fn2 = function () {
  console.log("fn2");
};

fn();
fn2();

var obj = {};

function test2() {
  this.xxx = "123";
}

test2.call(obj); // obj.test2()  //可以让一个函数成为指定任意对象的方法进行调用
console.log(obj);
