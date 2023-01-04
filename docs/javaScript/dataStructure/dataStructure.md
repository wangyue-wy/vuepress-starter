# Javascript数据结构
## 前言
我们都知道前端开发工程师更多偏向 DOM 渲染和 DOM 交互操作，随之 Node 的推广前端工程师也可以完成服务端开发。对于服务端开发而言大家都觉得数据结构和算法是基础，非学不可。所以正在进行 Node 开发的同学而言，这个答案跃然纸上。我们今天重点说一说纯前端开发的同学到底需不要数据结构与算法。

我先说下结论：需要，非常需要。

> 第一，只要是程序员，基本功都是数据结构与算法

　　从我们接触编程的时候就知道一个理论，程序=数据结构+算法。所以，只要写的是程序，就离不开数据结构和算法。当然，有的同学会说，我就做一个纯静态的官网，交互都不多，根本不需要懂那么多。那试问：你在别人眼中还是程序员吗?你拿到的待遇还是程序员的待遇吗?你未来的竞争力还是程序员所具备的抗风险能力吗?

　　数据结构的意义是易于存储、快速查找，换句话说只要涉及到数据操作，理论上都需要数据结构。打个比方吧，我们在页面中会有各种请求接口：业务的、埋点的、监控的。众所周知，浏览器是有请求并发数限制 的，如果埋点、监控的的请求太频繁会阻塞掉业务的接口请求。即使只有业务接口，随着feed流的流行，业务接口也需要控制，比如我滚动一屏需要若干个数据支撑，业务接口会频繁的发出，当我快速滚动的时候，前面发出去的接口已经没有意义了，但是前面发出的接口如果没有响应，后面的发出的接口就会被pending。从前端开发的角度，如何去管理接口?如果你知道队列、栈的数据结构，自然就知道利用这两个数据结构可以进行接口管理。如果刚才的业务场景，应该选用栈的数据结构，后进先出，保证最新的接口发出去。对于埋点和监控应该用队列，先进先出，不遗漏接口。通过这样的接口管理既能满足需要也可以避免接口的阻塞。

　　算法本身也不是高深莫测，它的目的是高效解决问题。比如之前做彩票业务，会有投注和奖金计算的需求。如果前端不擅长算法，可能就会和服务端同学说：前端算不出来，把数据提交到后端，后端再把结果返回给前端吧。殊不知，这样的做法既牺牲了用户体验，也加大了服务端的开销导致公司成本的上升。

　　上述两个小场景足矣说明前端开发工程师真的需要懂数据结构和算法。

> 第二、精益求精，离不开数据结构与算法

　　打破常规思维，让老板知道你是不可多得人才。对于很多同学来说关于算法起步排序，止于递归，只要超出这两个选项统统认为“做不到”。现在大家出行都依赖地图，对于地图一个核心需求就是能算出从起点到终点的若干路径并给出经济成本和时间成本。我们把这个问题简化下，从A点到B点的地铁有几种坐法，哪个是最快的，哪个是最短的，哪个是最便宜的?很多前端同学望而却步，“理直气壮”的告诉后端你算好通过接口传给我。凡是都靠服务端来实现，很难体现前端开发在自己岗位上的“精益求精”的探索精神。可能大家也想自己搞，苦于知识面有限，容易得出“做不到”的结论。实际上，你只要学过“动态规划”的算法，这个题目就迎刃而解，足够让你拍着胸脯说前端来就可以了(不同路径 II)。

　　当很多的事情你都能拍着胸脯说：我行，我来。那你的机遇和待遇就不远了，不信试试看?

　　我们做事情，“精益求精”是非常必要的职业心态，凡事不琢磨，事事不深究，慢慢我们的路就被堵死了。“精益求精”不是喊口号，是实实在在的砥砺前行。而要做的更好，没有深厚的基本功，没有一定的知识储备，很容易得出“运气不好”的借口，AI技术已经离我们越来越近了，低能的技术是首先要被新时代淘汰掉的。

> 第三、持续提升，依赖数据结构与算法

　　当从事前端3年以后，你会发现纯业务开发已经满足不了你了。多媒体、游戏、服务端、客户端都可以作为自己的第二个出路，正所谓技多不压身。每一个方向都是深不可测，在多媒体领域要涉及大量的音视频数据，如何做帧信息的关联计算、如何快速查询 Box 等等;对于游戏来说，物理碰撞检测是最基本的算法(“等一下，我碰!”——常见的2D碰撞检测 )，服务端就不用说了，前面所说的“前端做不到”的事情服务端要有兜底的能力(五花八门的算法设计)。其实客户端和前端没有本质的区别，无非前端是调用浏览器的能力，客户端调用系统的能力，也就说客户端的能力更大，也就有更多的算法需求：比如图像处理能力，大家能看到现在各种App都有美颜(美图)、人脸识别(支付宝)，这些图形图像的处理是需要大量的算法的。

## ​简介
数据结构是指相互之间存在着一种或多种关系的数据元素的集合和该集合中数据元素之间的关系组成。记为：Data_Structure=(D,R)，其中D是数据元素的集合，R是该集合中所有元素之间的关系的有限集合
![img](/vuepress-starter/images/data.png)

## 正文
### 数组
> 1 创建和初始化数组:
```js
let array = new Array();
let array = [];
```
> 2 添加和删除元素: 后进后出（push、pop）、前进前出（unshift、shift）、splice

> 3 常用方法:

| 方法名 |描述|
| :---: |:---:|
| concat | 连接两个或更多数组，并返回结果，不影响原数组 |
| slice | 传入索引值，将数组里对应索引范围内的元素作为新数组返回，不影响原数组 |
| splice | 指定位置/索引，就可以删除相应位置和数量的元素，并以新元素代替，影响原数组 |
| reverse | 数组元素反转，影响原数组 |
| toString | 将数组整体作为字符串返回，不影响原数组 |
| join | 将所有的数组元素以指定字符连接成字符串，不影响原数组 |
| indexOf | 返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1 |
| lastIndexOf | 返回与给定参数相等的数组元素索引的最大值 |
| sort | 按照字符对应的ASCII值对数组排序，支持传入指定排序方法的函数作为参数 |
| map | 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组 |
| forEach | 对数组中的每一项运行给定函数，不影响原数组中的项 |
| filter | 对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组 |
| every | 对数组中的每一项运行给定函数，如果该函数中每一项都返回true，则返回true |
| some | 对数组中的每一项运行给定函数，如果该函数中任一项返回true，则返回true |
| reduce | 接收一个函数作为参数，做数组的累加器，或者拼接数组项作为字符串,不改变原数组 |

![img](/vuepress-starter/images/js-array.png)

### Stack（栈）
限定仅在表尾进行插入和删除操作的线性表(一个线性表是n个具有相同特性的数据元素的有限序列,线性表中数据元素之间的关系是一对一的关系)，新添加的或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。
<div align=center>
![img](/vuepress-starter/images/stack.png)
</div>
> Stack的特点是后进先出（last in first out）。生活中常见的Stack的例子比如一摞书，你最后放上去的那本你之后会最先拿走；又比如浏览器的访问历史，当点击返回按钮，最后访问的网站最先从历史记录中弹出。

我们将创建一个类来表示栈，选择数组来保存栈里的元素,然后为栈声明如下方法：
* <font color='red'>push(element(s))</font>：添加一个（或几个）新元素到栈顶；
* <font color='red'>pop()</font>：移除栈顶的元素，同时返回被移除的元素；
* <font color='red'>peek()</font>：返回栈顶的元素，不对栈做任何修改；
* <font color='red'>isEmpty()</font>：如果栈里没有任何元素就返回true，否则返回false；
* <font color='red'>clear()</font>：移除栈里的所有元素；
* <font color='red'>size()</font>：返回栈里的元素个数。

实现代码如下：
```js
function Stack(){
    let items = [];
    //push方法
    this.push = function (element) {
        items.push(element);
    }
    //pop方法
    this.pop = function () {
        return items.pop();
    }
    //peek方法
    this.peek = function () {
        return items[items.length-1];
    }
    //isEmpty方法
    this.isEmpty = function () {
        return items.length == 0;
    }
    //clear方法
    this.clear = function () {
        items = [];
    }
    //size方法
    this.size = function () {
        return items.length;
    }
}
//使用栈
let stack = new Stack();
console.log(stack.isEmpty());    //true
stack.push(1);
stack.push(5);
console.log(stack.size());      //2
console.log(stack.peek());      //5
console.log(stack.pop());       //5
stack.clear();
console.log(stack.isEmpty());   //true
```
栈的应用: （在回溯问题中，它可以存储访问过的任务或路径、撤销的操作）
> 1、用于进制换算
```js
function baseConverter (number) { //转换为二进制
    let stack  = new Stack();
    while (number) {
        stack.push(number % 2); //栈里是0001
        number = Math.floor(number/2);
    }
    let baseString = "";
    while ( !stack.isEmpty() ) {
        baseString += stack.pop();
    }
    return baseString;
}
console.log(baseConverter(8));   //1000
```
> 2、用于判断字符串是否是回文字符串
```js
function isPalindrome (word) {
    let stack = new Stack();
    for (let i = 0, i < word.length; i++) {
        stack.push(word[i]);
    }
    let newword = "";
    while (stack.size() !== 0) {
        newword += stack.pop();
    }
    if (newword == word) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("abdcse"));    //false
console.log(isPalindrome("abccba"));    //true
```
> 3、使用栈模拟递归过程
```js
//阶乘递归实现
function factorial (n) {
    if (n === 0) {
        return 1;
    } else {
        return n*factorial(n-1);
    }
}
console.log(factorial(4));      //24

//栈实现递归
function stackFactorial (n) {
    let stack  = new Stack();
    while (n) {
        stack.push(n--);
    }
    let res = 1;
    while (stack.size() !== 0) {
        res *= stack.pop();
    }
    return res;
}
console.log(stackFactorial(4));     //24
```
### Queue（队列）
 和<font style="color: #000;font-weight:blod;font-size:20px"> 栈 </font>相反，<font style="color: #000;font-weight:blod;font-size:20px"> 队列 </font> 是一种先进先出（FIFO）的线性表，只允许在表的一端进行插入，而在另一端进行删除元素，最早进入队列的元素最早离开。允许插入的一端称为队尾，允许删除的一端称为队头
 <div align=center>
![img](/vuepress-starter/images/queue.png)
</div>

创建一个类来表示队列，使用数组用于储存队列中的元素，然后为队列声明如下方法：（与栈结构非常相似）
* <font color='red'>enquene(element(s))</font>：向队列尾部添加一个（或多个）新的项；
* <font color='red'>dequene()</font>：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素；
* <font color='red'>front()</font>：返回队列中的第一个元素，队列没变动；
* <font color='red'>isEmpty()</font>：如果队列中不包含任何元素，返回true，否则返回false；
* <font color='red'>size()</font>：返回队列包含的元素个数。

实现代码如下：
```js
function Queue(){
    let items = [];
    //enquene方法
    this.enqueue = function (element) {
        items.push(element);
    }
    //dequene方法
    this.dequeue = function () {
        return items.shift();
    }
    //front方法
    this.front = function () {
        return items[0];
    }
    //isEmpty方法
    this.isEmpty = function () {
        return items.length == 0;
    }
    //clear方法
    this.clear = function () {
        items = [];
    }
    //size方法
    this.size = function () {
        return items.length;
    }
    //print方法
    this.print = function () {
        console.log(items)
    }
}
//使用队列
let queue= new Queue();
console.log(queue.isEmpty());    //true
queue.enquene(1);
queue.enquene(5);
console.log(queue.size());      //2
console.log(queue.front());     //1
console.log(queue.dequene());   //1
queue.clear();
console.log(queue.isEmpty());   //true
```
在计算机科学中，常见的例子：

+ 打印队列：比如说我们需要打印五份文档。我们会打开每个文档，然后点击打印按钮。每个文档都会被发送至打印队列。第一个发送到打印队列的文档会首先被打印，以此类推，直到打印完所有文档
+ 消息队列：公众号推送、订阅推送、日志推送等场景都有应用
+ 弹幕：将每位用户发送的弹幕都缓存起来，按照先后时间顺序从屏幕中划过
队列的应用
> 1. Priority Queue（优先队列）

::: warning
Queue还有个升级版本，给每个元素赋予优先级，优先级高的元素入列时将排到低优先级元素之前。区别主要是enqueue方法的实现：
:::
```js
//元素的添加和移除是基于优先级的,对于优先级相同的元素，依旧遵循先进先出的原则
function PriorityQueue() {
    let items = [];
    this.isEmpty = function () {
        return items.length == 0;
    }
    this.enqueue = function (element) {
        //队列为空时，元素直接放置；不为空时，先比较优先级
        if (this.isEmpty()) {
            items.push(element);
        } else {
            var added = false;
            for (var i = 0; i < items.length; i++) {
                if (element[1] < items[i][1]) {
                    items.splice(i, 0, element); //将元素插入下标为i的位置
                    added = true;
                    break;
                }
            }
            if (!added) {
                items.push(element);
            }
        }
    }
    this.print = function () {
        console.log(items)
    }
    ···  //其他方法
}
var pQ = new PriorityQueue();

pQ.enqueue(['three', 3]);
pQ.enqueue(['one', 1]);
pQ.enqueue(['two', 2]);
pQ.enqueue(['four', 4]);
pQ.print() // [["one", 1], ["two", 2], ["three", 3], ["four", 4]]
```
> 2. 循环队列 
```js
/*  
*  孩子们围成一个圈，把花尽快传给旁边的人，某一刻传花停止，花在谁手里，
*  谁就淘汰，知道最后只剩一个孩子,返回这个孩子
*/
function hotPotato (nameList, num) {
    let queue = new Queue();
    for (let i=0; i<nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }
    while (queue.size() > 1) {
        for (let j=0; j<num; j++) {
            queue.enqueue(queue.dequeue());
        }
        queue.dequeue();
    }
    return queue.dequeue();
}
var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var winner = hotPotato(names, 7);
console.log('胜利者：' + winner);        //胜利者：John
```
### Linked List（链表）
链表是存储有序元素的集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称为指针或链接）组成。相对于传统的数组，链表的一个好处在于，添加或移除元素的时候不需要移动其他的元素。但是数组可以直接访问任何位置的任何元素，而想要访问链表中间的一个元素，需要从起点（表头）开始迭代列表直到找到所需的元素。
 <div align=center>
![img](/vuepress-starter/images/link.png)
</div>

::: tip
链表和传统的数组都是线性的数据结构，存储的都是一个序列的数据，但也有很多区别，如下表：
:::

| 比较维度 | 数组 | 链表 |
|:---:|:---:|:---:|
| 内存分配 | 静态内存分配，编译时分配且连续 | 动态内存分配，运行时分配且不连续 |
| 元素获取 | 通过Index获取，速度较快 | 通过遍历顺序访问，速度较慢 |
| 添加删除元素 | 因为内存位置连续且固定，速度较慢 | 因为内存分配灵活，只有一个开销步骤，速度更快 |
| 空间结构 | 可以是一维或者多维数组 | 可以是单向、双向或者循环链表 | 

一个单向链表通常具有以下方法：
+ <font color='red'>size()</font>：返回链表中节点的个数
+ <font color='red'>head()</font>：返回链表中的头部元素
+ <font color='red'>add()</font>：向链表尾部增加一个节点
+ <font color='red'>isEmpty()</font>：如果链表中没有任何元素就返回true，否则返回false；
+ <font color='red'>remove()</font>：删除某个节点
+ <font color='red'>indexOf()</font>：返回某个节点的index
+ <font color='red'>elementAt()</font>：返回某个index处的节点
+ <font color='red'>addAt()</font>：在某个index处插入一个节点
+ <font color='red'>removeAt()</font>：删除某个index处的节点

单向链表的Javascript实现：
```js
/*
 * 链表中的节点 
 */
function Node(element) {
  // 节点中的数据
  this.element = element;
  // 指向下一个节点的指针
  this.next = null;
}

function LinkedList() {
    var length = 0;
    var head = null;
    //返回链表中节点的个数
    this.size = function () {
        return length;
    }
    //返回链表中的头部元素
    this.head = function () {
        return head;
    }
    //向链表尾部增加一个节点
    this.add = function (element) {
        var node = new Node(element);
        if (head == null) {
            head = node;
        } else {
            var currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    }
    //删除某个节点
    this.remove = function (element) {
        var currentNode = head;
        var previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    }
    //如果链表中没有任何元素就返回true，否则返回false；
    this.isEmpty = function () {
        return length === 0;
    }
    //返回某个节点的index
    this.indexOf = function (element) {
        var currentNode = head;
        var index = -1;
        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }
    //返回某个index处的节点
    this.elementAt = function (index) {
        var currentNode = head;
        var count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    }
    //在某个index处插入一个节点
    this.addAt = function (index, element) {
        var node = new Node(element);
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;
        if (index > length) {
            return false;
        }
        if (index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    }
    //删除某个index处的节点 
    this.removeAt = function (index) {
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;
        if (index < 0 || index >= length) {
            return null;
        }
        if (index === 0) {
            head = currentIndex.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
        return currentNode.element;
    }
}

let linkedList = new LinkedList()
linkedList.add(1)
linkedList.add(5)
linkedList.addAt(1, 6)
linkedList.add(7)
console.log(linkedList.indexOf(6)) //1
console.log(linkedList.elementAt(2)) //5
console.log(linkedList.removeAt(2)) //删除5
console.log(linkedList.indexOf(7)) // 2
```
### Set（集合）
集合是由一组无序且唯一（即不能重复）的项组成。这个数据结构使用了与有限集合相同的数学概念。不包含任何元素的集合是空集。
<div align=center>
![img](/vuepress-starter/images/set.png)
</div>

一个典型的Set应该具有以下方法：
+ <font color='red'>values()</font>：返回集合中的所有元素
+ <font color='red'>size()</font>：返回集合中元素的个数
+ <font color='red'>has()</font>：判断集合中是否存在某个元素
+ <font color='red'>add()</font>：向集合中添加元素
+ <font color='red'>clear()</font>：移除集合中所有的值
+ <font color='red'>remove()</font>：从集合中移除某个元素
+ <font color='red'>union()</font>：返回两个集合的并集
+ <font color='red'>intersection()</font>：返回两个集合的交集
+ <font color='red'>difference()</font>：返回两个集合的差集
+ <font color='red'>subset()</font>：判断一个集合是否为另一个集合的子集

使用Javascript可以将Set进行如下实现：
```js
function MySet () {
    var collection = [];
    //判断集合中是否存在某个元素
    this.has = function (element) {
        return (collection.indexOf(element) !== -1);
    }
    //返回集合中的所有元素
    this.values = function () {
        return collection;
    }
    //返回集合中元素的个数
    this.size = function () {
        return collection.length;
    }
    //向集合中添加元素
    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    }
    //移除集合中所有的值
    this.clear = function(){
        collection = [];
    };
    //从集合中移除某个元素
    this.remove = function (element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }
    //返回两个集合的并集
    this.union = function (otherSet) {
        var unionSet = new MySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function (e) {
            unionSet.add(e);
        });
        secondSet.forEach(function (e) {
            unionSet.add(e);
        });
        return unionSet;
    }
    //返回两个集合的交集
    this.intersection = function (otherSet) {
        var intersectionSet = new MySet();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }
    //返回两个集合的差集
    this.difference = function (otherSet) {
        var differenceSet = new MySet();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }
    //判断一个集合是否为另一个集合的子集
    this.subset = function (otherSet) {
        var firstSet = this.values();
        return firstSet.every(function (value) {
            return otherSet.has(value);
        });
    }
}
//使用Set类：
let set = new MySet();
set.add(1);
console.log(set.values()); //输出["1"]
console.log(set.has(1)); //输出true
console.log(set.size()); //输出1
set.add(2);
console.log(set.values()); //输出["1", "2"]
console.log(set.has(2)); //true
console.log(set.size()); //2
set.remove(1);
console.log(set.values()); //输出["2"]
set.remove(2);
console.log(set.values()); //输出[] 
//并集,交集,差集,子集 的测试
let setA = new MySet();
setA.add(1);
setA.add(2);
setA.add(3);
let setB = new MySet();
setB.add(3);
setB.add(4);
setB.add(5);
let unionAB = setA.union(setB);
console.log(unionAB.values());    //["1", "2", "3", "4", "5"]
let intersectionAB = setA.intersection(setB);
console.log(intersectionAB .values());    //["3"]
let differenceAB = setA.difference(setB);
console.log(differenceAB.values());    //["1", "2"]
let setC = new MySet();
setC.add(1);
console.log(setA.subset(setB));    //false
console.log(setC.subset(setA));    //true
```
### Dictionary （字典）
集合、字典和散列表可以存储不重复的值。在集合中，以[值，值]的形式存储元素，我们感兴趣的是每个值的本身，并把它们当做主要元素。在字典和散列表中，我们使用 [键 , 值] 的形式来存储数据。

::: tip
字典（Map类,它和Set类很相似）
:::

字典所能使用的方法：
+ <font color='red'>set(key,value)</font>：向字典中添加新元素。
+ <font color='red'>remove(key)</font>：通过使用键值来从字典中移除键值对应的数据值。
+ <font color='red'>has(key)</font>：如果某个键值存在于这个字典中，则返回true，反之则返回false。
+ <font color='red'>get(key)</font>：通过键值查找特定的数值并返回。
+ <font color='red'>clear()</font>：将这个字典中的所有元素全部删除。
+ <font color='red'>size()</font>：返回字典所包含元素的数量。与数组的length属性类似。
+ <font color='red'>keys()</font>：将字典所包含的所有键名以数组形式返回。
+ <font color='red'>values()</font>：将字典所包含的所有数值以数组形式返回。

Javascript实现代码：
```js
function Dictionary(){
    let items = {};
    //声明方法
    //1、has方法
    this.has = function(key){
        return items.hasOwnProperty(key);
    };
    //2、set方法
    this.set = function(key, value){
        items[key] = value;   //添加新值，或更新已有的值
    };
    //3、remove方法
    this.remove = function(key){
        if(this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    };
    //4、get方法
    this.get = function(key){
        return this.has(key) ? items[key] : undefined ;
    };
    //5、values方法
    this.values = function(){
        let values = [];
        for(let key in items){
            if(this.has(key)){
                values.push(items[key]);
            }
        }
        return values ;
    };
    //6、clear方法
    this.clear = function(){
        items = {};
    };
    //7、size方法
    this.size = function(){
        let count = 0;
        for(let key in items){
            if(this.has(key)){
                count++;
            }
        }
        return count;   
    };
    //8、keys方法
    this.keys = function(){
        let keys= [];
        for(let key in items){
            if(this.has(key)){
                keys.push(key);
            }
        }
        return keys;
    }
    //9、getItems方法
    this.getItems = function(){
        return items;
    }
}

//使用Dictionary类
var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com'); 
console.log(dictionary.has('Gandalf'));    //true
console.log(dictionary.size());         //3
console.log(dictionary.keys());         //["Gandalf", "John", "Tyrion"] 
console.log(dictionary.values());       //["gandalf@email.com","johnsnow@email.com","tyrion@email.com"] 
console.log(dictionary.get('Tyrion'));  //tyrion@email.com
dictionary.remove('John'); 
console.log(dictionary.keys());         //["Gandalf", "Tyrion"]
console.log(dictionary.values());       //["gandalf@email.com", "tyrion@email.com"]
console.log(dictionary.getItems());     //Object {Gandalf: "gandalf@email.com", Tyrion: "tyrion@email.com"} 
```
### Hash Table（哈希表/散列表）
Hash Table是一种用于存储键值对（key value pair）的数据结构，因为Hash Table根据key查询value的速度很快，所以它常用于实现Map、Dictinary、Object等数据结构。如下图所示，Hash Table内部使用一个hash函数将传入的键转换成一串数字，而这串数字将作为键值对实际的key，通过这个key查询对应的value非常快，时间复杂度将达到O(1)。Hash函数要求相同输入对应的输出必须相等，而不同输入对应的输出必须不等，相当于对每对数据打上唯一的指纹。
<div align=center>
![img](/vuepress-starter/images/hash.png)
</div>
::: tip
HashTable类是Dictionary类的一种散列表实现方式。散列算法的作用是尽可能快地在数据结构中找到一个值。散列函数的作用是给定一个键值，然后返回值在表中的地址。在散列表上插入、 删除和取用数据都非常快， 但是对于查找操作来说却效率低下， 比如查找最大最小值。 得求助于其他数据结构， 二叉查找树是一个很好的选择。
:::
一个Hash Table通常具有下列方法：
+ <font color='red'>add()</font>：增加一组键值对
+ <font color='red'>remove()</font>：删除一组键值对
+ <font color='red'>lookup()</font>：查找一个键对应的值

一个简易版本的Hash Table的Javascript实现：
```js
function hash(string, max) {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i); //返回字符串在每个位置的字符的 Unicode 编码。
    }
    console.log(hash)
    return hash % max;
}

function HashTable() {
    let storage = [];
    const storageLimit = 4; //一般定义为storage的长度，余数结果就是0-3
    //增加一组键值对
    this.add = function (key, value) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) { 
            storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) { //如果键值相同，就覆盖先前的value值
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) { //键值不同，直接添加到数组
                storage[index].push([key, value]);
            }
        }
    }
    //删除一组键值对
    this.remove = function (key) {
        var index = hash(key, storageLimit);
        //如果数组中就一个键值对，且key值和删除的key值相同，就删除该数组
        if (storage[index].length === 1 && storage[index][0][0] === key) { 
            delete storage[index];
        } else { //如果数组中多个键值对
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i] && storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    }
    //查找一个键对应的值
    this.lookup = function (key) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i] && storage[index][i][0] === key) {
                    return storage[index][i][1]; //返回value值
                }
            }
        }
    }
    // 打印数组
    this.print = function () {
        console.log(storage)
    }
}
let hashTable = new HashTable()
hashTable.add('name', 'zmh')
hashTable.add('age', 18)
console.log(hashTable.lookup('age')) //18
hashTable.remove('name') 
console.log(hashTable.lookup('name')) //undefined
hashTable.print()
```
### Tree （树）
Tree的数据结构和自然界中的树极其相似，有根、树枝、叶子，如下图所示。Tree是一种多层数据结构，与Array、Stack、Queue相比是一种非线性的数据结构，在进行插入和搜索操作时很高效。
<div align=center>
![img](/vuepress-starter/images/tree.png)
</div>
在描述一个Tree时经常会用到下列概念：
+ Root（根）：代表树的根节点，根节点没有父节点
+ Parent Node（父节点）：一个节点的直接上级节点，只有一个
+ Child Node（子节点）：一个节点的直接下级节点，可能有多个
+ Siblings（兄弟节点）：具有相同父节点的节点
+ Leaf（叶节点）：没有子节点的节点
+ Edge（边）：两个节点之间的连接线
+ Path（路径）：从源节点到目标节点的连续边
+ Height of Node（节点的高度）：表示节点与叶节点之间的最长路径上边的个数
+ Height of Tree（树的高度）：即根节点的高度
+ Depth of Node（节点的深度）：表示从根节点到该节点的边的个数
+ Degree of Node（节点的度）：表示子节点的个数

我们以二叉查找树为例，展示树在Javascript中的实现。在二叉查找树中，即每个节点最多只有两个子节点，而左侧子节点小于当前节点，而右侧子节点大于当前节点，如图所示：
<div align=center>
![img](/vuepress-starter/images/two-tree.png)
</div>
一个二叉查找树应该具有以下常用方法：
+ <font color='red'>add()</font>：向树中插入一个节点
+ <font color='red'>findMin()</font>：查找树中最小的节点
+ <font color='red'>findMax()</font>：查找树中最大的节点
+ <font color='red'>find()</font>：查找树中的某个节点
+ <font color='red'>isPresent()</font>：判断某个节点在树中是否存在
+ <font color='red'>remove()</font>：移除树中的某个节点

二叉查找树的Javascript实现：
```js
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    // 向树中插入一个节点
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }
    // 查找树中最小的节点
    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    // 查找树中最大的节点
    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
    // 查找树中的某个节点
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
    // 判断某个节点在树中是否存在
    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
    // 移除树中的某个节点
    remove(data) {
        const removeNode = function (node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                // node没有子节点
                if (node.left == null && node.right == null) {
                    return null;
                }
                // node没有左侧子节点
                if (node.left == null) {
                    return node.right;
                }
                // node没有右侧子节点
                if (node.right == null) {
                    return node.left;
                }
                // node有两个子节点
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
}
//测试
const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin()); // 1
console.log(bst.findMax()); // 7
bst.remove(7);
console.log(2); //
console.log(bst.findMax()); // 6
console.log(bst.isPresent(4)); // false
```
### Graph（图）
Graph是节点（或顶点）以及它们之间的连接（或边）的集合。Graph也可以称为Network（网络）。根据节点之间的连接是否有方向又可以分为Directed Graph（有向图）和Undrected Graph（无向图）。Graph在实际生活中有很多用途，比如：导航软件计算最佳路径，社交软件进行好友推荐等等。
<div align=center>
![img](/vuepress-starter/images/graph.png)
</div>
Graph通常有两种表达方式：
1. Adjaceny List（邻接列表）：
+ 邻接列表可以表示为左侧是节点的列表，右侧列出它所连接的所有其他节点。
<div align=center>
![img](/vuepress-starter/images/graph-list1.png)
</div>

2. Adjacency Matrix（邻接矩阵）：
+ 邻接矩阵用矩阵来表示节点之间的连接关系，每行或者每列表示一个节点，行和列的交叉处的数字表示节点之间的关系：0表示没用连接，1表示有连接，大于1表示不同的权重。
<div align=center>
![img](/vuepress-starter/images/graph-list2.png)
</div>
::: tip
访问Graph中的节点需要使用遍历算法，遍历算法又分为广度优先和深度优先，主要用于确定目标节点和根节点之间的距离。
:::
在Javascript中，Graph可以用一个矩阵（二维数组）表示，广度优先搜索算法可以实现如下：

```js
function bfs (graph, root) {
    var nodesLen = {};
    for (var i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0;
    var queue = [root];
    var current;
    while (queue.length != 0) {
        current = queue.shift();
        var curConnected = graph[current];
        var neighborIdx = [];
        var idx = curConnected.indexOf(1);
        while (idx != -1) {
            neighborIdx.push(idx);
            idx = curConnected.indexOf(1, idx + 1);
        }
        for (var j = 0; j < neighborIdx.length; j++) {
            if (nodesLen[neighborIdx[j]] == Infinity) {
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
                queue.push(neighborIdx[j]);
            }
        }
    }
    return nodesLen;
}
//测试
var graph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
]
console.log(bfs(graph, 1)); // {0: 2, 1: 0, 2: 1, 3: 3, 4: Infinity}
```
## 致谢
本次分享到此结束，讲的不好的地方，多多担待，多多指点。谢谢大家。