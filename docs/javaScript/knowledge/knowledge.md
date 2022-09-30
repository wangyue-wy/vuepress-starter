# js知识点

## 数据类型
js数据类型分为基本类型和引用类型。


基本类型有number,string, boolean undefined null bigint Symbol。


引用类型有object,object包含Data、function、Array等。


bigint 可以表示任意大的整数


Symbol 表示独一无二的值，最大的用法是用来定义对象的唯一属性名


基本数据类型由于占据的空间大小固定且较小，会被存储在栈当中，也就是变量访问的位置


引用数据类型存储在堆当中，变量访问的其实是一个指针，它指向存储对象的内存地址
> 1 Number类型
```js
// 包含：常规数字、NaN
// NaN:  非数字 不是一个数，但它率属于数字类型.NaN和任何值（包括自己）都不相等：NaN!=NaN,所以我们能用相等的方式判断是否为有效数字
// isNaN 检测一个值是否为非有效数字，如果不是有效数字返回true，反之是有效数字返回false
console.log(isNaN(1)) // false
console.log(isNaN('1')) // false
console.log(isNaN(NaN)) // true

// 把其他类型值转换为数字类型
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(Number('1')) // 1
console.log(Number('a')) // NaN
```
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
jian() // windown
let infos = {
  say: jian
}
console.log(infos.say()) // window 因为箭头函数的上一层是对象infos,所以继续向上找，上一层是window
let adder = {
  base: 1,
  add: function (a) {
    var f = v => v + this.base
    return f(a)
  },
  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = {
      base : 2
    };

    return f.call(b, a);
  }
}
console.log(adder.add(1)) // 2 this指向上一层add的this,由于add()是adder调用的，所有this是adder
console.log(adder.addThruCall(1)) // 2 由于箭头函数没有自己的this指针，通过 call() 或 apply() 方法调用一个函数时，只能传递参数,不能修改this指向

// 简单说下箭头函数
// 1.  箭头函数没有arguments对象。但可以在包装函数中把它提供给箭头函数
// 2.  箭头函数不能用作构造函数
// 3.  箭头函数没有prototype属性
```
> 5 bind()改变this指向
```js
var a = {
  c: 'hello',
  b: function() {
    var func = function() {
      console.log(this.c)
    }
    func()
  }
}
a.b() // undefined 因为this指向的事window,所以找不到c。因为func()属于自调用
var a = {
  c: 'hello',
  b: function() {
    var func = function() {
      console.log(this.c)
    }.bind(this)
    func()
  }
}
a.b() // hello
```
> 6 例题
```js
// 我们想每隔一秒输出this.age的值加1
 function Person() {
        // Person() 构造函数定义 `this`作为它自己的实例.
        this.age = 0;

        setInterval(function add() {
            // 在非严格模式, add()函数定义 `this`作为全局对象,
            // 与在 Person()构造函数中定义的 `this`并不相同.
            this.age++;
            console.log(this.age);
        }, 1000);
    }
    var p = new Person(); // 每隔一秒都会有一个NaN打印出来。因为定时器add()的this指向window，将换成箭头函数就可以实现了
```
## es
> 1 rest参数
```js
function rest(a, b, ...rests) {
  console.log(a,b,rests)
}
console.log(rest(1,2,3,4,5)) // 1,2,[3,4,5]
```
> 2 指数操作符 **幂
```js
console.log(2**3) // 8
```
> 3 对象遍历与object方法
```js
// 在原型上添加属性
const obj = Object.create({
  bar: '12',
  foo: '23'
})
obj.name = 'foo' // 正常添加属性
for(let key in obj) {
  // for in 遍历可以循环出原型上的属性
  console.log(key) // name,bar,foo
  // hasOwnProperty()方法可以过滤掉原型链上的属性
  if (obj.hasOwnProperty(key)) {
    console.log(key) // name
  }
}
// Object.entries bject.values,Object.keys都不能返回原型上的键和值
console.log(Object.values(obj)) // 返回属性值组成的数组 ["foo"]
console.log(Object.keys(obj)) // 返回key组成的数组 ['name']
console.log(Object.entries(obj)) //返回键值对的数组 [["name","foo"]]

// for in 循环和 Object.keys() 方法都不会返回对象的不可枚举属性, 可以使用Object.getOwnPropertyNames()返回对象自身(原型上的属性不返回)属性名组成的数组
// 创建一个原型属性为bar,属性为baz的对象
var objs = Object.create(
  {
    bar: '123',
  },
  {
    baz: {value: '345',enumerable: false} //enumerable, 控制属性是可枚举还是不可枚举, false不可枚举,true可枚举，不写默认false. writable（可写）和configurable（可配置）
  }
)
for (let key in objs) {
  console.log(objs[key]) //123
}
Object.getOwnPropertyNames(objs).forEach( key => {
  console.log(objs[key]) //345
})
let obj = {}
Object.create(null)
// let obj = {}会有原型，Object.create(null)没有原型

// for (let value of objs) {
// 	console.log(value)
// }  遍历不了对象，因为对象里面没有innerate

// Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符
//Object.fromEntries() 方法把键值对列表转换为一个对象。
//Object.defineProperty() 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。只能操作一个。 
//Object.defineProperties() 作用与上面一样，不过可以一次性操作多个
//Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。
```