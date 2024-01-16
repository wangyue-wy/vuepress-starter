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
### Boolean
除了“数字0/NaN/空字符串/null/undefined"五个值是false，其余值都是true
```js
console.log(Boolean('0')) // true
console.log(Boolean(0)) // false
```
### Symbol
```js
// Symbol 本质上是一种唯一标识符，可用作对象的唯一属性名
// 声明方法
let id = Symbol('id') // 'id'只是为他添加了描述，这样打印的时候可以区分

// Symbol 数据类型的特点是唯一性，即使是用同一个变量生成的值也不相等
let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 == id2); // false
let id3 = Symbol()
let id4 = Symbol()
console.log(id3 == id4); // false

// Symbol 数据类型的另一特点是隐藏性，for···in，object.keys() 不能访问
// Object.getOwnPropertySymbols 方法会返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
// 另一个新的 API，Reflect.ownKeys()方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。
let obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};
console.log(Reflect.ownKeys(obj)) // ["enum", "nonEnum", Symbol(my_key)]
console.log(Object.getOwnPropertySymbols(obj)) // [Symbol(my_key)]
// 如果希望使用同一个symbol值，官方提供了全局注册并登记的方法：Symbol.for()
let name1 = Symbol.for('name'); //检测到未创建后新建
let name2 = Symbol.for('name'); //检测到已创建后返回
console.log(name1 === name2); // true

// 通过这种方法就可以通过参数值获取到全局的symbol对象了，反之，能不能通过symbol对象获取到参数值呢？ 是可以的 ，通过Symbol.keyFor(), 也可以用description
let name1 = Symbol.for('name');
let name2 = Symbol.for('name');
console.log(Symbol.keyFor(name1));  // 'name'
console.log(Symbol.keyFor(name2)); // 'name'
console.log(name1.description) // 'name

// Symbol作为属性名，注意，Symbol 值作为对象属性名时，不能用点运算符。
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"


// 消除魔术字符串
function getArea(shape, options) {
  let area = 0;

  switch (shape) {
    case 'Triangle': // 魔术字符串
      area = .5 * options.width * options.height;
      break;
    /* ... more code ... */
  }

  return area;
}

getArea('Triangle', { width: 100, height: 100 }); // 魔术字符串
// 上面代码中，字符串Triangle就是一个魔术字符串。它多次出现，与代码形成“强耦合”，不利于将来的修改和维护。

const shapeType = {
  triangle: triangle: Symbol()
};

function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
  }
  return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });
// 可以发现shapeType.triangle等于哪个值并不重要，只要确保不会跟其他shapeType属性的值冲突即可。因此，这里就很适合改用 Symbol 值。
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
### Set
```js
// 它类似于数组，但是成员的值都是唯一的，没有重复的值。 Set本身是一个构造函数，用来生成 Set 数据结构。
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
// 上面代码通过add()方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值。

// Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]
// 去除数组的重复成员
[...new Set(array)]
// 去除字符串里面的重复字符
[...new Set('ababbc')].join('')
// "abc"

// set的方法： add()  has() size delete()  // 注意set.size不是一个函数
// set遍历方法 keys()，values()，entries() forEach()

// 使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}

// 如果想在遍历操作中，同步改变原来的 Set 结构，目前没有直接的方法，但有两种变通方法。
// 一种是利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构；另一种是利用Array.from方法。
// 方法一
let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2));
// set的值是2, 4, 6

// 方法二
let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, val => val * 2));
```
### Map
```js
// JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
//  Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
// map可以在初始化时加值，也可以用set()添加值
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);
map.set('a', '123')
console.log(map) //  {'name' => '张三', 'title' => 'Author', 'a' => '123'}
map.get('name') // 张三 获取值
map.has('name') // true 判断是否有这个键值
map.size // 3 返回set长度
map.delete('a') // true 返回的是否删除成功
map.clear() // 删除所有，没有返回值

// Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题
const map = new Map();
const k1 = ['a'];
const k2 = ['a'];
map
.set(k1, 111)
.set(k2, 222);
map.get(k1) // 111
map.get(k2) // 222
// 变量k1和k2的值是一样的，但是它们在 Map 结构中被视为两个键。

// 如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，
// Map 将其视为一个键，比如0和-0就是一个键，布尔值true和字符串true则是两个不同的键。
// 另外，undefined和null也是两个不同的键。虽然NaN不严格相等于自身，但 Map 将其视为同一个键。
```
### Proxy
Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
```js
// ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。
// 其中，new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。
//  proxy = new Proxy(target, handler);
const proxyI = {}
const proxy = new Proxy(proxyI, {
	get: (target, propKey) => {
		return 35
	}
})
console.log(proxy.time) //35 
console.log(proxy.age) // 35
console.log(proxyI.age) // undefind 设置了拦截，操作的不是原对象
// 由于拦截函数总是返回35，所以访问任何属性都得到35

// 不做拦截时
const info = {}
const proxyA = new Proxy(info, {})
proxyA.a = 'b'
console.log(info.a) // 'b'
// 得出结论如果handler没有设置任何拦截，那就等同于直接通向原对象。

// 一个技巧是将 Proxy 对象，设置到object.proxy属性，从而可以在object对象上调用。
const obj = { proxy: new Proxy(target, handler) };

// Proxy 实例也可以作为其他对象的原型对象。
const proxyW = new Proxy({}, {
  get: function(target, propKey) {
    return 35;
  }
});

let obj = Object.create(proxyW);
obj.time // 35
// 上面代码中，proxy对象是obj对象的原型，obj对象本身并没有time属性，所以根据原型链，会在proxy对象上读取该属性，导致被拦截。


// Proxy拦截的方法

// 1. get()
// get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。
var person = {
  name: "张三"
};

var proxy = new Proxy(person, {
  get: function(target, propKey) {
    if (propKey in target) {
      return target[propKey];
    } else {
      throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
    }
  }
});

proxy.name // "张三"
proxy.age // 抛出一个错误
// 上面代码表示，如果访问目标对象不存在的属性，会抛出一个错误。如果没有这个拦截函数，访问不存在的属性，只会返回undefined。

// get方法可以继承。
let proto = new Proxy({}, {
  get(target, propertyKey, receiver) {
    console.log('GET ' + propertyKey);
    return target[propertyKey];
  }
});

let obj = Object.create(proto);
obj.foo // 会打印get()里面的"GET foo"，因为obj里面没有foo这个属性，所以返回的是undefined

// 下面的例子使用get拦截，实现数组读取负数的索引。
function createArray(...elements) {
  let handler = {
    get(target, propKey, receiver) {
      let index = Number(propKey);
      if (index < 0) {
        propKey = String(target.length + index);
      }
      return Reflect.get(target, propKey, receiver);
    }
  };

  let target = [];
  target.push(...elements);
  return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
arr[-1] // c

// 如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则通过 Proxy 对象访问该属性会报错。
const target = Object.defineProperties({}, {
  foo: {
    value: 123,
    writable: false,
    configurable: false
  },
});

const handler = {
  get(target, propKey) {
    return 'abc';
  }
};

const proxy = new Proxy(target, handler);

proxy.foo
// TypeError: Invariant check failed

// 2. set()
// set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。

// 假定Person对象有一个age属性，该属性应该是一个不大于 200 的整数，那么可以使用Proxy保证age的属性值符合要求。
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // 对于满足条件的 age 属性以及其他属性，直接保存
    obj[prop] = value;
    return true;
  }
};

let person = new Proxy({}, validator);

person.age = 100;

person.age // 100
person.age = 'young' // 报错
person.age = 300 // 报错
// 如果目标对象自身的某个属性不可写，那么set方法将不起作用

// 3. apply()
// apply方法拦截函数的调用、call和apply操作。
// apply方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（this）和目标对象的参数数组。
var twice = {
  apply (target, ctx, args) {
    return Reflect.apply(...arguments) * 2;
  }
};
function sum (left, right) {
  return left + right;
};
var proxy = new Proxy(sum, twice);
proxy(1, 2) // 6
proxy.call(null, 5, 6) // 22
proxy.apply(null, [7, 8]) // 30
// 上面代码中，每当执行proxy函数（直接调用或call和apply调用），就会被apply方法拦截。


// 4. has()
// has()方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符。
// has()方法可以接受两个参数，分别是目标对象、需查询的属性名。
var handler = {
  has (target, key) {
    if (key[0] === '_') {
      return false;
    }
    return key in target;
  }
};
var target = { _prop: 'foo', prop: 'foo' };
var proxy = new Proxy(target, handler);
'_prop' in proxy // false
// 如果原对象的属性名的第一个字符是下划线，proxy.has()就会返回false，从而不会被in运算符发现。

// 5.construct()
// construct()方法用于拦截new命令，
// construct()方法可以接受三个参数。target：目标对象。args：构造函数的参数数组。newTarget：创造实例对象时，new命令作用的构造函数（下面例子的p）。
// construct()方法返回的必须是一个对象，否则会报错。
// 由于construct()拦截的是构造函数，所以它的目标对象必须是函数
const p = new Proxy(function () {}, {
  construct: function(target, args) {
    console.log('called: ' + args.join(', '));
    return { value: args[0] * 10 };
  }
});

(new p(1)).value
// "called: 1"
// 10

// 6. deleteProperty()
// deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。
var handler = {
  deleteProperty (target, key) {
    invariant(key, 'delete');
    delete target[key];
    return true;
  }
};
function invariant (key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}

var target = { _prop: 'foo' };
var proxy = new Proxy(target, handler);
delete proxy._prop
// Error: Invalid attempt to delete private "_prop" property2

// 7. defineProperty()方法拦截了Object.defineProperty()操作。
// 8. getOwnPropertyDescriptor()方法拦截Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者undefined。
// 9. getPrototypeOf()方法主要用来拦截获取对象原型。具体来说，拦截下面这些操作。

Object.prototype.__proto__
Object.prototype.isPrototypeOf()
Object.getPrototypeOf()
Reflect.getPrototypeOf()
instanceof

// 10. isExtensible()方法拦截Object.isExtensible()操作。 是否可扩展

// 11. ownKeys
// ownKeys()方法用来拦截对象自身属性的读取操作。具体来说，拦截以下操作。

Object.getOwnPropertyNames()
Object.getOwnPropertySymbols()
Object.keys()
for...in循环
// 下面是拦截Object.keys()的例子
let target = {
  a: 1,
  b: 2,
  c: 3
};

let handler = {
  ownKeys(target) {
    return ['a'];
  }
};

let proxy = new Proxy(target, handler);

Object.keys(proxy)
// [ 'a' ]

// 12 preventExtensions()方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值。
// 13. setPrototypeOf()方法主要用来拦截Object.setPrototypeOf()方法。
// 14. Proxy.revocable()方法返回一个可取消的 Proxy 实例
let target = {};
let handler = {};

let {proxy, revoke} = Proxy.revocable(target, handler);

proxy.foo = 123;
proxy.foo // 123

revoke();
proxy.foo // TypeError: Revoked
// Proxy.revocable()的一个使用场景是，目标对象不允许直接访问，必须通过代理访问，一旦访问结束，就收回代理权，不允许再次访问。

// this问题
// 虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。
const target = {
  m: function () {
    console.log(this === proxy);
  }
};
const handler = {};

const proxy = new Proxy(target, handler);

target.m() // false
proxy.m()  // true
// 上面代码中，一旦proxy代理target，target.m()内部的this就是指向proxy，而不是target。所以，虽然proxy没有做任何拦截，target.m()和proxy.m()返回不一样的结果。

const target = new Date();
const handler = {};
const proxy = new Proxy(target, handler);

proxy.getDate();
// TypeError: this is not a Date object.
// 上面代码中，getDate()方法只能在Date对象实例上面拿到，如果this不是Date对象实例就会报错。这时，this绑定原始对象，就可以解决这个问题。
const target = new Date('2015-01-01');
const handler = {
  get(target, prop) {
    if (prop === 'getDate') {
      return target.getDate.bind(target);
    }
    return Reflect.get(target, prop);
  }
};
const proxy = new Proxy(target, handler);

proxy.getDate() // 1

// 另外，Proxy 拦截函数内部的this，指向的是handler对象。
const handler = {
  get: function (target, key, receiver) {
    console.log(this === handler);
    return 'Hello, ' + key;
  },
  set: function (target, key, value) {
    console.log(this === handler);
    target[key] = value;
    return true;
  }
};

const proxy = new Proxy({}, handler);

proxy.foo
// true
// Hello, foo

proxy.foo = 1
// true
```
### Reflect
Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API。Reflect对象的设计目的有这样几个。

（1） 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。也就是说，从Reflect对象上可以拿到语言内部的方法。

（2） 修改某些Object方法的返回结果，让其变得更合理。比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false。

（3） 让Object操作都变成函数行为。某些Object操作是命令式，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为

（4）Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。
```js
// Reflect.get方法查找并返回target对象的name属性，如果没有该属性，则返回undefined。
var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  },
}

Reflect.get(myObject, 'foo') // 1
Reflect.get(myObject, 'bar') // 2
Reflect.get(myObject, 'baz') // 3

// Reflect.set方法设置target对象的name属性等于value。
var myObject = {
  foo: 1,
  set bar(value) {
    return this.foo = value;
  },
}

myObject.foo // 1

Reflect.set(myObject, 'foo', 2);
myObject.foo // 2

Reflect.set(myObject, 'bar', 3)
myObject.foo // 3

// Reflect.has方法对应name in obj里面的in运算符。
var myObject = {
  foo: 1,
};

// 旧写法
'foo' in myObject // true

// 新写法
Reflect.has(myObject, 'foo') // true

// Reflect.deleteProperty方法等同于delete obj[name]，用于删除对象的属性。
const myObj = { foo: 'bar' };

// 旧写法
delete myObj.foo;

// 新写法
Reflect.deleteProperty(myObj, 'foo');

// Reflect.construct方法等同于new target(...args)，这提供了一种不使用new，来调用构造函数的方法。
function Greeting(name) {
  this.name = name;
}

// new 的写法
const instance = new Greeting('张三');

// Reflect.construct 的写法
const instance = Reflect.construct(Greeting, ['张三']);

// Reflect.getPrototypeOf方法用于读取对象的__proto__属性，对应Object.getPrototypeOf(obj)。
const myObj = new FancyThing();

// 旧写法
Object.getPrototypeOf(myObj) === FancyThing.prototype;

// 新写法
Reflect.getPrototypeOf(myObj) === FancyThing.prototype;

// Reflect.setPrototypeOf方法用于设置目标对象的原型（prototype），对应Object.setPrototypeOf(obj, newProto)方法。它返回一个布尔值，表示是否设置成功。

// Reflect.apply方法等同于Function.prototype.apply.call(func, thisArg, args)，用于绑定this对象后执行给定函数。
// 一般来说，如果要绑定一个函数的this对象，可以这样写fn.apply(obj, args)，但是如果函数定义了自己的apply方法，就只能写成Function.prototype.apply.call(fn, obj, args)，采用Reflect对象可以简化这种操作。
const ages = [11, 33, 12, 54, 18, 96];

// 旧写法
const youngest = Math.min.apply(Math, ages);
const oldest = Math.max.apply(Math, ages);
const type = Object.prototype.toString.call(youngest);

// 新写法
const youngest = Reflect.apply(Math.min, Math, ages);
const oldest = Reflect.apply(Math.max, Math, ages);
const type = Reflect.apply(Object.prototype.toString, youngest, []);

// Reflect.defineProperty方法基本等同于Object.defineProperty，用来为对象定义属性。未来，后者会被逐渐废除，请从现在开始就使用Reflect.defineProperty代替它。
function MyDate() {
  /*…*/
}

// 旧写法
Object.defineProperty(MyDate, 'now', {
  value: () => Date.now()
});

// 新写法
Reflect.defineProperty(MyDate, 'now', {
  value: () => Date.now()
});

// Reflect.getOwnPropertyDescriptor基本等同于Object.getOwnPropertyDescriptor，用于得到指定属性的描述对象，将来会替代掉后者。
var myObject = {};
Object.defineProperty(myObject, 'hidden', {
  value: true,
  enumerable: false,
});

// 旧写法
var theDescriptor = Object.getOwnPropertyDescriptor(myObject, 'hidden');

// 新写法
var theDescriptor = Reflect.getOwnPropertyDescriptor(myObject, 'hidden');

// Reflect.isExtensible方法对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展。
const myObject = {};

// 旧写法
Object.isExtensible(myObject) // true

// 新写法
Reflect.isExtensible(myObject) // true

// Reflect.preventExtensions对应Object.preventExtensions方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功。
var myObject = {};

// 旧写法
Object.preventExtensions(myObject) // Object {}

// 新写法
Reflect.preventExtensions(myObject) // true

// Reflect.ownKeys方法用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。
var myObject = {
  foo: 1,
  bar: 2,
  [Symbol.for('baz')]: 3,
  [Symbol.for('bing')]: 4,
};

// 旧写法
Object.getOwnPropertyNames(myObject)
// ['foo', 'bar']

Object.getOwnPropertySymbols(myObject)
//[Symbol(baz), Symbol(bing)]

// 新写法
Reflect.ownKeys(myObject)
// ['foo', 'bar', Symbol(baz), Symbol(bing)]

// 使用Proxy实现观察者模式
// 被观察的目标对象
let obj = { name: 'zyc', csdn: 'yunchong_zhao的博客'};
// 观察者
function print() {
    console.log('对象被操作了!');
}
// 使用proxy代理
const observeObj = (obj) => new Proxy(obj, {set, get});
// 消息队列
const observeQueue = new Set();
const observe = (fn) => observeQueue.add(fn);
 
// 设置
function set(target, key, value, receiver) {
    let result = Reflect.set(target, key, value, receiver);
    for(let item of observeQueue) {
        item.call(this);
    }
    return result;
}
// 获取
function get(target, key, receiver) {
    let result = Reflect.get(target, key, receiver);
    for (let item of observeQueue) {
        item.call(this);
    }
    return result;
}
 
// 代理对象
let proxy= observeObj(obj);
// 推入消息队列中
observe(print);
 
// 触发测试
proxy.name = "张三";
console.log(proxy.name);
// print()执行了两次

```
### Promise 
Promise 是异步编程的一种解决方案

Promise对象有以下两个特点。

（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
```js
// 下面代码创造了一个Promise实例。
const promise = new Promise((resolve, reject) => {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
// Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
// resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
// Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
promise.then((value) => {
  // success
},(error) => {
  // failure
});
// then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。这两个函数都是可选的，不一定要提供。它们都接受Promise对象传出的值作为参数。

// Promise 新建后就会立即执行。
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');

// Promise
// Hi!
// resolved
// 上面代码中，Promise 新建后立即执行，所以首先输出的是Promise。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。

const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})

p2
  .then(result => console.log(result))
  .catch(error => console.log(error))
// Error: fail
// 上面代码中，p1是一个 Promise，3 秒之后变为rejected。p2的状态在 1 秒之后改变，resolve方法返回的是p1。由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。所以，后面的then语句都变成针对后者（p1）。又过了 2 秒，p1变为rejected，导致触发catch方法指定的回调函数。

// 注意，调用resolve或reject并不会终结 Promise 的参数函数的执行。
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 2
// 1
//上面代码中，调用resolve(1)以后，后面的console.log(2)还是会执行，并且会首先打印出来。这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。
// 一般来说，调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then方法里面，而不应该直接写在resolve或reject的后面。所以，最好在它们前面加上return语句，这样就不会有意外。
new Promise((resolve, reject) => {
  return resolve(1);
  // 后面的语句不会执行
  console.log(2);
})

// Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数
const promise = new Promise((resolve, reject) => {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
promise.then(res => {}).catch(error => {})

// finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。
// 服务器使用 Promise 处理请求，然后使用finally方法关掉服务器。
// finally本质上是then方法的特例。
promise
.finally(() => {
  // 语句
});

// 等同于
promise
.then(
  result => {
    // 语句
    return result;
  },
  error => {
    // 语句
    throw error;
  }
);
// 上面代码中，如果不使用finally方法，同样的语句需要为成功和失败两种情况各写一次。有了finally方法，则只需要写一次。
// 它的实现也很简单。
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};

// Promise.all()
const p = Promise.all([p1, p2, p3]);
// Promise.all()方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。另外，Promise.all()方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。
// 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
// ）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

// Promise.race() 
const p = Promise.race([p1, p2, p3]);
// 上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数
// 下面是一个例子，如果指定时间内没有获得结果，就将 Promise 的状态变为reject，否则变为resolve。
const p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
]);

p
.then(console.log)
.catch(console.error);
// 上面代码中，如果 5 秒之内fetch方法无法返回结果，变量p的状态就会变为rejected，从而触发catch方法指定的回调函数。

// Promise.allSettled()
// 用来确定一组异步操作是否都结束了（不管成功或失败）。所以，它的名字叫做”Settled“，包含了”fulfilled“和”rejected“两种情况。
// 该方法返回的新的 Promise 实例，一旦发生状态变更，状态总是fulfilled，不会变成rejected。状态变成fulfilled后，它的回调函数会接收到一个数组作为参数，该数组的每个成员对应前面数组的每个 Promise 对象。
const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);

const allSettledPromise = Promise.allSettled([resolved, rejected]);

allSettledPromise.then(function (results) {
  console.log(results);
});
// [
//    { status: 'fulfilled', value: 42 },
//    { status: 'rejected', reason: -1 }
// ]

// Promise.any()
// 只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。

// Promise.resolve()
// 有时需要将现有对象转为 Promise 对象，Promise.resolve()方法就起到这个作用。
// Promise.resolve()方法的参数分成四种情况。
// 1.参数是一个 Promise 实例
// 如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
// 2.参数是一个thenable对象
// Promise.resolve()方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then()方法。
// 3.参数不是具有then()方法的对象，或根本就不是对象
// 如果参数是一个原始值，或者是一个不具有then()方法的对象，则Promise.resolve()方法返回一个新的 Promise 对象，状态为resolved
const p = Promise.resolve('Hello');

p.then(function (s) {
  console.log(s)
});
// Hello
//4.不带有任何参数
// Promise.resolve()方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。
// 所以，如果希望得到一个 Promise 对象，比较方便的方法就是直接调用Promise.resolve()方法。
const p = Promise.resolve();
p.then(function () {
  // ...
});

// Promise.reject()
// Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
});
// 出错了
```
### Iterator和for of
> 1. Iterator（遍历器）的概念

JavaScript 原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6 又添加了Map和Set。这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是Map，Map的成员是对象。这样就需要一种统一的接口机制，来处理所有不同的数据结构。

遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。

Iterator 的遍历过程是这样的。

（1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

（2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。

（3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。

（4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。

每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。

> 2. 默认-Iterator-接口

Iterator 接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即for...of循环（详见下文）。当使用for...of循环遍历某种数据结构时，该循环会自动去寻找 Iterator 接口。

一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历的”（iterable）。

ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。至于属性名Symbol.iterator，它是一个表达式，返回Symbol对象的iterator属性，这是一个预定义好的、类型为 Symbol 的特殊值，所以要放在方括号内
```js
const obj = {
  [Symbol.iterator] : function () {
    return {
      next: function () {
        return {
          value: 1,
          done: true
        };
      }
    };
  }
};
```
上面代码中，对象obj是可遍历的（iterable），因为具有Symbol.iterator属性。执行这个属性，会返回一个遍历器对象。该对象的根本特征就是具有next方法。每次调用next方法，都会返回一个代表当前成员的信息对象，具有value和done两个属性。

ES6 的有些数据结构原生具备 Iterator 接口（比如数组），即不用任何处理，就可以被for...of循环遍历。原因在于，这些数据结构原生部署了Symbol.iterator属性

原生具备 Iterator 接口的数据结构如下。

Array
Map
Set
String
TypedArray
函数的 arguments 对象
NodeList 对象

> 3. 使用 Generator 函数将对象重新包装一下,让他可以使用for of 遍历
```js
const obj = { a: 1, b: 2, c: 3 }

function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}

for (let [key, value] of entries(obj)) {
  console.log(key, '->', value);
}
// a -> 1
// b -> 2
// c -> 3

// 对于有些类似数组的数据，但是不具备iterrator接口时，可以用Arrary.form()转为真正的数组
```
### Generator

形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。
```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
hw.next() // { value: 'hello', done: false }
hw.next() // { value: 'world', done: false }
```
上面代码定义了一个 Generator 函数helloWorldGenerator，它内部有两个yield表达式（hello和world），即该函数有三个状态：hello，world 和 return 语句（结束执行）。

然后，Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象(（即遍历器）)

下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止

### async
async 函数是什么？一句话，它就是 Generator 函数的语法糖。

async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await

sync函数对 Generator 函数的改进，体现在以下四点

（1）内置执行器: Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样，只要一行。

（2）更好的语义：async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。

（3）更广的适用性: co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。

（4）返回值是 Promise: async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。

> 1. async 函数有多种使用形式。
```js
// 函数声明
async function foo() {}

// 函数表达式
const foo = async function () {};

// 对象的方法
let obj = { async foo() {} };
obj.foo().then(...)

// Class 的方法
class Storage {
  constructor() {
    this.cachePromise = caches.open('avatars');
  }

  async getAvatar(name) {
    const cache = await this.cachePromise;
    return cache.match(`/avatars/${name}.jpg`);
  }
}

const storage = new Storage();
storage.getAvatar('jake').then(…);

// 箭头函数
const foo = async () => {};
```
> 2. async 函数返回值（Promise对象）
```js
// async函数内部return语句返回的值，会成为then方法回调函数的参数。
async function f() {
  return 'hello world';
}

f().then(v => console.log(v))
// "hello world"

// async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到。
async function f() {
  throw new Error('出错了');
}

f().then(
  v => console.log('resolve', v),
  e => console.log('reject', e)
)
//reject Error: 出错了
```
> 3. Promise 对象的状态变化


async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。

>4. await 命令

正常情况下，await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。另一种情况是，await命令后面是一个thenable对象（即定义了then方法的对象），那么await会将其等同于 Promise 对象。
```js
// 实现休眠效果
// 因为await命令后面是一个 Promise 对象，所以定时写在Promise里面
function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  })
}

// 用法
async function one2FiveInAsync() {
  for(let i = 1; i <= 5; i++) {
    console.log(i);
    await sleep(1000);
  }
}

one2FiveInAsync();

// await命令后面的 Promise 对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到。
async function f() {
  await Promise.reject('出错了');
}

f()
.then(v => console.log(v))
.catch(e => console.log(e))
// 出错了

// 注意，上面代码中，await语句前面没有return，但是reject方法的参数依然传入了catch方法的回调函数。这里如果在await前面加上return，效果是一样的。
// 任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行。
async function f() {
  await Promise.reject('出错了');
  await Promise.resolve('hello world'); // 不会执行
}

// 有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行。
async function f() {
  await Promise.reject('出错了')
    .catch(e => console.log(e));
  return await Promise.resolve('hello world');
}


f()
.then(v => console.log(v))

// 下面的例子使用try...catch结构，实现多次重复尝试。
const superagent = require('superagent');
const NUM_RETRIES = 3;

async function test() {
  let i;
  for (i = 0; i < NUM_RETRIES; ++i) {
    try {
      await superagent.get('http://google.com/this-throws-an-error');
      break;
    } catch(err) {}
  }
  console.log(i); // 3
}

test();
// forEach里面不支持使用async await, 因为没有返回值, 可以使用for循环或者map结合Promise.all
async function processArray(array) {
  for (const item of array) {
    await doSomethingAsync(item);
  }
}
async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = await Promise.all(promises);
  console.log(results);
}

```
### 构造函数Class....
> 1. 实例属性的新写法

实例属性现在除了可以定义在constructor()方法里面的this上面，也可以定义在类内部的最顶层。

```js
class IncreasingCounter {
  constructor() {
    this._count = 0;
  }
}

class IncreasingCounter {
  _count = 0;
}
```

>2. Class 表达式

与函数一样，类也可以使用表达式的形式定义。

```js
const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
};

// 如果类的内部没用到的话，可以省略Me，也就是可以写成下面的形式。
const MyClass = class { /* ... */ };

// 采用 Class 表达式，可以写出立即执行的 Class
let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('张三');

person.sayName(); // "张三"
```
>3. 静态方法

类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

```js
// 静态方法可以与非静态方法重名。
class Foo {
  static classMethod() {
    return 'hello';
  }
  classMethod () {
    return 'hello';
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function

class Foo1 {
  classMethod() {
    return 'hello';
  }
}
Foo1.prototype.classMethod() // 'hello' 构造函数内定义的方法不加static,表示在他原型上添加方法

// 可以使用Object.assign批量添加方法
Object.assign(Foo1.prototype,{
		toStrings(){},
		toValue(){}
	})

  // 父类的静态方法，可以被子类继承。
  class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo {
}

Bar.classMethod() // 'hello'

// 静态方法也是可以从super对象上调用的。
class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ', too';
  }
}

Bar.classMethod() // "hello, too"
```
>4. 静态属性

静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。

```js
// 写法一
class Foo {
}

Foo.prop = 1;
Foo.prop // 1

// 写法二（推荐）
class MyClass {
  static myStaticProp = 42;

  constructor() {
    console.log(MyClass.myStaticProp); // 42
  }
}
```
>5. 私有方法和私有属性

私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。

实现的伪方法：1. 命名上的区分，2. 用Symbol命名
真正实现的方法：1. #， 2. 用Proxy, 3. WeakMap

```js
// 私有属性和方法的正式写法
class IncreasingCounter {
  #count = 0;
  get value() {
    console.log('Getting the current value!');
    return this.#count;
  }
  #increment() {
    this.#count++;
  }
}
```
>6. in 运算符

直接访问某个类不存在的私有属性会报错，但是访问不存在的公开属性不会报错。这个特性可以用来判断，某个对象是否为类的实例。

```js
class C {
  #brand;

  static isC(obj) {
    if (#brand in obj) {
      // 私有属性 #brand 存在
      return true;
    } else {
      // 私有属性 #foo 不存在
      return false;
    }
  }
}
```
>7. 静态块

允许在类的内部设置一个代码块，在类生成时运行且只运行一次，主要作用是对静态属性进行初始化。以后，新建类的实例时，这个块就不运行了。

每个类允许有多个静态块，每个静态块中只能访问之前声明的静态属性。另外，静态块的内部不能有return语句。

静态块内部可以使用类名或this，指代当前类。

除了静态属性的初始化，静态块还有一个作用，就是将私有属性与类的外部代码分享。

```js
class C {
  static x = 1;
  static {
    this.x; // 1
    // 或者
    C.x; // 1
  }
}


let getX;
class C {
  #x = 1;
  static {
    getX = obj => obj.#x;
  }
}

console.log(getX(new C())); // 1
```
> 8. 类的注意点

类和模块的内部，默认就是严格模式,

类不存在变量提升（hoist），这一点与 ES5 完全不同。

ES6 不会把类的声明提升到代码头部。这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义。

```js
let Foo = class {};
class Bar extends Foo {
}
```
上面的代码不会报错，因为Bar继承Foo的时候，Foo已经有定义了。但是，如果存在class的提升，上面代码就会报错，因为class会被提升到代码头部，而定义Foo的那一行没有提升，导致Bar继承Foo的时候，Foo还没有定义。

### Class继承
>1. 简介 

Class 可以通过extends关键字实现继承，让子类继承父类的属性和方法。

ES6 规定，子类必须在constructor()方法中调用super()，否则就会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，添加子类自己的实例属性和方法。如果不调用super()方法，子类就得不到自己的this对象。

为什么子类的构造函数，一定要调用super()？原因就在于 ES6 的继承机制，与 ES5 完全不同。ES5 的继承机制，是先创造一个独立的子类的实例对象，然后再将父类的方法添加到这个对象上面，即“实例在前，继承在后”。ES6 的继承机制，则是先将父类的属性和方法，加到一个空的对象上面，然后再将该对象作为子类的实例，即“继承在前，实例在后”。这就是为什么 ES6 的继承必须先调用super()方法，因为这一步会生成一个继承父类的this对象，没有这一步就无法继承父类。
```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color; // ReferenceError
    super(x, y);
    this.color = color; // 正确
  }
}
```
>2. 私有属性和私有方法的继承

父类所有的属性和方法，都会被子类继承，除了私有的属性和方法。

子类无法继承父类的私有属性，或者说，私有属性只能在定义它的 class 里面使用。

如果父类定义了私有属性的读写方法，子类就可以通过这些方法，读写私有属性。

```js
class Foo {
  #p = 1;
  getP() {
    return this.#p;
  }
}

class Bar extends Foo {
  constructor() {
    super();
    console.log(this.getP()); // 1
  }
}
```
>3. 静态属性和静态方法的继承
父类的静态属性和静态方法，也会被子类继承。

注意，静态属性是通过浅拷贝实现继承的。

如果是简单数据类型，互不影响，复杂数据类型，会互相影响

>4. Object.getPrototypeOf()

Object.getPrototypeOf()方法可以用来从子类上获取父类。
```js
class Point { /*...*/ }

class ColorPoint extends Point { /*...*/ }

Object.getPrototypeOf(ColorPoint) === Point
```
>5. super 关键字 

super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。

第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super()函数。

```js
class A {}

class B extends A {
  constructor() {
    super();
  }
}
```
注意，这里的super虽然代表了父类的构造函数，但是因为返回的是子类的this（即子类的实例对象），所以super内部的this代表子类的实例，而不是父类的实例，这里的super()相当于A.prototype.constructor.call(this)（在子类的this上运行父类的构造函数）。

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {
  constructor() {
    super();
  }
}
new A() // A
new B() // B
```
上面示例中，new.target指向当前正在执行的函数。可以看到，在super()执行时（new B()），它指向的是子类B的构造函数，而不是父类A的构造函数。也就是说，super()内部的this指向的是B。

```js
class A {
  name = 'A';
  constructor() {
    console.log('My name is ' + this.name);
  }
}

class B extends A {
  name = 'B';
}

const b = new B(); // My name is A
```
上面示例中，最后一行输出的是A，而不是B，原因就在于super()执行时，B的name属性还没有绑定到this，所以this.name拿到的是A类的name属性。

作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。
```js
class A {}

class B extends A {
  m() {
    super(); // 报错
  }
}
```
第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

ES6 规定，在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例。
```js
class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  m() {
    super.print();
  }
}

let b = new B();
b.m() // 2
```
由于this指向子类实例，所以如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。

```js
class A {
  constructor() {
    this.x = 1;
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
    super.x = 3;
    console.log(super.x); // undefined
    console.log(this.x); // 3
  }
}

let b = new B();
```

如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象。

```js
class Parent {
  static myMethod(msg) {
    console.log('static', msg);
  }

  myMethod(msg) {
    console.log('instance', msg);
  }
}

class Child extends Parent {
  static myMethod(msg) {
    super.myMethod(msg);
  }

  myMethod(msg) {
    super.myMethod(msg);
  }
}

Child.myMethod(1); // static 1

var child = new Child();
child.myMethod(2); // instance 2
```
另外，在子类的静态方法中通过super调用父类的方法时，方法内部的this指向当前的子类，而不是子类的实例。
```js
class A {
  constructor() {
    this.x = 1;
  }
  static print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  static m() {
    super.print();
  }
}

B.x = 3;
B.m() // 3
```
注意，使用super的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错。

```js
class A {}

class B extends A {
  constructor() {
    super();
    console.log(super); // 报错
  }
}

class A {}

class B extends A {
  constructor() {
    super();
    console.log(super.valueOf() instanceof B); // true
  }
}

let b = new B();
```
>6. 类的 prototype 属性和__proto__属性
大多数浏览器的 ES5 实现之中，每一个对象都有__proto__属性，指向对应的构造函数的prototype属性。Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。

（1）子类的__proto__属性，表示构造函数的继承，总是指向父类。

（2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。

```js
class A {
}

class B {
}

// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);

// B 继承 A 的静态属性
Object.setPrototypeOf(B, A);
const b = new B();

// Object.setPrototypeOf方法的实现。
Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}

// 因此，就得到了上面的结果。
Object.setPrototypeOf(B.prototype, A.prototype);
// 等同于
B.prototype.__proto__ = A.prototype;

Object.setPrototypeOf(B, A);
// 等同于
B.__proto__ = A;
```

>7. 原生构造函数的继承
ES5 是先新建子类的实例对象this，再将父类的属性添加到子类上，由于原生构造函数父类的内部属性无法获取，导致无法继承原生的构造函数。

ES6 允许继承原生构造函数定义子类，因为 ES6 是先新建父类的实例对象this，然后再用子类的构造函数修饰this，使得父类的所有行为都可以继承。

下面就是定义了一个带版本功能的数组。

```js
class VersionedArray extends Array {
  constructor() {
    super();
    this.history = [[]];
  }
  commit() {
    this.history.push(this.slice());  // 使用slice,返回新的数组，如果直接用this，当值改变时，history也会跟着改变
  }
  revert() {
    this.splice(0, this.length, ...this.history[this.history.length - 1]); // 将当前的值恢复成history保存的历史值，替换值
  }
}

var x = new VersionedArray();

x.push(1);
x.push(2);
x // [1, 2]
x.history // [[]]

x.commit();
x.history // [[], [1, 2]]

x.push(3);
x // [1, 2, 3]
x.history // [[], [1, 2]]

x.revert();
x // [1, 2]

```

>8. Mixin 模式的实现

```js
function mix(...mixins) {
  class Mix {
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new mixin()); // 拷贝实例属性
      }
    }
  }

  for (let mixin of mixins) {
    copyProperties(Mix, mixin); // 拷贝静态属性
    copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
  }

  return Mix;
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if ( key !== 'constructor'
      && key !== 'prototype'
      && key !== 'name'
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}
```
上面代码的mix函数，可以将多个对象合成为一个类。使用的时候，只要继承这个类即可。

```js
class DistributedEdit extends mix(Loggable, Serializable) {
  // ...
}
```

### Module 的语法
>1. 简介

在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。

ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。


>2. export 与 import 的复合写法

```js
export { foo, bar } from 'my_module';
// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };

// 接口改名
export { foo as myFoo } from 'my_module';

// 整体输出
export * from 'my_module';

export * as ns from "mod";

// 等同于
import * as ns from "mod";
export {ns};
```

>3. import()

import命令会被 JavaScript 引擎静态分析，先于模块内的其他语句执行,这样的设计，固然有利于编译器提高效率，但也导致无法在运行时加载模块。在语法上，条件加载就不可能实现。

ES2020提案 引入import()函数，支持动态加载模块。

import(specifier) import函数的参数specifier，指定所要加载的模块的位置。import命令能够接受什么参数，import()函数就能接受什么参数，两者区别主要是后者为动态加载。

import()函数可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用。它是运行时执行，也就是说，什么时候运行到这一句，就会加载指定的模块。另外，import()函数与所加载的模块没有静态连接关系，这点也是与import语句不相同。import()类似于 Node.js 的require()方法，区别主要是前者是异步加载，后者是同步加载。

import()返回一个 Promise 对象。下面是一个例子。

```js
const res = await import('@/utils/commonMethods.js')
res.add()
```
### Module 的加载实现
>1. 传统方法

HTML 网页中，浏览器通过script标签加载 JavaScript 脚本。

默认情况下，浏览器是同步加载 JavaScript 脚本，即渲染引擎遇到script标签就会停下来，等到执行完脚本，再继续向下渲染。如果是外部脚本，还必须加入脚本下载的时间。

script标签打开defer或async属性，脚本就会异步加载。渲染引擎遇到这一行命令，就会开始下载外部脚本，但不会等它下载和执行，而是直接执行后面的命令。

defer与async的区别是：defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer是“渲染完再执行”，async是“下载完就执行”。另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。

>2. ES6 模块与 CommonJS 模块的差异
1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
3. CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段。

第二个差异是因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

>3. 循环加载

“循环加载”（circular dependency）指的是，a脚本的执行依赖b脚本，而b脚本的执行又依赖a脚本。

通常，“循环加载”表示存在强耦合，如果处理不好，还可能导致递归加载，使得程序无法执行，因此应该避免出现。

但是实际上，这是很难避免的，尤其是依赖关系复杂的大项目，很容易出现a依赖b，b依赖c，c又依赖a这样的情况。这意味着，模块加载机制必须考虑“循环加载”的情况。

对于 JavaScript 语言来说，目前最常见的两种模块格式 CommonJS 和 ES6，处理“循环加载”的方法是不一样的，返回的结果也不一样。

CommonJS 模块的循环加载

CommonJS 模块的重要特性是加载时执行，即脚本代码在require的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。


