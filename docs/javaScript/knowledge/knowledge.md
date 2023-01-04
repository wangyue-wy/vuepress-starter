# js知识点

## 数据类型
js数据类型分为基本类型和引用类型。


基本类型有number,string, boolean undefined null bigint Symbol。


引用类型有object,object包含Date、function、Array等。


bigint 可以表示任意大的整数


Symbol 表示独一无二的值，最大的用法是用来定义对象的唯一属性名


基本数据类型由于占据的空间大小固定且较小，会被存储在栈当中，也就是变量访问的位置


引用数据类型存储在堆当中，变量访问的其实是一个指针，它指向存储对象的内存地址
### Number类型
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

// parseFloat 函数解析字符串并返回浮点数
// 此函数确定指定字符串中的第一个字符是否为数字。如果是，它会解析字符串直到到达数字的末尾，并将数字作为数字而不是字符串返回。
// 如果第一个字符不能转换为数字，parseFloat() 返回 NaN
// 如果字符串小数点后面都是0，则返回整数
// 允许前导和尾随空格。
console.log(parseFloat('1.00')) // 1
console.log(parseFloat('1.01')) // 1.01
console.log(parseFloat('1a')) // 1
console.log(parseFloat('a1')) // NaN
console.log(parseFloat('11 22')) // 11
console.log(parseFloat(' 11 ')) // 11

// parseInt() 将给定的值解析成整数
// 允许前导和尾随空格。
// 如果第一个字符不能转换为数字，parseInt() 返回 NaN
console.log(parseInt('1.00')) // 1
console.log(parseInt('1.01')) // 1
console.log(parseInt('1a')) // 1
console.log(parseInt('a1')) // NaN
console.log(parseInt('11 22')) // 11
console.log(parseInt(' 11 ')) // 11

// Number.MAX_VALUE 表示在 JavaScript 里所能表示的最大数值

// Number.MIN_VALUE 表示在 JavaScript 中所能表示的最小的正值

// Number.isFinite(n) 用来检测传入的参数是否是一个有穷数（finite number)

// Number.isInteger(n) 用来判断给定的参数是否为整数

// n.toFixed(key) // 保留确定的小数点数，会四舍五入

// n.toString() // 数字转为字符串
```
### String类型
```js
// charAt() 方法可返回字符串中指定位置的字符。
let str = "Hello"
let s = str.charAt(1)
console.log(s) // e

// concat() 方法用于连接两个或多个字符串。
// 该方法没有改变原有字符串，但是会返回连接两个或多个字符串新字符串
let str = "Hello";
let str2 = "World";
let s = str.concat(str2);
console.log(s); // HelloWorld

// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
// 如果没有找到匹配的字符串则返回 -1。
let str = "Hello";
let s = str.indexOf("e");
console.log(s); // 1

// includes() 方法用于判断字符串是否包含指定的子字符串。
let str = "Hello";
let s = str.includes("e");
console.log(s); // true

// match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
let str = "Hello";
let s = str.match(/l/g);
console.log(s); // [ 'l', 'l' ]

// repeat() 方法字符串复制指定次数。
let str = "Hello";
let s = str.repeat(2);
console.log(s); // HelloHello

// replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
let str = "Hello";
let s = str.replace("l", "o");
let se = str.replace(/l/g, "o")
console.log(s,se); // Heolo  Heooo

// replaceAll() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串，该函数会替换所有匹配到的子字符串。
let str = "Hello";
let s = str.replaceAll("l", "o");
console.log(s); //Heooo

// search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
// search() 对大小写敏感,想不区分大小写，追加i
let str = "Hello";
let s = str.search("he");
let se = str.search("He");
let see = str.search(/he/i);
console.log(s, se, see); // -1 , 0, 0

// slice(start, end) 指定的开始和结束位置，提取字符串的某个部分  开始位置是必填。 截取的字符不包括结束位置
// 结束位置如果不写，默认到结束,原字符串不变，返回一个新的被截取的字符串，可以是负数，表示从倒数位置起
// 如果开始与结束位置相同，则返回空串
let str = "Hello";
let s = str.slice(1, 2);
console.log(s); // e

// substring() 方法用于提取字符串中介于两个指定下标之间的字符。不包含结束位置
// 该方法返回一个新的字符串，其内容是从 start 处到 stop-1 处的所有字符，其长度为 stop 减 start
// 如果 start 与 end 相等，那么该方法返回的就是一个空串
// 如果 start 比 end 大，那么该方法在提取子串之前会先交换这两个参数
// 果 start 或 end 为负数，那么它将被替换为 0
let str = "Hello";
let s = str.substring(1, 3);
console.log(str); // Hello
console.log(s); // el

// substr(start,length) 方法用于返回一个从指定位置开始的指定长度的子字符串
// 如果start是负数，那么该参数声明从字符串的尾部开始算起的位置
// 如果 length 为 0 或负数，将返回一个空字符串。
// 如果没有指定 length，则表示截取到末尾
var subtrA = '012345'
console.log(subtrA.substr(3,1)) // 3

// split(separator,limit) 方法用于把一个字符串分割成字符串数组。
// eparator 可选。字符串或正则表达式，从该参数指定的地方分割
// limit 可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。
let str = "Hello";
let s = str.split("e");
console.log(str); // Hello
console.log(s); // [ 'H', 'llo' ]

// toLowerCase() 方法用于把字符串转换为小写。

// toUpperCase() 方法用于把字符串转换为大写。

// trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。
let str = "    Hello   ";
let s = str.trim();
console.log(str); //    Hello
console.log(s); // Hello
```
### Bigint
```js
// 可以表示任意大的整数
// 因为Number有最大值的限制，使用BigInt，整数溢出将不再是问题
// 要创建BigInt，只需在整数的末尾追加n即可。
console.log(9n) // 9n
// 可以调用 BigInt() 构造函数
console.log(BigInt('9') // 9n

// 无法转换的数据类型和值会引发异常
BigInt(10.2); // RangeError
BigInt(null); // TypeError
BigInt("abc"); // SyntaxError

// 不能使用严格相等运算符将BigInt与常规数字进行比较，因为它们的类型不同
console.log(1n === 1); // false

// 除了一元加号(+)运算符外，所有的算术运算符都可以用于BigInt
+10n // 错误用法
```
### Symbol
```js
// Symbol 本质上是一种唯一标识符，可用作对象的唯一属性名
// 声明方法
let id = Symbol('id')

// Symbol 数据类型的特点是唯一性，即使是用同一个变量生成的值也不相等
let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 == id2); // false

// Symbol 数据类型的另一特点是隐藏性，for···in，object.keys() 不能访问
// Object.getOwnPropertySymbols 方法会返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
// 如果希望使用同一个symbol值，官方提供了全局注册并登记的方法：Symbol.for()
let name1 = Symbol.for('name'); //检测到未创建后新建
let name2 = Symbol.for('name'); //检测到已创建后返回
console.log(name1 === name2); // true

// 通过这种方法就可以通过参数值获取到全局的symbol对象了，反之，能不能通过symbol对象获取到参数值呢？ 是可以的 ，通过Symbol.keyFor()
let name1 = Symbol.for('name');
let name2 = Symbol.for('name');
console.log(Symbol.keyFor(name1));  // 'name'
console.log(Symbol.keyFor(name2)); // 'name'
```
## 数据类型检测
> 1 typeof()
```js
// 只适用于基本数据类型，对于对象，数组，null返回的都是object
console.log(typeof(undefined)) //undefined
console.log(typeof(null)) // object
console.log(typeof function(){}); // function
```
> 2 instanceof
```js
// 检测当前实例是否隶属于某各类
var arr=new Array();
console.log(arr instanceof Array); // true
console.log(arr instanceof Object) // true; 这是因为 Array 是 object 的子类
```
> 3 constructor
```js
// 返回创建实例对象的 Object 构造函数的引用
// 除了undefined和null之外，其他类型都可以通过constructor属性来判断类型
var arr=new Array();
console.log(arr.constructor == Array) // true
```
> 4 Array.isArray()
```js
// 判断数组
console.log(Array.isArray([])); // true
```
> 5 Object.prototype.toString.call()
```js
// 在Object这个类的原型上也有一个方法toString,但是这个方法并不是把值转换成字符串，而是返回当前值得所属类详细信息，固定结构：’[object 所属的类]'
// call是改变this的指向为需要检测的数据
Object.prototype.toString.call(12) // [boject Number]
Object.prototype.toString.call(true) // [boject Boolean]
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
## 对象的set和get方法
```js
// get 关键字将对象属性与函数进行绑定，当属性被访问时，对应函数被执行
// set 关键字将对象属性与函数进行绑定，当改变属性值时，对应函数被执行。
// 如果只有get方法，没有set方法，那么这个属性是只读属性不能修改。如果只有set没有get 方法，那么就不能获取只能设置。
const source = {
  get bar () {
    return '浪里个浪'
  },
  set foo (value) {
    console.log(value)
  }
}
source.bar = 'wowo'
source.foo = 'yiyi'
console.log(source.bar) // 浪里个浪
console.log(source.foo) // undefinend
// 得出结论，bar不可修改，foo获取不到

const sources = {
  step: 1,
  get bar () {
    return this.step
  },
  set bar (value) {
    this.step = value
  }
}
sources.bar = 'yiyi'
console.log(sources.bar) // yiyi

const target = {}
Object.assign(target,source)
console.log(source) // 打印值为底下第一张图片
console.log(target) // 打印值为底下第二张图片
```
![img](/vuepress-starter/images/log-1.png)
![img](/vuepress-starter/images/log-2.png)
```js
// 根据打印对比出，Object.assign只能复制属性和属性值，set和get方法复制不了
// 这时Object.getOwnPropertyDescriptors()方法配合Object.defineProperties()方法，就可以实现正确拷贝
const target1 = {}
Object.defineProperties(target1,Object.getOwnPropertyDescriptors(source))
console.log(target1) // 与source打印的值一样
```
## es
### rest参数
```js
function rest(a, b, ...rests) {
  console.log(a,b,rests)
}
console.log(rest(1,2,3,4,5)) // 1,2,[3,4,5]
```
### 指数操作符 **幂
```js
console.log(2**3) // 8
```
### 对象遍历与object方法
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
### padStart和padEnd
```js
// 允许将空字符串或其他字符串添加到原始字符串的开头或结尾
// String.padStart(length,string)
// length代表需要填充的长度，如果这个数值小于当前字符串的长度，则返回当前字符串本身
// string 填充字符串
console.log('x'.padStart(5, 'ab')) // ababx
console.log('x'.padEnd(5, 'ab')) // xabab
```
### for await of
```js
// for await of可以用来遍历异步迭代器，且会等待前一个成员的状态改变后才会遍历到下一个成员，相当于async函数内部的await
function Gen (time) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(time)
    },time)
  })
}
async function teest () {
  let arr = [Gen(200), Gen(1000), Gen(3000)]
  for await (let item of arr) {
    console.log(Date.now(), item)
  }
}
teest()
// 1668498817940 200
// 1668498818694 1000
// 1668498820693 3000
```
### flat()与flatMap()
```js
// flat(depth) 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回,depth表示深度，默认为1
// flatMap()从方法的名字上也可以看出来它包含两部分功能一个是 map，一个是 flat（深度为1）。
const flatList = [1,2,[3,4,[5,6]],[7,8],9]
console.log(flatList.flat(2)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 想要数组的值翻倍并且去掉值为0的项
const flatList1 = [1,2,3,0]
console.log(flatList1.flatMap(item => item === 0 ? [] : [item*2])) // [2, 4, 6]
```