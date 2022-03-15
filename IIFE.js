/**
 * 1.理解
 * 全称 Immediately-Invoked Function Expression (立即执行调用表达式)
 * 2.作用
 * 隐藏实现
 * 不会污染外部（全局）命名空间
 */

//匿名函数自调用
(function () {
  var a = 3;
  console.log(a + 3);
  console.log("....");
})();
var a = 4;
console.log(a);

(function () {
  var a = 1;
  function test() {
    console.log(++a);
  }
  window.$ = function () {
    // 向外暴露全局函数
    return {
      test,
    };
  };
})();

// 1.$是一个函数
// 2.$执行后返回的是一个对象
$().test();
