# js知识点

## call()和apply()
每个函数都包含两个非继承而来的方法：call()和apply()。
由于JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变，call()和apply()可以改变函数体内部this的指向。

> 1 改变函数作用域

```js
let name = '丹丹'
let obj = {
  name: '小红'
}
function sayName () {
  return this.name
}
console.log(sayName()) // 丹丹
console.log(sayName.call(obj)) // 小红
console.log(sayName.apply(obj)) // 小红
```
> 2 实现继承
```js
function Animal(name){
  this.name = name;
  this.showName = function(){
      return this.name    
    }    
}
function Cat(name){
  // Animal(name)
  Animal.apply(this,[name]);    
}
let cat = new Cat('咕咕')
console.log(cat.showName()) // 咕咕
// 如果不用apply改变this指向，调用cat.showName()是找不到showName()这个方法
```
> 3 apply其他用处
```js
Math.max(1,2,3,5) // 5
// 如果想Math.max()里面接收的数组
Math.max.apply(this, [1,2,3,4,5]) // 5
// 可以不传this，用null也可以，就是没有对象去调用它。第一个参数为this，就是全局对象去调用Math.max

let arr1 = [1, 2, 3], arr2 = [4, 5, 6]
// arr1.push(4,5,6)
// console.log(arr1) // [1, 2, 3, 4, 5, 6]
Array.prototype.push(arr1,arr2) // [1, 2, 3, 4, 5, 6]
arr1.connect(arr2)
let arrs = arr1.concat(arr2) // 不改变原数组，返回连接的新数组
```
>  4 apply()与call的区别
```js
// call()和apply()的接收参数形式不一样
function.call(thisArg, arg1, arg2, ...)
function.apply(thisArg, [argsArray])
```
## this指向

> 1 在全局作用域中定义的变量和函数都会作为window的属性和方法保存, 谁调用这个函数，this就指向谁
```js
function an() {
  console.log(this)
}
an() // windown
let obj = {
  name: 'dandan',
  do: an
}
obj.do() // obj
```
> 2 构造函数的this指向  使用new关键字实例化对象时，this指向新创建的对象
```js
class Person {
  constructor(name) {
    this.name = name
  }
}
let abb = new Person('dandan')
console.log(abb.name) // 'dandan' this指向abb
```
> 3 使用call()和apply()方法调用时，this指向call()和apply()第一个参数
```js
function parent() {
  console.log(this)
}
const infos = {
  name: 'hahah'
}
console.log(parent) // windown
parent.call(infos) // infos
```
> 4 箭头函数的this 没有自己的this，内部this的值，依赖于外部非箭头函数的this,上一级还是箭头函数，会再往上找，直到this的指向
```js
let jian = () => {
  console.log(this)
}
function dan () {
  () => {
    console.log(this)
  }
}
jian() // windown
```