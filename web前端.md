#  js复习
## 一、js数据类型/流程控制

###  数据类型
		1.简单数据类型（栈）
			(1)string;(2)number;特殊值:NaN (3)boolean;(4)undefined;
			1.1 typeof
			typeof 用于检测简单数据的类型;
			1.2 数据类型之间的转换
				1.2.1 其他数据类型转number
					a.Number()
						可用于任何数据类型转number
						**注意点**
						1.（）里面的内容可看成数字就可以转我Number;如果不是数值，则会转为NaN;
						2.（）里面是数值，但是数值之间有空格，也会转为NaN;
						3.（）为空或者是空格，会转换为0；
					b.parseInt()
						专用于字符串的转换;
						**注意点**
						1.（）里面的内容从左往右查找开始转换，如果遇到数字转为数字就会转为Number类型，一旦遇到非数字,则停止转换
						2.（）里面如果为空，则会转为NaN;
						3.（）里面的字符串如果是小数，那么只会转换整数部分；
					c.parseFloat()
						与parseInt()用法相类似，唯一区别是parseFloat()可以转换小数部分
				
				1.2.2 其他数据类型转string
					a.string()
						string(obj)// 可以转null 和 undefined;
					b.toString()
						obj.toString() // 不能转 null 和 undefined;
	
				1.2.3 其他数据类型转boolean
					a. 对需要转换的内容进行算数运算
					b. 在需要转换的内容前面加 ‘+’
					c. Boolean()
						null,空字符串,false,0,NaN,undefined   可以转为false;
						*空格会转为ture;
	
		2.复杂数据类型（堆）
			（1）Array (2) object (3) Data对象 (4) function(){} (5)null
###   Math对象
		1.2.1 Math.pow(a,b)  a的b次方
		1.2.2 Math.round()  四舍五入
		1.2.3 Math.ceil()   向上取整
		1.2.4 Math.floor()   向下取整
		1.2.5 Math.max()   最大值
		1.2.6 Math.min()   最小值
		1.2.7 Math.random()   随机生成一个0~1之间的数字


###   运算符的比较
		1.如果两个值具有相同的类型，那么就检测他的等同性.
		2.如果两个值的类型不同，则用以下规则
			2.1 如果一个值类型是null,另一个值类型是undefined;  则他们相等
			2.2 如果一个值是数字，另一个是字符串，则将字符串转化为数值再进行比较
			2.3 如果一个是true,将它转为1；在进行比较,false也一样；
			2.4 如果一个值是对象，另一个值数字或字符串，将对象转换成原始类型的值，在进行比较
			2.5 其他的数值组合是不相等的；
```javascript
//运算符比较面试题
- 任何数据和NaN相比结果都为false；
- null等于undefined；
- null和非空类型相比结果为false
- undefined和非空类型相比结果为false
- 数字和非空类型比较，先转换为数字再比较
- 布尔和非空类型比较，先转换为数字再比较
- 对象与对象比较内存地址
- 对象与字符串，对象先转换为字符串再比较


0 = [] // true;数字和非空类型比较，先转换为数字再比较
0 = null // false;null和非空类型相比结果为false
{} = {} //false;对象与对象比较内存地址
'[Object Object]' = {} //true;对象与字符串，对象先转换为字符串再比较

```



###  选择结构

-  if(){ 		 }
  -  if(){ 	 }else{  }
    -  if(){   }else if(){}else{			}
-  switch( ){ case: ; break}
-  三元表达式   A>B ? tur : false;

###  循环结构
-  for(var i = ?; i < ? ; i++){	}
-  while( ){ 循环体 }
-  do{ 循环体 }while( )

   循环中的break和continue;
   		1.循环中，如果遇到break,就会结束当前的循环；
   		2.循环中，如果遇到continue,就会结束当前次的循环，但仍进行下一次循环；

##  Array()方法&&String对象方法

###    数组的方法

		2.1.1 数组的长度
			arr.length;
			清空数组的方法：（1）arr.length = 0; (2) arr = [];
	
		2.1.2 concat() 
			方法用于链接合并多个数组，
			var a = [1,2,3]; a.concat(4,5); ==> 1,2,3,4,5
	
		2.1.3 join() 
			用于把数组中的所有元素放入一个字符串。
			arr[0] = "George"
			arr[1] = "John"
			arr[2] = "Thomas"
			arr.join() ==> George,John,Thomas;
			join()中可以放入分隔符，输出结果就是以括号内分隔符分隔的字符串
	
		2.1.4 pop() 
			用于删除并返回数组的最后一个元素。
			var arr = new Array(3)
				arr[0] = "George"
				arr[1] = "John"
				arr[2] = "Thomas"
	
				arr.pop() ==> "Thomas"
			arr ==> ["George","John"]
	
		2.1.5 push()
			向数组的末尾添加一个或多个元素，并返回新的长度。
			var arr = new Array(3)
				arr[0] = "George"
				arr[1] = "John"
				arr[2] = "Thomas"
	
			arr.push('sandy');
			arr ==> ["George","John","Thomas","sandy"]
		
		2.1.5 shift() 
			用于把数组的第一个元素从其中删除，并返回第一个元素的值。
			var arr = new Array(3)
				arr[0] = "George"
				arr[1] = "John"
				arr[2] = "Thomas"
	
			arr.shift() ==> "George"
			arr ==> [John,Thomas];
	
		2.1.6 unshift() 
			可向数组的开头添加一个或更多元素，并返回新的长度。
			var arr = new Array()
				arr[0] = "George"
				arr[1] = "John"
				arr[2] = "Thomas"
	
			arr.unshift("sandy");
			arr ==> ["sandy","George","John","Thomas"]
	
		2.1.7 reverse()
			颠倒数组中元素的顺序。
	
		2.1.8 slice()
			可从已有的数组中返回选定的元素；可用于提取数组的某一部分；
			var arr = new Array(3)
				arr[0] = "George"
				arr[1] = "John"
				arr[2] = "Thomas"
				arr[3] = "James"
				arr[4] = "Adrew"
				arr[5] = "Martin"
	
			arr.slice(2,4) ==>Thomas,James  end索引上的数组不会被截取
			arr ==>George,John,Thomas,James,Adrew,Martin //也就是，slice不会改变数组的长度，并不会修改数组！
			
		2.1.9 splice()
			方法用于插入、删除或替换数组的元素
			arr.splice(从何处删除/添加元素,删除或添加的数量,向数组中添加的元素(可以是多个元素))
	
			splice() 方法会直接对数组进行修改！

####	ES5新增的数组方法

- forEach()

arr.forEach(function(item,index,arr){});//forEach没有返回值，返回的只有undefined;

> forEach在回调函数中不能中途return终止循环;

由于在forEach中不能return,可以使用`some()`方法，用法与forEach()一样，当需要终止循环时，设置`return turn`，表示已经匹配到相应的条件;;

- map()

  arr.map(function(item,index,arr){});//可以设置返回值，return的值组成新数组；

- filter()

  过滤数组，返回新过滤后的数组.

  arr.filter(function(item,index,arr){ if(){return true}else{return false}});

###    字符串String对象的方法

		2.2.1 charAt()
			返回指定索引位置上的字符；
			var str="Hello world!"
				str.charAt(1) ==> e;
		
		2.2.2 concat()
			链接字符串; 类比数组中的concat();
		
		2.2.3 indexOf() 
			返回某个指定的字符串值在字符串中(首次)出现的位置;如果找不到该字符，则会返回-1；
			var str="Hello world!"
			str.indexOf('H') ==> 0;
	
		2.2.4 lastIndexOf()
			类比 indexOf()  返回一个指定的字符串值最后出现的位置
	
		2.2.5 replace() 
			用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串；
			string.replace(regexp/substr规定子字符串或要替换的模式,replacement规定了替换文本)
	
		2.2.6 slice() 
			提取字符串的某个部分，并以新的字符串返回被提取的部分；
			str.slice(start,end);
			类比数组中的slice()方法；
	
			类似的还有：substring();substr;
	
		2.2.7 trim()
			去掉字符串首位的空格
	
		2.2.8 split()
			将字符串以某种分隔符分隔并以数组方式返回；
			类比数组中join();与之相反

##  function
###   函数的定义
			函数的定义：(1) function fn(){	};  (2) var fn = function(){	};   (3) 构造函数   
				function fn(){ };
				var F1 = new fn();

---
###   函数的返回值
			函数中的return关键字，return可以结束当前函数，可以设置函数的返回值；
		如果return后没有跟内容，返回undefined;如果函数内容没有写return,返回的也是undefined;



 + **构造函数中设置返回值的情况**
 + 
    1）.如果返回值是一个基本数据类型，则会被忽略；
    	2）.如果返回的是一个复杂数据类型，则会返回该数据类型，将new关键字创建的对象替换！

---
###  作用域
		js中作用域：（1）全局作用域：script标签里面，任意的函数外部。（2）局部作用域：任意的函数内（在js中，只有函数能分割作用域。）；

##   Date对象

			var date = new Date();		
			年  ---   date.getFullYear()
			月  ---   date.getMonth()+1  //默认月份从0开始计算，如要获取当前月份则需要进行+1；
			日  ---   date.getDete();
			星期 ---   date.getDay();
			小时 ---   date.getHours();
			分   ---   date.getMinutes();
			秒   ---   date.getSeconds();

##   Object

###  js中内置的对象
(1) Number (2) Boolean (3) String (4) Array (5) Object (6) Function (7) Data (8) Math

### 对象的创建
		(1) var obj = new Object();
			obj.name = "sandy";
			obj.age = "20";
			获取对象中的属性： 1） obj.name    2)  obj["name"]
	
		(2) var obj = {"name":"sandy","age":"20"}

###  forin 遍历对象中的属性
		var obj = {'name':'sandy','age':'20','skill':'lovely'}
			for(var key in obj){
				console.log(key + '---' + obj[key]);
			}
		// name---sandy;age---20;skill---lovely;

##  DOM

###  获取节点的几个方式
			1）document.getEelementById()
			2) document.getEelementByTagName() //通过标签名获取节点 获取的是一个伪数组；
			3）docuemnt.getEelementByClassName()   //通过类名获取节点 获取的也是一个伪数组；
				给一个节点设置类：ele.ClassName = '';



###  	innerHTML、innerText/textContent
		1.innerHTML
			1) 获取；可以获取标签间的内容，如果标签间只有文本的话，则是直接获取，如果标签间还有嵌套标签的话，标签名也一并获取；
			2）设置；可以给标签内嵌套内容，如果标签间还有嵌套标签，则标签会被渲染出来；
	
			兼容问题：没有兼容问题，所有浏览器都支持；
	
		2.innerText
			1) 获取；通过innerText获取内容，如果还有嵌套的标签，只获取内容！
			2) 设置；通过innerText设置内容，如果还有嵌套的标签，标签不会被渲染!会被转义成现在页面中；


			兼容问题：有兼容问题。低版本的火狐浏览器不兼容

		3.textContent
			与innerText 作用一样；
	
			兼容问题： 低版本的IE浏览器不兼容；

###   	DOM中的事件


				ele.onclick (单击)
				ele.ondblclick (双击事件)
				ele.onfocus (获取焦点事件)
				ele.onblur (失去焦点事件)
				ele.onkeydown (键盘按下事件)
				ele.onkeyup (键盘抬起事件)
				ele.onmouseover(鼠标移动事件)
				ele.onmousedown (鼠标按下事件)
				ele.onmouseup (鼠标抬起事件)
				ele.onmouseout (鼠标离开事件)

###   DOM动态创建元素
		1）document.write()
		2) innerHTML
			创建大批量的标签，多用于创建展示的标签
		3）document.createElement() 重点；

###  DOM中设置自定义属性
		1）设置自定义属性
			ele.setAttribute();
		2) 移除属性操作
			ele.removeAttribute();
		3) 获取属性值
			ele.getAttribute();

###  节点类型判断

	1.nodeType
		node.nodeType;//判断节点的类型；
	
		标签节点----1；
		属性节点----2；
		文本节点----3；
		注释节点----8；
	
	2.nodeName
		node.nodeName;//获取节点的类型字符串格式；
	
		标签节点----标签名;
		属性节点----属性名；
		文本节点----#text;
		注释节点----#comment#;
	
	3.node.Value;
		node.nodeValue;
	
		标签节点----null；
		属性节点----属性值；
		文本节点----文本的内容；
		注释节点----注释节点；


###   DOM中节点的操作

- 6.6.1 获取上一个节点

    previousSibling获取前一个节点，高级浏览器中可能或获取到空白文本节点、注释等；低版本的IE浏览器会忽略空白文本或注释；
    		previousElementSibling,  高版本浏览器忽略中间的空白文本或者注释，获得标签文本；而低版本的IE不支持此方法，具有兼容性问题！

    			function getPreviousEle(ele){
    			        if(ele){
    			            if(ele.previousElementSibling){
    			                return ele.previousElementSibling;
    			            }else{
    			                ele = ele.previousSibling;
    			                while(ele.nodeType != 1){
    			                    ele = ele.previousSibling;
    			                }
    			                return ele;
    			            }
    			        }
    			    }

- 6.6.2 获取下一个节点

    nextSibling 高版本浏览器会获取到空字符串    低版本的IE浏览器只能获取到标签节点；
    		nextElementSibling 高版本浏览器只会获取到标签字符串    低版本的IE有兼容性；

    			参照上一个封装兼容！

- 6.6.3 获取第一个节点

    firstChild   浏览器会获取到空白文本或者注释；
    		firstElementChild   高版本浏览器会忽略空白文本节点和注释节点   低版本IE浏览器支持

- 6.6.4 获取元素的节点

    childNodes   高版本的浏览器会将所有的节点获取  包括  空白文本节点、注释节点、标签节点    低版本的浏览器IE 会将空白文本节点忽略；

    		children   高板的浏览器只会获取到子元素中标签节点   忽略了 空白文本节点和注释节点    低版本的浏览器IE   还是会将注释节点获取；

- 6.6.5 获取最后一个节点

    lastChild 获取元素的最后一个节点，高版本的浏览器会获取到空白问题本，较低版本的IE浏览器会忽略空白文本节点和注释；
    		lastElementChild 获取的元素最后一个节点。高版本的浏览器会忽略空白文本节点和注释。而低版本的IE浏览器不兼容

- 6.6.6  克隆节点

    ele.cloneNode(true/false)
    			false -- 表示浅度克隆，只会克隆标签及属性;
    			true -- 深度克隆，会克隆标签的一切内容;

- 6.6.7  追加节点

    ele.appendChild(增加的节点)；
    		从父元素中追加节点到最后一子节点之后；

- 6.6.8  插入节点 

    ele.insertBrfore(要插入的节点，位置）;
    		从父元素中插入节点;

- 6.6.9  移除节点

    ele.removeChild(要移除的节点)


###   定时器

- setTimeout(fn,time);

   间隔多少秒自后施行匿名函数里面的代码，只执行一次！
   ​	
   	清除定时器：
   			var timeId = setTimeout();
   			clearTimeout(timerId);

- setInterval(fn,time);
   ​	
   间隔多少秒后执行匿名函数的代码，一直循环的执行！

   	清楚定时器:
   			var timeId = setInterval();
   			clearInterval(timeId);

###  获取元素的属性值

- 1.currentstyle

   ele.currentStyle.width/ele.currentStyle['width'];

   	IE支持（谷歌、火狐不支持）；

- 2.getComputedStyle

   window.getComputedStyle(ele,null).width

   	IE8不支持；

###  offset

			Dom元素中，ele.style.name 获取到的属性值只能是行前的样式，不能获取到内嵌的样式；
		而offset的方式不但可以获取到行内的样式，内嵌的样式也可以获取到！

- 1.offsetwidht/offsetheight

   ele.offsetwidth/ele.offsetheight  获取到元素的宽度和高度;

   	注意： offsetwidth/offsetheight = width/height + padding + border

- 2.offsetlLeft/offsetTop

   ele.offsetLeft/ele.offsetTop

   	获取的是自己的边框到最近定位的父级元素内边框的距离，若父级元素没有定位，则距离获取到body；

   	且获取的值只能获取到整数，碰上小数则会四舍五入

> offsetLeft与style.left的区别

		1.style.left 是以margin的左上角为准，而offsetLeft是以border左上角为准；
		2.style.left 只能获取行内样式；
		3.style.left 是可读写属性，而offsetLeft是只读属性；
		4.style.left 获取的是带有单位的字符串格式的属性值，offsetLeft获取的是number类型的属性值；

###  scroll

- 1.scrollwidth/scrollheight

   ele.scrollwidth/scrollheight = widht/height + padding + 内容超出的部分;

- 2.scrollTop/scrollLeft

   获取的是页面被卷去的部分；

   	一般都会配合window.onscroll事件一起使用！


###  client

- clientWidth/clientHeight

   clientWidth/clientHeight = width/hegiht + padding
   ​	
   	获取可视区的宽度和高度，一般用于响应式，配合window.onresize事件进行使用；

###  事件对象

	每个元素注册事件之后，在执行事件的时候，都会有一个事件对象；

	ele.onclick = function(event){ event = event || window.event }

		事件对象event,里面可以获取到很多属性;
			event.pageX/pageY;当前位置坐标到页面左上角的距离
			event.clientX/clientY;当前位置坐标到当前可视区左上角的距离
			event.type ; 检测事件的类型
			event.target;  事件的源头 ---   event.srcElement(IE8)
			event.currentTarget; 正在执行事件处理程序的当前对象
			event.which; 获取鼠标按钮触发 : 1.左键； 2.中键；  3.右键

###   注册事件的另一种形式

- addEventListener/attachEvent

   好处是可以对同一个对象注册多个相同事件名称；

   	1.ele.addEventListener('click',fn,false);//IE8不支持

   	2.ele.attachEvent('onclick',fn);//仅IE8支持

###  移除事件

		1.removeEventListener('type',fn,false);

		2.detachEvent(on+'type',fn);

		3.ele.onclick = null;

###  事件冒泡

		当一个元素的事件被触发，同样的事件会在当前对象的所有的祖先元素中一次的被触发，
	这种现象叫做事件的冒泡；
		
		好处：事件委托；
	
		清除冒泡阻止事件冒泡：event.stoppropagation;//IE8不支持
					event.cancleBubble = true;


		在js中阻止a标签的默认跳转：
			event.preventDefault();//IE8不支持
			event.returnValue = flase;

###  事件捕获

		与事件冒泡相反，从祖先元素开始，知道目标触发；

###  事件的三个阶段

	1.捕获阶段 ---> 2.目标阶段 ---> 3.冒泡阶段

###  正则表达式

	1.正则的声明
	var reg = new RegExp();
	var ret = /定义的规则/；
	
	2.正则的匹配
		text()
			语法：reg.text(obj)
			匹配字符串中是否存在指定的正则表达式，返回布尔值；
		
		exec()
			语法：reg.exec(obj)
			匹配字符串，执行成功返回相关信息的数组，如果失败返回null;
	
	3.常用的一些正则的规则
		\d  digit   数字
		\D			非数字字符
		\s	space	不可见字符	
		\S			可见字符
		\w	word    大小写字母熟悉或_
		\W			与\w相反
	
	4.自定义正则规则
		|     		 表示或
		()  		 提升优先级
		[]  		 表示匹配[]中任意的字符
		[^ ]		 表示取反，出[]内字符外的字符
		[a-z] 		 -表示区间
	
	5.边界
		/^ .. /		表示以什么开头；
		/ .. $/ 	表示以什么结尾；
	
	6.量词
		*	重复0次或多次   x>=0;
		+   重复1次或多次   x>=1;
		?   重复0测或1次    x = (0||1);
		{n}  表示前面的字符出现{n}次；
		/^..$/    表示严格匹配；   

##  BOM

	BOM--浏览器对象模型；
	- window对象是javascript中的顶级对象
	- 所有定义在全局作用域中的变量、函数都会变成window对象的属性和方法
	- window对象的属性和方法在调用时可以省略window

---
	- window.open(url,target,param) // target（窗口打开的位置）,param(窗口的属性，宽高等)；有返回值
	- window.close()

###	  location

- window.location

  - location相当于浏览器的地址栏 // 可以将url解析成独立的代码片段
  - window.location.href = 'http//www.baidu.com'
  - window.reload(true/false) // false:从本地缓存重新加载 ； true:从服务器重新加载数据

    ###navigator

- window.navigator

  可以获取客户端的一些信息

  - window.navigator.userAgent 获取用户电脑的版本信息
  - window.navigator.platform 

    ###history
    history对象保存着用户上网的历史记录，从窗口被打开的那一刻算起.

- history.go(-1) // 后退一页
- history.go(1) // 前进一页
- history.go(2) // 前进两页
- window.history.back() // 后退
- window.history.forward() // 前进


# jQuery

		JavaScript是一门编程语言，jquery是用JavaScript实现的一个JavaScript库，目的是简化我们的开发

		jQuery各版本的区别是：
			1.x 版本支持IE6，7，8；
			2.x 既以上不在支持IE6,7,8

##  jQuery的及基本使用

###  jQuery的优点

		1.jQuery的入口函数可以有多个，且没有兼容性问题。
		2.容错性好。
		3.代码简介。

###  jQuery的入口函数

		1.$(function(){});
		2.$(document).ready(function(){});

###  jQuery与javascript的入口函数执行时机

		1.javascript的入口函数要等到页面中所有资源（包括文件、图片）加载完成才开始执行;
		2.jQuery的入口函数只会等待文档书加载完成就开始执行，并不会等待图片、文件的加载；
	
		在jQuery中，$ === jQuery;也就是说，在jQuery中，$符号可以完全让jQuery代替；

###  jQuery对象与DOM对象之间的转换

		jQuery对象只能使用jQuery方法，DOM对象只能使用DOM对象方法；

		1.DOM对象转jQuery对象
			将DOM对象放在$()里面就可以将DOM对象转为jQuery对象；

###		jQuery的选择器

####  基本选择器

- ID选择器

  $("#id");

- 类选择器

  $(".class");

- 标签选择器

  $("标签名");

- 交集、并集选择器

  $("div.box")/$(".box,.header");

  ####层级选择器

- 子代选择器

  $("ul>li")

- 后代选择器

  $(".box ul li")

  ####过滤选择器

- $('li').eq(index)/$('li:qe(index)');

   表示选择索引为index的对象选择器；index的索引从0开始

- $('li:odd')

   获取到的li元素中，选择索引号为奇数的元素;

- $('li:even')

   获取到的li元素中，选择索引号为偶数的元素;

####  筛选选择器(方法)

- $('.box').children('li')

  在.box中寻找子代为li标签的元素；(类似子代选择器)

- $('.box').find('li')

  类似后代选择器

- $(".box").siblings();

  选择.box的兄弟姐妹节点，不包括自己本身；

- $(".box").parent();

  查找.box的父元素

- $(".box").next()

  获取下一个节点

- $(".box").prev()

  获取前一个节点

- $(".box").nextAll()

  获取该节点后面的所有节点

- $(".box").prevAll()

  获取该节点之前的所有节点


###  jQuery一些常用的API

	只要是动画都有回调函数和时间；

####	事件

		1.click(fn);
		2.dbtclick(fn);
		3.blur(fn);
		...

####	显示和隐藏

		1.show()
		2.hide()
		3.toggle()
			
		改变的样式是:opacity/display:none/widht/height

####	淡入淡出

		1.fadeIn()
		2.fadeOut()
		3.fadeTo()
		4.fadeToggle()
	
		改变的样式是：opacity/display

####	滑入滑出(上下拉)

		1.slideUp()
		2.slideDown()
		3.slideToggle()

####	animate()

		animate()方法可以传入对象和回调函数

####	css()

		设置样式

####	html()

		与原生的innerHTML类似；

####	clone()

		克隆节点，在jQuery中，括号里面无论是ture还是false，都表示深度克隆；true可以克隆事件，false不会克隆事件；

####	val()

		与原生的ele.value一样；

####	end()

		链式编程中向前找一个对象，只能向前一个;

####	stop()

		停止当前正在执行的动画；

####	append()/appendTo()

		在父元素最后追加子节点

####	prepend()

		与DOM中insertBefore类似；

####	before()/after()

		在同级元素前面/后面添加元素；

####   attr()/prop()

		设置标签的属性；
		prop()更多适用于表单中的disable/checked/selected属性；

####	empty()/html('')/remove()

		三个方法都能清空节点内容；remove()会将整个节点删除,包括自身；

###		类操作样式

	1.addClass()
	2.removeClass()
	3.hasClass()//判断类，返回一个boolean值
	4.toggleClass()

###		offset()

		返回一个对象，有两个属性：left/top.  获取的left/top始终是以页面或body为准，与父元素是否定位无关。
		offset()是一个可读写的属性；
	
		注意区别:offsetLeft
			ele.offsetLeft 获取的是自己的边框到最近定位的父级元素内边框的距离，若父级元素没有定位，则距离获取到body；

###		position()

		position()是一个只读属性，返回一个对象，有两个属性,left/top
		position().left；  获取自身的margin到离自己最近的定位的父元素的距离；
				//类比于原生的offsetLeft,offsetleft获取的是自己边框到最近定位的父级元素内边框的距离

###		width()/height()

		获取的是可视区的宽高；不带单位；是一个可读写的属性方法；

###		scrollTop()/scrollLeft()

		页面被卷去的距离，是可读写属性；

		注意区分：
			scroll()是个事件

###		 jQuery注册事件

- 简单事件绑定

  click();
  blur();
  mouseenter();
  mouseleave();
  dbclick();
  change();
  focus();
  keydown();

- bind方式（1.7以后的jQuery版本被On取代，不推荐使用）

   作用：给匹配到的元素直接绑定事件

   	//绑定单击事件处理程序
   	$('ele').bind('click',function(){});
   	
   	与简单事件绑定方式的优势：
   		可以同时绑定多个事件，如：$('ele').bind('click mouseleave',function(){});
   	
   	缺点：要绑定事件的元素必须存在文档中；也就是不能给动态添加的元素注册事件

- delegate方式

   特点：支持动态创建的元素添加事件;可实现事件委托；

   	//参数1		要绑定事件的元素
   	//参数2		事件类型
   	//参数3		事件处理函数
   	$('ele').delegate('p','click',function(){});
   	
   	缺点是不能个自己注册事件，但是能实现事件委托；

- on

   on注册事件几乎拥有了前面其他所有注册事件方式的优点；
   	$('ele').on(type,target,data,function(){})
   	//第一个参数		事件类型；
   	//第二个参数		执行事件的对象，也就是实现了事件委托
   	//第三个参数		传递给处理函数的数据，事件触发的时候可以通过event.data来获取使用
   	//第四个参数		事件处理函数

   ###	事件解绑

- bind/delegate

  unbind()/undelegate()方式来解绑
  无参数的时候解绑所有的事件，有参数解绑对应参数的事件

- on

  on注册事件使用off()方法来接触事件绑定
  //off()		
  	解绑匹配元素的所有事件
  //off('click')	
  	解绑对应的事件
  //off(type,'**')
  	解绑所有代理的type事件，元素本身的事件不会被解绑

  ###	事件触发器

- trigger()

   $('div').click(function(){
   		$('p').trigger('click');
   	})
   	点击div的时候触发p标签的click事件；

- triggerHandler()

   与trigger()一样，区别是triggerHandler触发对应事件目标事件的时候，不会触发其默认行为；

   ###	each()方法

   	each()是jQuery方法，调用的时候要用jQuery对象来调用
   		$ele.each(function(index,item){})；

- each()遍历数组

  $.each(arr,function(index,item){});

  > 注意与 数组 的forEach()方法进行区分；forEach(function(item,index){})//这是DOM对象中的方法

-each()遍历对象

	$.each(obj,function(index,item){});

###		多库共存

		当一个文件中引入多个jQuery文件，那么$符号的使用只会引用最后一个jQuery包里面的，不能使用前面jQuery包里面的$符号；
		这样就使得$符号的冲突；

- 解除冲突

  1.   $.noConflict()；
    将后面的版本的$让出来，使用其他符号代替；
    var JD = $.noConflict()//将$符号让出来，有一个返回之后，使用这个返回复制给新的变量；
    那么这个变量可以代替$进行使用；

    2.使用自执行函数划分作用域
    (function($){ 继续使用$符号和方法给})($)

> $.fn.jQuery可以检测当前的版本，也就是利用该方法检测当前$是属于哪个库的；

##  jquery插件

###   jquery-lazyload
1. 下载包引入

<script src="jquery.lazyload.js?v=1.9.1"></script>

2. html中img路径属性设置

<img data-src="真实的图片路径" />

3. 图片对象引用lazyload方法

$().lazyload()

lazyload方法里面的对象方法:

		$().lazyload({
			placeholder : "img/grey.gif", //用图片提前占位
	    		// placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
			effect: "fadeIn", // 载入使用何种效果
    			// effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
			threshold: 200, // 提前开始加载
    			// threshold,值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉
			event: 'click',  // 事件触发时才加载
    			// event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载,后两个值未测试…
			container: $("#container"),  // 对某容器中的图片实现效果
    			// container,值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片
			failurelimit : 10 // 图片排序混乱时
     			// failurelimit,值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题.
		})


#   3.H5C3

## H5

		低版本的浏览器对HTML5新增的标签是不认识的,默认是不存在;为使得低版本的浏览器对新增的标签兼容，有两种方法：
		1.	使用动态创建元素的方法创建新增的标签，但是创建出来的元素默认是个行内元素；
		2.	使用兼容包，引入插件解决兼容问题；
	
		<!--[if lte ie8]>
			document.creatElement();
		<![end if]-->

###  新增的一些更具语义化的标签

- header/nav/section/aside/article/footer

###  智能表单

	<input type='text'/>

- userName
- passWord
- email （邮件）
- tel （电话号码）
- url 
- number
- search
- range
- color
- time
- date
- datetime
- moth
- week 

###  新增表单标签

-  `<fieldset></fieldset>`
-  `<datalist></datalist>`

   <input type='text' list='datalist'/>
   		<datalist id='datalist'>
   			<option>宝马</option>
   		</datalist>

###  新增的表单属性

- required

   表单中必填的的属性

- placeholder

   占位符；

- Autofocus

   自动获取焦点;

- AutoCompelate = 'on/off'

   提示之前输入过的内容

- pattern
   ​	
   规定用于验证输入字段的模式；模式指的是正则表达式；
- multiple

   multiple 属性规定输入字段可选择多个值。

   ###	新增的表单事件

- oninvalid

   当用户输入内容无效的时候触发的事件；

   	oninvalid = function(){ this.setCustomValidity('输入有误！')}；

- oninput

   当用户输入内容时候触发的事件,文本框事件

- onchange

  ###	新增的API

- document.querySelector()

   只能获取一个元素，不论对象是否是多个，也只会获取第一个元素；

- document.querySelectorAll()

   类似document.getElementsByTagName();获取到的是一个维数组；

   ###	新媒体标签

   - audio/video
     autoplay/controls/play()/pause()/pasued

     ###操作类样式

- ele.classList.add() -- 添加类

   JQ: $().addClass();
   	js: ele.className = '' / ele.setAttribute(class,'');

- ele.classList.remove() -- 移除类

   JQ： $().removeClass();
   	js: ele.className = ''; ele.removeAttribute(class);

- ele.classList.contains() -- 判断类，返回一个布尔值

   JQ： $().hasClass();// 返回一个布尔值

- ele.classList.toggle() -- 切换类

   JQ: $().toggleClass()
   ​	
   ###	自定义属性

   	<div data-url = 'aaa'></div>
   		div.dataset['url'] = aaa;
   	
   	设置属性： data-name = ''
   	获取属性： dataset['name']

##  css3

###   选择器

- 属性选择器

   li[class='box'] -- 选择所有li拥有class为box的标签;
   	ele[attr*=val] -- 属性值里包含val字符并且在“任意”位置;
   	ele[attr^=val] -- 属性值里包含val字符并且在“开始”位置;
   	ele[attr$=val] -- 属性值里包含val字符并且在“结束”位置;

- 伪类选择器

   E:first-child；
   	E:last-child；
   	E:nth-child(n)；
   	E:nth-last-child(n)；

- 伪元素选择器

   :first-letter  //  获取元素下的第一个字符
   	:first-line  //  获取元素下的第一行
   	:selection  //  文本被选择的状态

- 其他选择器

   ele:checed{}
   	ele:selected{}
   	ele:disabled{}

###   阴影

- 文本阴影

   text-shadow:水平配置偏移  垂直位置偏移  模糊距离  阴影颜色;

- 盒子阴影

   box-shadow:水平位置偏移  垂直位置偏移  模糊距离  阴影大小  阴影颜色  内/外阴影

###   边框

- border-radius : 水平弯曲/垂直弯曲

   边框可以分开设置每个边的弯曲程度;四个参数的方向分别为：上左 上右  下右  下左；

- border-image : url()  border-image-slice  border-image-repeat;
  - border-image-soure:url();
  - border-image-slice:10; // 将图片从四边裁切下对应数值的宽度的大小,然后将裁切下的边框图片在border宽度范围内显示;注意数值没有单位！
  - border-image-repeat //  设置背景平铺；

  ###  背景

- background:url(),url(),..;

    - background-size //  背景图片的大小 contain/cover

    - background-origin // 背景原点，背景显示的地方 content-box/border-box/padding-box

    - background-clip // 背景裁切 content-box/border-box/padding-box

    ###  渐变（颜色的渐变）

- 线性渐变

   background: linear-gradient(to ,color-begin position,color-end position);
   			注：to 方向;

- 径向渐变

   background: radial-gradient(radial at pisition,color-begin,color-end);
   			注：参数（半径，起始位置，开始颜色，结束颜色）;


###	  过渡 transition

		transition:过渡的属性  过渡的时间  延迟多少时间;

> 过渡完成的事件：
> transitionend; 一般当做节流阀用；
>  ele.addEventListener('transitionend',function(){});

###	  2D转换 transform

- scale 缩放比例

   transform:scale() // 参数可放两个或一个;

- translate 移动

   transform:translateX()/translateY()/translateZ();

- rotate 旋转

   transform:rotate( xxx deg);
   	transform-origin: // 旋转中心点；

- skew 倾斜

   transform:skew() // 两个参数分别为水平方向和垂直方向;

###  3D 转换

- perspective (透视)

   近大远小的效果,一般给父元素设置；

- transform-style: preserve-3d （设置3D效果一定要设置该属性）

   让盒子有一个3D的效果，一般给父元素设置;

- backface-visibility: visible/hidden (设置背面不可见)

###  animation 动画

		设置动画的步骤:
			 1.定义动画
				 @keyframes name {
	                from{}
	                to{}
	            }
			 2.谁需要进行动画函数  给谁添加animation
		
		动画的调用:
		aniamtion: name duration dalay animation-iteration-count aniamtion-play-state

- animation-name 动画名称

- animation-duration 定义动画完成一个周期所需要的时间，以秒或毫秒计 

- animation-timing-function 规定动画的速度曲线
  - linear 动画从头到尾的速度是相同的
  - ease 默认

- animation-delay 属性定义动画何时开始

- animation-iteration-count 属性定义动画的播放次数
  - infinite 规定动画应该无限次播放。

- animation-direction 属性定义是否应该轮流反向播放动画
  - alternate 动画应该轮流反向播放。

- animation-fill-mode 属性规定动画在播放之前或之后，其动画效果是否可见
  - forwards 当动画完成后，保持最后一个属性值;
  - backwards 
  - both

###  弹性布局
> display:flex;

当给一个盒子设置了display：flex之后，这个盒子就有了**主轴 **和**侧轴** 的概念。 主轴：Flex容器的主轴主要用来配置Flex项目，默认是水平方向 侧轴：与主轴垂直的轴称作侧轴，默认是垂直方向的 方向：默认**主轴从左向右** ，默认**侧轴从上到下**

![](display-flex.png)

- flex-direction (调整主侧轴)

   flex-direction 可以调整主侧轴方向
   -	row：主轴方向为水平向右
     -column：主轴方向为竖直向下
     -row-reverse:主轴方向为水平向左
     -column-reverse:主轴方向是竖直向上。

###  全屏事件

requestFullScreen();//有很强的兼容性，使用时要加前缀兼容；

如：
video.webkitRequestFullScreen(); 

###   拖拽事件（文件上传）

####  读取文件

	 		input.addEventListener("change",function(){
				// 1. 获取文件，文件存放于files属性中,是个伪数组，使用下标获取文件
				var file = this.files[0]
				// 2. 创建一个文件读取对象，文件读取工具
				var fr = new FileReader();
				// 3. 将文件进行读取
				fr.readAsDataURL(file);
				// 4. 文件读取文件之后的操作
				fr.onload = function(){
					// 处理文件的代码
					fr.result//读取后返回的结果
				}
			});

####   拖拽

- 事件

   (自身事件)
   - dragstart //  拖拽开始时触发的事件
   - dragend //  拖拽结束触发
   - drag // 只要在拖拽状态就会触发

     (目标事件)
   - dragover // 拖拽元素在目标元素上停留的状态
   - drop // 给目标元素添加拖拽的元素事件

- 状态

   draggable = true;使元素具有拖拽效果；

####   拖拽并读取文件
		//1.阻止事件默认行为
		box.addEventListener("dragover",function(e){
			e.preventDefault();
		});
		//2.文件读取
		box.addEventListener("drop",function(e){
			//2.1 阻止事件默认
			e.preventDefault();
			//2.2 获取文件，鼠标拽入的时候  通过鼠标目标对象获取事件  dataTransfer对象数据转让
			var file = e.dataTransfer.files[0];
			//2.3 创建一个文件读取对象
			var fr = new FileReader();
			//2.4 读取文件
			fr.readAsDataURL(file);
			//2.5 文件读取完毕之后的操作
			fr.onload = function(){
				fr.result//读取完毕之后返回的结果数据;
			}
		})

###  储存

- cookie

   （1）设置保存cookie
   	//储存
   	document.cookie = value;
   	//获取
   	var cookie = document.cookie;
   	
   	以上都是基于会话机制的，也就是关闭浏览器就丢失；
   	（2）方法二
   	// 设置cookie并设置存储时间
   	document.cookie = "userAge=18;expires="+new Date()

> 特点： 默认储存7天，储存大小只有4K；

- sessionstorage

   //储存
   	sessionstorage.setItem(key,value);
   	//获取
   	sessionstorage.getItem(key);
   	//删除	
   	sessionstorage.removeItem(key);
> 特点：1.不能再多个窗口下共享数据（浏览器关闭就会被删除）；2.储存大小为5M；

- localstorage

   //储存
   	localstorage.setItem(key,value);
   	//获取
   	localstorage.getItem(key);
   	//删除
   	localstorage.removeItem(key);
> 特点：1.永久生效，除非手动删除；2.可以多个窗口共享；3.储存大小为20M；

- jquery.cookie

jquery.cookie插件可以更加方便有效的对想要储存的数据进行储存；

		基本用法：$.cookie(key,value);
		设置有效期的cookie: $.cookie(key,value,{expires:value})//value代表需要储存的天数；
	
		移除cookie:  $.removeCookie(key);

####  session技术
session技术又称`会话机制`，在网络传输中，由于http没有状态保存，在一些界面需要用户登录才能显示的界面就不能实现正常展示，而session就是为了解决这个用户登录状态不能识别的问题而产生；

举个例子:用户登录QQ空间，需要对自己的日志进行编辑，那么服务器怎么识别用户已经登录了呢?切换页面之后该如何保存这个登录状态呢?

session的会话机制是一种服务端储存技术，会话机制需要配合客户端的cookie进行使用。他实现的基本原理如下:

1. 当用户进行登录之后，在`服务器`端会开辟一个内存，且通过session进行保存用户的登录状态以及用户的信息，同时，生成一个cookie对象，储存了sessionId通过响应头传送与浏览器服务器之间；
2. 当客户端登录之后再次请求服务器的时候，`服务器判断浏览器传过来的请求头中是否有对应的sessionId`，如果有表示用户正处在登录的状态，如果没有，则表示已退出登录；

b
###   网络状态

> 在移动端，经常需要检测设置是在线还是离线，HTML5定义了一个navigator.onLine属性，这个属性用于检测设备是否联网。
> navigator.onLine在不同浏览器中有细微的差别。

####  网络状态

		navigator.onLine返回用户当前的网络状况，是一个布尔值
		1.如果浏览器连不上网（包括局域网）,就是离线状态，返回false
		2.在线状态返回true;
####  监听网络变化事件
- offline

   window.addEventListener("offline",function(){
   		//网络断开时调用的事件
   	});
- online

   window.addEventListener('online',function(){
   		//网络链接是被调用的代码	
   	})

###   地理位置

> 在HTML规范中，增加了获取用户地理信息的API,这样使得我们可以基于用户位置开发互联网应用，即基于位置服务
> LBS（Location Base Service）

####   基本用法
		//获取当前的地理位置
		navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
		//实时获取位置
		navigator.geolocation.watchPostion(successCallback,errorCallback);

实例：

		navigator.geolocation.getCurrentPosition(function(position){
				position.coords.latitude //纬度
				position.coords.longitude // 经度
				position.coords.accuracy // 经度
				position.coords.altitude // 海拔高度
			},function(){
				定位失败后执行的代码
			});

## web开发

		视口属性：
		<meta name="viewport" content="width = device-width,user-scaleable = no,
		initial-scale = 1.0,maximum-scale=1.0,minimum-scale=1.0">

###   移动端中的图片问题
由于现在的移动设备发展迅猛，手机的屏幕也被做得精密，这样屏幕能够比正常的屏幕更加精密的将图片放大看2~3倍，这就会造成在正常屏幕中正常显示的图片在另外一台设备上会失真，这样的屏幕也叫做视网膜屏幕；

在移动端开发过程中，为了解决在视网膜屏幕下放大图片失真的问题，在开发过程使用的图片一般都会比正常屏幕大2倍~，在图片嵌入背景中的时候，通过background-size控制背景图的大小；虽然这么做可以解决了视网膜屏幕的失真问题，但是，在普通屏幕下仍然是不需要2倍的大图，如果都设置了2倍的大图，使用普通屏幕的用户就会浪费了流量；

为提升更高的用户体验，在使用背景图的时候使用可以动态设置图片的来源，以设置背景的大小；
1. 通过获取屏幕的像素比动态改变图片的路径
   <script>
   		window.devicePixelRatio//获取设备的像素并的方法
   	</script>

2. 通过img标签新属性srcset设置不同的图片大小和路径

   srcset="路径1 1x，路径2 2x "

###  移动端的点击延迟问题

早期的移动站基本都是桌面站按照比例缩放到桌面站显示的，当缩放的站点缩放到移动站之后，在移动站中双击可以对其缩放；

但是如果一个元素是一个`a`连接模块的图片，当用户想要放大看图片的时候就需要对齐双击，为了让浏览器准确做出用户的指令，即用户是要点击跳转还是双击放大，就有了一个延迟`300毫秒`的问题，如果用户在300毫秒内进行双击则认为是缩放，反之认为是点击链接;

那么在如今的移动端，因为设置了视口属性，浏览器会将页面解析成移动端的网页，元素就会按照100%比例显示，双击click事件放大就不再存在，所以解决移动端双击延迟问题就是需要引入视口属性，在引入视口属性之后，虽然还是会有`50毫秒`的延迟，但这可以忽略不计~

###  zepto.js (类似jquery)

		Zepto是一个轻量级的针对现代高级浏览器的JavaScript库， 它与jquery有着类似的api。 如果你会用jquery，那么你也会用zepto。

![](../zepto.png)

		需要什么功能操作就导入对应的包名称；与PC端相比，zepto增加了touch模块，可用于移动端触摸点击；

###  bootstrap (框架)
Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目；

####   栅格系统
- 基本布局

   <div class="container-fluid">
    		 <div class="row">
   			 	<div class="col-md-1">.col-md-1</div>
    			<div class="col-md-1">.col-md-1</div>
    		 </div>
   	</div>

- 布局选项

![](../bootstrap.png)

###  Swiper (插件)

Swiper是纯javascript打造的滑动特效插件，面向手机、平板电脑等移动终端;
Swiper能实现触屏焦点图、触屏Tab切换、触屏多图切换等常用效果。
Swiper开源、免费、稳定、使用简单、功能强大，是架构移动终端网站的重要选择！

使用步骤
1.加载插件，需要用到的文件有swiper.min.js和swiper.min.css文件；

2.HTML内容：
```
<div class="swiper-container">
	<div class="swiper-wrapper">
	<div class="swiper-slide">Slide 1</div>
	<div class="swiper-slide">Slide 2</div>
	<div class="swiper-slide">Slide 3</div>
</div>

<!-- 如果需要分页器 -->
<div class="swiper-pagination"></div>
		​    
<!-- 如果需要导航按钮 -->
<div class="swiper-button-prev"></div>
<div class="swiper-button-next"></div>
		​    
<!-- 如果需要滚动条 -->
<div class="swiper-scrollbar"></div>
</div>
```
3.script 内容
		var mySwiper = new Swiper ('.swiper-container', {
				direction: 'vertical',//设置滚屏的方向
				loop: true,//设置可否循环滚动
							
				// 如果需要分页器
				pagination: '.swiper-pagination',
							
				// 如果需要前进后退按钮
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
							
				// 如果需要滚动条
				scrollbar: '.swiper-scrollbar',
		})        

- tap高亮效果

   -webkit-tap-highlight-color:

###   rem

		使用rem的步骤：
		1.将设计图等分为N等分，计算1rem的单位
		2.设置html的font-size
			<script>
				//页面打开的时候设置html的字体大小,html的字体大小影响到rem的数值
				document.querySeletor('html').style.fontSize = window.screen.widht/N + ‘px’;
				window.onresize = function(){
				document.querySeletor('html').style.fontSize = window.screen.widht/N + ‘px’;
				}
			</script>

###   sass基本使用

- @import 导入其他scss文件

   @import 'normalize.scss';

- 变量的定义

   $JDR:rgb(201, 21, 35);

   	调用：background-color:$JDR;

- 函数的定义

   $function size($size){
   		$return ($size/32)*1rem;
   	}
   	
   	调用：font-size:size(22px);

- 混入定义
   ​	
   混入定义类似js中的函数，可以代用一次输出多行代码；
   ​	
   	定义：
   	@mixin measure($width,$height){
   		width:size($width);
   		height:size($height);
   	}
   	
   	调用：
   	@include measure(300,200);


#  Ajax

## php基础
php是服务端语言，与javascript语法高度类似
###  入门
php文件以php结尾，所有的代码都包含在<?php  代码段  ?>

		<?php
			echo 'hello world!' // echo 是输出内容的方式
		?>
###  变量
1、变量以$开头 字母/数字/下划线 不能以数字开头

2、区分大小写

###  内容输出
- echo:  输出简单的数据类型，如字符串、数值
- var_dump();    输出详细信息，如对象，数组；

###  拼接字符串
在php中，使用'.'号来链接字符串，类似javascrip中的'+'用于字符串的拼接；

		//php
			echo '我是：'.$name.'年龄：'.$sex;
		//javascript
			alert('我是：'+ name +'年龄：'+sex;)

###   数组
- 普通类型数组

   // php中的普通类型的数组定义；
   		$student = array('rose','jack','roman','piter');
   	//调用数组跟javascript类似，通过数组的下标来调用
   		echo $student[1] // jack

- 关系型数组(类似javascript的对象)

> 在php中,数组的长度的方法是使用count()方法;注意与javascript中数组长度lenght区分
> count($arr);//数组名称放于方法内

php中的关系型数组定义,是键值对关系，键值对使用=>来进行赋值

		$person = array("name"=>"sandy","age"=>"22");
			echo $person['name'] // sandy

###   声明编码

		<?php
			header('content-type:text/html;charset=utf-8');
			//声明编码，告诉服务器文件的编码类型，类似于html文件中的 <meta charset="UTF-8">
		?>


##   AJAX请求
###   数据提交方式
####  get

get方式提交数据，一般数据在URL中进行拼接，数据以键值对的关系进行上传;用户可以看见；

get请求传送的数据是 `queryString`；
​			
> get方式提交数据，在服务器中，以php语言为例，获取提交数据的方式是：$_GET
> $_GET获取的是一个关系型数组，可以通过属性对应的属性值；
####  post

post方式提交数据，用户看不到数据，暗文；

post请求发送的数据是 `request payload`;服务器一般拿不到，所以需要设置请求头，将post请求发送的request payload数据转成formData的数据，服务器才能拿到数据！

> post方式提交数据，类似隔天，在服务器中，php获取的方式是：$_GET
####  form

form提交数据都是同步提交；

form表单提交数据的方式，必须填写结果属性：

form表单提交数据，发送的数据是`formData`数据；

1. action= "请求地址/php路径";
2. method = "get/post";
3. input标签中，要设置name属性

   <form action="" method="get/post">
   		<input type='text' name='username'/>
   		<input type='submit' value='提交'>
   	</form>

> 使用jquery操纵表单，serialize()方法可以将拥有name属性的表单元素拼接成字符串(格式化表单);

####  form表单文件上传
表单中上传文件 必须使用**POST**上传，且要添加一个规定在将表单数据发送到服务器之前如何对其进行编码 **enctype='multipart/form-data'**

		<form action='' method='post'  entype='multipart/form-data'>
			<input type='file' name='img'/>
			<input type='submit' value='提交'>
		</form>

> 在服务器中，php获取上传的文件通过 $_FILES 获取,类似$_GET/$_POST,获取的结果是个关系型数组；
> 通过 move_uploaded_file(),方法对获取的文件进行保存处理；

####  ajax请求

- 请求报文
  - 请求的方法（请求行）
  - 浏览器的信息（请求头）
  - 发送的数据（请求报文）

- 相应报文
  - 请求是否成功（状态行）
  - 服务器的信息（相应头）
  - 主要的内容（相应主体）

###   ajax请求
ajax请求，通过异步对象进行请求，主要的步骤：

1. 声明一个异步请求对象

   var xhr = new XMLHttpRequest()

2. 声明请求的方式

   xhr.open('get/posh',服务器地址,是否是异步请求);

是否异步请求，就是设置async是true还是false;

3. 设置请求头

   xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

4. 设置请求主体

   xhr.send(null);

5. 回调函数

   xhr.onload = function(){ 
   		xhr.responseText
   		}


####  get请求

		1.创建对象
			var xhr = new XMLHttpRequest();
		2.设置请求方式，请求url
		（get方式请求数据，数据以键值对的关系拼接在url地址后面）
			xhr.open("get","url"+data);
		3.设置请求头		
		//get请求，请求头可以省略
			xhr.setResponHeader();
		4.回调函数，相应报文回来后要指向的代码
			xhr.onload = function(){
				xhr.responseText;
			}		
		5.请求主体
			xhr.send(null);

####   post请求

		1.创建对象
			var xhr = new XMLRequest();
		2.设置请求方式，请求url
			xhr.open("post","url",true);
		3.设置请求头
			xhr.setRequestHeader("conten-type","application/x-www-form-urlencoded");
		4.回调函数，相应报文回来后要执行的代码
			xhr.onload = function(){
				xhr.responseText;
			}
		5.设置相应主体
			xhr.send(data);//post请求需要发送的数据放在send()里面，以键值对的关系；

####   onload与onreadystatechange
AJAX请求中的回调函数，有两个写法，onload/onreadeystatechage,onload在较低版本的浏览器中可能存在兼容性的问题，而onreadystatechange在所有浏览器中都支持，所以对AJAX封装的时候使用onreadystatechange;

onreadystatechange--状态改变触发的事件，

		AJAX请求的状态(readyStage)：
		0 --> UNSEND(未打开) open()方法未被调用；
		1 --> OPENED(未发送) send()方法未被调用;
		2 --> HEADERS_RECEIVED (已获取响应头) send()方法已经被调用, 响应头和响应状态已经返回;
		3 --> LOADING (正在下载响应体)  响应体下载中; responseText中已经获取了部分数据;
		4 --> DONE (请求完成) 整个请求过程已经完毕;
	
		页面请求的状态(status):
		200 --> 页面请求成功；
		404 --> 页面不存在发生错误;
	
		因为使用onreadystatechange会触发多个状态下的事件，所以在使用的时候需要进行判断
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 && xhr.status == 200){ xhr.responseText; }
			}

###  传输数据类型
####  XML
xml文件数据，类似html文件，是一个双标签文件，标签之间放数据；xx.xml;

		XML传输数据的准备：
		- 服务器php中
			<?php
				//1.告诉服务器返回的数据类型
				header("content-type:text/xml;charset=utf-8");
				//2.读取文件并返回
				$data = file_get_contents('文件路径文件名');
				//3.将数据返回
				echo $data;
			?>
	
		- 客户端html文件中
			html文件中获取服务器返回的xml数据类型并解析
			xhr.onload = function(){
				//xml数据文件，使用xhr.responseXML获取
				var result = xhr.responseXML//获取到的是xml文件的document对象，类似html文件的document对象；
				//读取xml文件中的数据
				result.querySelector('').innerHTML;
				//result是xml文件的ducment对象，所以类似html文件通过选择器获取标签间的数据；
			}

####  JSON
json是一种特殊格式的字符串，用于传输数据;

		json传输数据的准备
		- 服务器中php文件中
		<?php
			//1.告诉服务器传输的是什么格式的数据文件
			header("content-type:application/json;charset=uft-8");
			//2.解析文件
			$data = file_get_contents('文件路径/文件名');
			//3.返回数据
			echo $data;
		?>	
	
		- 客户端html文件中
			获取服务器传回的数据并解析
			xhr.onload=function(){
				var result = xhr.responseText;
				//获取到的json数据仍是一个字符串格式的数据，需要对json字符串进行转义
				var data = JSON.parse(result);
				//在js中，对象转字符串的方式：JSON.stringify();
				//字符串转对象的方法:JSON.parse();
			}

###   JsonP接口
浏览器安全策略：不同源的页面之间默认是不允许发送请求的；
什么是同源呢？
		协议名，地址，端口都一致的地址就是同源；

那么不同源真的不可以访问吗？答案是可以的，只要在访问的服务器中设置一个允许访问的设置即可！这个技术称为CORS技术；

		<?php
			header("Access-contorl-Allow-Origin:*");
			//设置允许不同源页面访问
		?>

**对于JsonP接口的请求方式**:

- Ajax

  对于JsonP接口数据请求，在Ajax请求中需要设置dataType，告诉浏览请求的接口

	  	$.ajax({
	  		url:'',
	  		data:data,
	  		dataType:'jsonp',//让jquery内部自动创建一个script标签并设置src属性；
	  		success:function(){}
	  	});

- Dom元素的src属性请求

  img或其他标签元素，如果有src属性，通过src属性指定不同源素材，是可以获取到不同源的数据，且实质是发送一个get请求；JsonP就是利用元素的src属性，来支持跨域访问实现数据获取的！


		//通过Dom元素的src属性向不同源的服务器请求数据
		<script src="请求的不同源的服务器地址"></script>
		//实质是发送一个get请求，所以，数据可以在地址栏中进行拼接
		<script src="https//:xxx.com/?name=jaks&age=16">

	  	//在服务器中通过echo返回要处理的数据程序
	  	<script>
	  		function Dodata(data){console.log(data)};//定义要处理数据的函数
	  	</script>
	  	<script src="https//:xxx.com/?name=jaks&age=16&callback=Dodata">//通过callback拼接，向服务器发送处理返回数据的函数代码；


#  面向对象

- 面向对象的特征

		   1.封装性
		   	封装性就是把变量和函数集中在一起，放置到某个对象身上；
		   2.继承性
		   	一个对象可以使用另外一个对象的属性和方法，就是继承性，可以达到节省内存，共享属性方法；
		   3.多态
		   	任何时候都可改变对象的属性名；就是多态
##   构造函数
配置new关键字创建实例的函数就是构造函数，构造函数的定义与普通函数的第一方法没有区别，区别的是在使用的方式上;

		function dog(){ console.log('汪汪汪') };
			//普通函数的使用
				dog();
			//构造函数的使用	
				var taiDi = new dog();

###   返回值

构造函数没有返回值，new构造函数得到新实例；如果有return,return基本数据类型，最终还是得到新实例；return引用数据类型，最终会覆盖默认的新实例，得到引用类型；

###   类与实例的概念

**js中构造函数可看成类；由构造函数创建的对象就是实例；**

####  类成员与实例成员
成员就是对象的属性和方法；

类成员（静态成员）：就是构造函数（类）的属性和方法；类成员只能类使用，实例不能使用，原型中的方法是供实例使用，所以也数据实例成员；

实例成员：实例的属性和方法，供实例使用的属性和方法；

####  静态成员与实例成员

		1.静态成员表示的是静态方法和静态属性的概念，所谓的静态，就是由构造函数所提供的；
		2.实例成员，表示的是实例方法和实例属性，所谓的实例就是由构造函数所创建的对象；

###  对象属性

- 对象属性的查找规则

   1.先找自身；
   	2.自身没有去原型对象上找；
   	3.原型没有，就去原型的原型上找，知道找不到返回undefined

## 原型

原型是一个对象，是一个供其他对象共享其属性与方法的对象，作用是让其他对象共享其属性方法，任何对象可以成为原型，`达到节省内存的目的`；
函数都有一个默认的prototype属性，可以给他赋任何对象，构造函数的实例默认可以访问prototype里面的东西

原型的作用：节省内存；
###  prototype 和 _proto_

每个函数都有prototype属性，每个对象都有__proto__属性；
函数比较特殊，既是函数又是对象，所以prototype与__proto__都有；

prototype是从构造函数的角度获取原型的;
_proto_是从实例对象的角度获取原型的；

prototype/__proto__/construtor 之间的关系;

		function Person(){}//一个匿名函数，构造函数
		var fn = new Person() //构造函数的实例化
		那么：
			fn._proto_ === Person.prototype；
			fn.constructor.prototype === Person.prototype;
			fn.constructor === Person;
			(通过构造函数的prototype获取原型全等于通过实例化函数的_proto_获取原型)

###  ECMA原型链规律

1.实例是什么类型，就先继承什么的prototype;
2.构造函数的默认prototype对象自己,继承Object.prototype;

> Math/Json对象的方法都定义在自身，不定义在prototype上;

###  hasOwnProperty()方法

		hasOwnPrototype()方法可以检测一个属性是存在于实例中还是存在于原型;如果存在于自身，则会返回turn,如果存在于原型中,则会返回false;

		语法： Obj.hasOwnProperty('属性名');// 返回一个boolean值；

		var obj = {this.name:'sandy',this.age:'22'};
		obj.hasOwnProperty('name')//true;
		obj.hasOwnProperty('toString')//false;

###  in 运算符

		in 运算符；作用：检测对象是否可以使用某属性；
		语法： 属性名 in obj;   //返回一个boolean值；
	
		注意：与hasOwnPrototype()方法的区别，in 是检测对象是否可以使用某属性，无论该属性存在于原型还是存在于自身中;
			 hasOwnProperty()只能检测自身时候含有某属性；

###  instanceof

		作用：判断对象的原型链中是否含有某构造函数的prototype;//返回的也是一个boolean值；

		注意： instanceof 与in 运算符 hasOwnProperty() 的区别是，instanceof 判断的是对象是否含有构造函数的prototype，判断对象是是否继承了原型链prototype;

		in 运算符是判断对象是否可以使用某属性，判断的是属性,只要有该属性存在，无论存在于构造函数中还是存在于原型中，返回的结果都是ture; 
		hasOwnProperty也是判断的是对象是否含有某属性,判断的对象是属性，如果该属性存在于prototype中，hasOwnProperty判断为false;

### extend()

		通过extend方法可以给对象添加另一个对象的原型方法；

		例： function Animal(){}; Animal.prototype.eat = function(){console.log('吃')};
			function Person(){}//Person与Animal都有一些公共的方法属性，那么可以将Animal的方法通过拷贝的
		方式拷贝给Person;
	
		extend的作用就是可以给一个对象方法添加另一个对象方法或属性;//混入继承
		语法:$.extend(Person,Animal.property...);//extend是jQuery封装的方法，使用的时候需要引入jQuery包；
	
		extend()方法中，如果只有一个参数，就是jQuery插件的扩展: $.fn.extend({name:function(){});
					   如果传多个参数，就是将后面对象的属性方法copy给第一个对象；

###		Function()与eval()

- Function():

		语法：new Function(形参1，形参2，... ，代码体);
		代码体是字符串。

- eval()

		  语法：eval(代码体)
		  代码体是字符串。

> Function()与eval()的共同点都是执行的代码是字符串

##  作用域

作用域：变量的有效范围

###   全局变量

在代码的任意地方都可访问的变量，即它的作用范围属于全局，在函数外声明；

生命周期：从定义开始，到页面被卸载结束

###   局部变量

概念：在定义该变量的局部地方才可使用的变量，即它的作用范围属于局部，在函数内部声明的变量；

生命周期：从函数执行，然后变量定义开始，通常到函数执行完毕后结束；生命周期特殊情况：如果有闭包函数引用了某局部变量，那么这个局部变量的生命周期就和闭包进行了绑定。

###	  作用域链
函数运行时可以访问的所有作用域，称为作用域链

###   闭包
概念：引用了外部局部变量的函数就是闭包；

特点：1.会延长所引用局部变量的生命周期；2.可以让外界间接访问原本访问不到的局部变量；

###  call()/apply()

call与apply方法都可以改变this的指向;使用call()/apply()方法改变this的指向前提是fn方法自身有this指向!

		1. call()
			语法：fn.call(new this,参数1,参数2...)
			参数是给函数调用所需要的参数;
			fn为需要改变this的函数
	
		2. apply()
			语法：fn.apply(new this,[参数1,参数2..])
			参数是传给fn函数的实参;
			fn是需要改变this的函数
call()与apply()除了在传参的形式上有区别,其用法和作用都是一样的;

> 应用场景：(1)借用数组的方法操作伪数组: var obj={},[].push.call(obj,num1,num2..);
> (2)Object.prototype.toString.call(opt)//判断对象的类型

> 谁的方法借用给谁...   [].push.call()

###  函数的几种调用方式
1. 函数调用模式 ==> fn() // this指向window;
2. 方法调用模式（属性调用）==> 对象.方法名()/对象[方法名] // this指向最后调用的对象，即谁调用this指向谁;
3. 构造函数调用模式； ==> this指向构造新实例;

##   数组ES5新增的方法

###   forEach
		forEach方法用于遍历数组；arr.forEach(function(value,index,arr){});

		forEach方法没有返回值，返回的是undefined;在回调函数中的第三个参数，可以用于存放function内部this的新指向对象;

		var arr = [];
		arr.forEach(function(value,index){console.log(this)}); // window;
		arr.forEach(function(value,index,arr){console.log(this)}); // Array;

forEach()没有返回值；

###   map
		map方法也用于遍历数组;arr.map(function(value,index,arr){});

		map()与forEach()都用于遍历数组，区别是：forEach()没有返回值，map()方法有返回值，放回的值会组成新数组;

		其他用法和性质跟forEach()一模一样;
map()有返回值，返回值会组成新的数组；

###   filter

		filter()方法用于过滤数组，其结果是返回新的过滤后的数组；

		var newArr = arr.filter(function(){
						if(){return true}
							else{return false}
						});

###   indexOf
		与字符串的indexOf用法一样;

##   严格模式
use strict

1. 变量生命必须使用var,否则报错；
2. 函数调用模式,this不再是window,而是undefined;
3. call与apply指向谁就是谁;
4. argument不再与形参绑定;

# canvas

> canvas通过属性进行宽高设置，且不带单位；通过style设置的大小会使canvas画布失真

## 基本使用

		<canvas id="canvas" width="800" height="300"></canvas>
		<script>
			1.获取元素
				var canvas = document.querySelector('#canvas');
			2.获取绘制入口
				var hy = canvas.getContext('2d') // 意为画布是2d画布，webgl是3d画布，但有兼容性问题；
			3.指定起点和终点
				hy.moveTo(); // 取值为坐标不带单位
				hy.lineTo();
			4.描边
				hy.stroke();//  填充是使用 hy.fill()
		</script>
		
		-  发送AJAX请求步骤： 
		> 1.声明一个异步对象
		      var xhr = new XMLHttpRequest();
		> 2.请求方式
		      xhr.open();
		> 3.设置请求头
		      xhr.setRequestHeade();
		> 4.回调函数
		      xhr.onreadystatechange = function(){
		           if(xhr.readyStage==4&&xhr.status == 200){
		               xhr.responseText;
		           }
		      } 
		> 5.请求主体
		      xhr.send(data)；


		- 拖拽上传事件
		> 1.获取文件，文件存放于files属性中,是个伪数组，使用下标获取文件
		     var file = this.files[0]
		> 2.创建一个文件读取对象，文件读取工具
		    var fr = new FileReader();
		> 3.将文件进行读取
		    fr.readAsDataURL(file);
		> 4.文件读取文件之后的操作
	        fr.onload = function(){
	            // 处理文件的代码
	            fr.result//读取后返回的结果
	        } 

##	绘制形状

- fillRect(x,y,width,height)

   绘制一个填充的矩形,x/y为矩形左上角的坐标起点,width/height为矩形宽高;

- strokeRect(x,y,width,height)

   绘制一个矩形边框；

- clearRect(x,y,width,height)

   清除指定矩形区域，让清除部分完全透明;

```
> moveTo(x,y);  指定画笔移动到画布的坐标，也可以称之为起点；

> lineTo(x,y);  指点画笔或一条指点的终点坐标；

> beginPath();  开辟新路径；

> closePath();  闭合路径；

```

- arc(x,y,radius,startAngle,endAngle,anticlockwise)

   绘制一个圆弧,以x/y为圆心,radius为半径,从弧度为startAngle的位置开始绘制,到弧度为endAngle的位置；
   	anticlockwise指定绘制图像的方向是顺时针还是逆时针；true时，是逆时针方向，否则顺时针方向；

##  样式和色彩

- fillStyle = color;

   设置填充的颜色为color;

- strokeStyle = color;

   设置图形轮廓的颜色为color;

- globalAlpha = value;

   设置canvas里面的所有图形的透明度为value，0~1；

   ###  线型Line styles

- lineWidth = value;

   设置线宽为value；

- setLineDash([]);
   ​	
   设置虚线，数组内放置2~4个数值，分别表示实线与虚线的长度；

- getLineDash();

   获取虚线的值；

- lineDashOffset = value;

   设置虚线样式的起始偏移量；

   ##绘制文本

- fillText(text,x,y,[maxWidth]);

   在x/y坐标的位置，填充text文本，[maxWidth]是可选的，表示绘制的最大宽度；

- strokeText(text,x,y,[maxWidth]);

###   文本的样式

- font = value;

   设置字体的大小和样式,value = '20px 微软雅黑';两个参数，缺一不可；

- textAlign = value;

   设置文本的对齐方式，可选值有：start,end,left,right,center;

- textBaseline = value;

   设置文本基线的对其方式，可选值:top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。

- direction = value;

   设置文本的方向，可选值：ltr, rtl, inherit。默认值是 inherit。

> 补充： 设置数字保留几位小数的方法，number.toFixed(2)//设置number保留2位小数,四舍五入;


##	 绘制图片

		步骤：1.创建一个img对象。设置img对象的图片来源;
			 2.图片加载完毕之后，将图片绘制于canvas上;


		var img = new Image()  //创建一个img对象
			img.src = ''//设置图片的路径
	
			img.onload = function(){
					ctx.drawImage();
				}

- drawImage();
  - drawImage(img,x,y);

     参数1  为绘制的图片
     	参数2/3   为图片左上角在画布中显示的坐标值

  - drawImage(img,x,y,dw,dh);

     参数1  绘制的图片对象
            参数2/3   图片在画布显示的位置
            参数4/5   图片在画布显示的大小

  - drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

     参数1  绘制的图片对象
            参数2/3   从图片中截取的矩形左上角位于图片的坐标
            参数4/5   截取的矩形的大小
            参数6/7   截取的图片将要放置于画布中的坐标
            参数8/9   截取的图片在画布显示的大小

- getImageData(x,y,width,height)

   getImageDate()获取指定区域的像素数据,像素数据为rgba值,返回的结果是一个数组，数组的长度为：width*height*4 // 4--rgba();
##  变形 Transformations

###  状态的保存于恢复
- save()

   保存画布中当前的状态;	

- restore()

   恢复之前保存的画布状态；可以多次调用，遵循状态栈的调用方式;

###  translate()

		translate(x,y) 方法，它用来移动 canvas 和它的原点到一个不同的位置;（平移坐标轴）

###  rotate()

		rotate(Math.PI) 方法，用来对canvas 和他的原点旋转;(坐标轴旋转);

###	  scale()

		scale(value,value) 方法，我们用它来增减图形在 canvas 中的像素数目，对形状，位图进行缩小或者放大；


##  路径重合

- globalCompositeOperation = type;

   路径重合时候的操作;

   -  destination-over；

     原图形覆盖在新绘制上

     -source-in;

     仅显示（新图形）重叠的部分；其他区域透明

     -destination-in

     仅显示（原图）重叠部分；

     -source-out；

     仅显示（新图形）不重叠的部分；

     -destination-out；

     仅显示（原图）不重叠的部分；

     -xor；

     重叠的部分不显示（变透明）；


# git
Git是一款免费、开源的**分布式**版本控制系统，用于敏捷高效地处理任何或小或大的项目。Git是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。
与之同样在企业中运用的版本控制器是SVN，SVN是**集中式**版本控制器，分布式相比于集中式的最大区别在于开发者可以提交到本地，每个开发者通过克隆（git clone），在本地机器上拷贝一个完整的Git仓库;

- git的工作区内部图

![]("git.png")
​	
##   base基本命令
- pwd  打印当前路径的名称(print working diretofy)
- ls   列举当前目录
- cd   切换目录(change diretory)
- mkdir   创建文件夹(make diretory)

   mkdir  app/aa  -p        // app 不存在时,可以在后面加上 -p,就会先创建app,才创建aa;
- touch  创建文件
- rm   删除文件或文件夹(remove)

   rm -r  // 删除文件夹
- cp   拷贝文件(copy)
- mv   剪切移动文件(move)
- clear    清命令屏
- cat   查看文件内容
- vi    vi编辑器，对文件进行简单的编辑；

   在vi编辑器界面，i/a进行编辑，esc退出编辑,  :w保存编辑  :q退出vi编辑器

##    git提交管理文件的基本命令
- git init (初始化)
- git status (查看文件状态)
- git add (将文件提交到暂存区)
- git commit -m  (将暂存区的所有文件提交到仓库区)
- git log / git reflog  / git log --oneline (查看提交的版本日志)
- git push ___ master (将仓库的文件提交到服务器)
- git pull ___ (将服务器中的文件下载到本地)
- git remote add (变量名) (服务器地址)

   变量名保存服务器地址；
- git clone ___

   类似于git pull 的功能，git clone更加智能更加便捷，下载代码的同时还会对文件夹初始化;
###   设置不受git监控的文件管理
创建一个文件名称为.gitignore的文件，里面放不受监控的文件名

###   版本回滚
git reset --hard 版本号;

		1. 查看日志，获取版本号
			git log / git reflog / git log --oneline
		2. 使用版本回滚命令,输入版本号进行版本回滚
			git reset --hard 版本号
###   git分支
		1. 查看分支
			git branch
		2. 创建分支
			git branch name //创建一个名称为name的分支
		3. 切换分支
			git checkout name // 切换到名称为name的分支
		4. 合并分支上的内容
			git merge name // 将name分支上的文件合并到主分支上，注意，该操作应该在主操作上进行!
		5. 删除分支
			git branch -d name //删除分支名称为name的分支

#  npm/cnpm/Bower
npm/cnpm/Bower都是包管理工具，一般用于管理项目的第三方依赖包；

##  常用的指令

- npm  init -y

  对项目进行初始化，初始化过后的项目在文档中会有一个package.json文件，在文件中可以存放项目所以来的各个第三方库的版本；

- npm  install  bootsrap --save

  使用npm工具进行第三方依赖包下载，并保存记录到package.json文件中，如果需要对下载的依赖包精确的版本下载，在依赖包后面加上@符号并加上版本号进行下载，npm  install bootsrap@1.1.1  --save

- npm uninstall  bootsrap  --save

  卸载包

#  browser-sync
开发神器,开启本地服务器,同个页面在过个浏览器实现同步刷新,是一个很实用的测试工具

##  安装

1. 全局安装

		npm install -g browser-sync

2. 项目中结合gulp安装

		npm install --save-dev browser-sync

##  启动browser-sync监听网页的变化刷新

		browser-sync  start --server  --files  '文件名';  
  ​

#  gulp

gulp是一款文件管理工具，一般用于打包文件压缩混淆等；

##  环境的安装

  1.  全局安装

      $npm install gulp-cli -g  

  2.  全局安装之后还需要在本地项目中进行安装

      $npm install gulp --save

##  gulp基本使用

在项目文件中，**创建一个gulpfile.js文件**，用于创立任务，项目中**所有文件**的操作都会在这个文件中创建任务然后执行；

- task

   ```javascript
   gulp.task('name',[],function(){
     //需要执行的代码
   })
   /*task方法用于创建任务，有三个参数，第一个参数为任务的名称，第二个是依赖的任务，第三个是执行任务的代码*/
   ```

- src

   ```javascript
   gulp.task('name',function(){
     gulp.src('js/name.js');//gulp.src()用于指定需要读取的文件的路径
   })
   ```

- dest

   ```javascript
   gulp.task('name',function(){
     gulp.src('js/name.js')
     .pipe()
     .pipe(gulp.dest(''));//gulp.dest用于指定文件进行操作之后存放的目录
   })
   ```

- run


   ​	gulp.run();用于指定要执行的任务;

##   gulp的插件

gulp提供插件进行对文件的更加丰富的操作;在使用插件之前，需要对插件进行下载并保存,npm install gulp-xxx --save;

1. gulp-uglify

   gulp-uglify用于压缩**js**代码，npm install gulp-uglify --save;

   ```javascript
   var uglify = require('gulp-uglify');
   gulp.task('uglify',function(){
   	gulp.src('name.js')  
       .pipe(uglify())//读取name.js文件，通过uglify方法进行操作，操作后的文件放在./dirt文件夹下面
       .pipe(gulp.dest('./dirt'))
   });
   ```

2. gulp-concat

   gulp-concat用于合并文件，npm install gulp-concat --save;

   ```javascript
   var gulpconcat = require('gulp-concat');
   gulp.task('concat',function(){
     gulp.src('js/*js')
     .pipe(gulpconcat('all.js'))//读取js下所有的文件，通过gulpconcat方法进行合并成all.js文件的文件名，操作后的文件放在.dirt文件夹下面
     .pipe(gulp.dest('./dirt'))
   })
   ```

3. gulp-minify-css

   gulp-minify-css用于压缩css文件；

4. gulp-htmlmin

   gulp-htmlmin插件用于压缩Html文件；

   ```javascript
   var htmlmin = require('gulp-htmlmin');
   gulp.task('htmlmin',function(){
     gulp.src('index.html')
     .pipe(html({
       collapseWhitespace:true, //去空格
           removeComments:true//去注释
     }))
     .pipe(gulp.dest('./dirt'));
   });
   ```


#   angular框架
##   MVC模式
MVC 是 Model-View-Control 的简称，即模型-视图-控制器。它是一个存在于服务器 
表达层的模型，它将应用分开，改变应用之间的高度耦合。

- M (modal)

模型：应用对象。 
模型是应用程序的主体部分。 模型代表了业务数据和业务逻辑； 当数据发生改变时，它要负责通知视图部分；一个模型能为多个视图提供数据。由于同一个模型可以被多个视图重用，所以提高了应用的可重用性。 

- v (view)

视图：数据的展现。 
视图是用户看到并与之交互的界面。视图向用户显示相关的数据，并能接收用户的输入数据，但是它并不进行任何实际的业务处理。视图可以向模型查询业务状态，但不能改变模型。视图还能接受模型发出的数据更新事件，从而对用户界面进行同步更新。

- c (controller)

控制器：逻辑处理、控制实体数据在视图上展示、调用模型处理业务请求。 
当 Web 用户单击 Web 页面中的提交按钮来发送 HTML 表单时，控制器接收请求并调用相应的模型组件去处理请求，然后调用相应的视图来显示模型返回的数据。

MVC并不是一个新的知识点,而是一个新的写代码的套路.

##   angular基本结构
1. 创建angular管理的范围；ng-app
2. 创建模块；angular-module()
3. 创建角色
  - 创建控制器；app.controller()
  - 创建与控制器相关联的视图；ng-controller

4. 在控制器中创建数据;$scope.xxx
5. 在视图中展示数据{{xxx}};

   <body ng-app="myapp">
```javascript
   	<div ng-controller="box">
   		{{name}}
   	</div>
   	<script>
   		var app = angular.model('myapp',[]);
   		app.controller('box',['$scope',function($scope){
   			$scope.name = 'sandy'
   		}])
   	</script>
   </body>
```

##  angular的原理
###  angular的渲染执行过程

1. 加载html，然后解析成DOM；
2. 加载angular.js脚本；
3. AngularJS等待DOMContentLoaded事件的触发；
4. AngularJS寻找ng-app指令，根据这个指令确定应用程序的边界；
5. 使用ng-app中指定的模块配置**$injector**；
6. 使用$injector创建**$compile**服务和**$rootScope**；
7. 使用$compile服务编译DOM并把它链接到$rootScope上；
8. ng-init指令对scope里面的变量name进行赋值；
9. 对表达式{{name}}进行替换，于是乎，显示为“Hello World!” 

> 总结: AngularJs寻找ng-app指令 --> 配置依赖注入服务$injector --> 创建$compile和$rootScope --> $compile编译将DOM链接到$rootScope --> 视图中通过scope获取值并渲染

![](html_angular.png)

###  angular事件的交互过程

1. 首先，**浏览器会一直处于监听状态**，一旦有事件被触发，就会被加到一个**event queue**中，event queue中的事件会一个一个的执行；
2. event queue中的事件如果是被**$apply()**包起来的话，**就会进入到AngularJS的context中**，这里的fn()是我们希望在AngularJS的context中**执行的函数**。
3.  AngularJS将执行fn()函数，通常情况下，这个函数会改变应用的某些状态；
4.  然后AngularJS会**进入**到由两个小循环组成的**$digest循环**中，一个循环是用来**处理$evalAsync**队列（用来schedule一些需要在渲染视图之前处理的操作，通常通过setTimeout(0)实现，速度会比较慢，可能会出现视图抖动的问题）的，一个循环是**处理$watch**列表（是一些表达式的集合，一旦有改变发生，那么$watch函数就会被调用）的。$digest循环会一直迭代直到$evalAsync队列为空并且$watch列表也为空的时候，即model不再有任何变化。
5.  一旦AngularJS的$digest循环结束，整个执行就会离开AngularJS和Javascript的context，紧接着浏览器就会把数据改变后的视图重新渲染出来。

> 总结:浏览器监听状态 --> 添加到event queue --> $apply将事件包起来 --> $digest循环执行$evalAsync和$watch中的事件直到没有model变化 --> 渲染视图 

![](angular_progress.png)

##   angular指令

所谓指令就是AngularJS自定义的HTML属性或标签；
###   内定指令
- ng-app 指定应用根元素 也就是ng管理的范围.可以使用全局对象angular的module方法根据该属性的值创建模块对象.

- ng-controller 指定与控制器关联的视图.

- ng-show  指定元素是否显示; true/false;

- ng-hide  指定元素是否隐藏; true/false;

- ng-if  控制元素及其子元素是否创建在DOM上;  true/false;

- ng-src  增强路径

   以img标签为例,页面中的img标签，设置src，而src属性是由angular数据请求数据而来动态添加的，浏览器解读到img的src属性的时候会以标签的属性进行解析，而此时src并未赋值，那么浏览器将会报错；
   	ng-src就是解决上面报错的问题，ng-src属性值放图片的路径，浏览器解析到ng-src不会进行解读，将其忽略，从而避免报错；

- ng-href 增强路径

- ng-class

   ng-class指令是用于指点某一个类是否作用域标签上；

   ```html
   <div ng-class="{box:true}">
   </div>
   ```

- ng-include

   ng-include指令是用于将其他外部的内容引进来；
   	ng-include="'路径path'"

- ng-disable 表单是否禁用；true/false

- ng-readonly 是否只读；true/false

- ng-checked

- ng-selected
###   自定义指令
自定义指令调用directive方法；

```javascript
	app.directive("show",function(){
		return {
			restrict:"EA"//约束指令的类型，是元素还是属性还是注释
			replace:true/false,  //指定指令或元素是否
			template:    //指定指令的模板是什么
			templateUrl:   //指定引入外部模板的路径
			link:function(scope,element,attrs){
					//scope:
					//element指向使用该指令的元素
					//attrs指向的是使用该指令的元素的属性
			}
		}		
	});
```

###   数据的单向绑定和双向绑定
####   数据的单向绑定
所谓的数据的单向绑定,指的就是在控制器中制造数据模型，并将数据模型显示在视图上的过程；

```javascript
	<body ng-app="myapp">
		<div ng-controller="box">
			{{name}}//这个例子就是典型的数据的单向绑定，数据由$scope影响
		</div>
		<script>
			var app = angular.module('myapp',[]);
			app.controller('box',['$scope',function(){
				$.scope.name = 'jack';
			}]);
		</script>
	</body>
```

> 除了以上的方法，ng-bind也是可以实现数据的单向绑定；

####   数据的双向绑定
数据的双向绑定指的是显示的数剧变换能影响数据模型中的数据，反过来，数据模型中的数据也能影响显示的数据结果；
```html
	<body ng-app="myapp">
		<input type='text' ng-model="msg">//ng-model指令，相当于表单中的value；当value值改变的时候，msg也会发生改变
		<script>
			var app = angular.module("myapp",[]);
			app.controller('box',['$scope',function($scope){
				$scope.msg = 'jack';//而在$scope中msg发生改变，视图中的value也会发生改变；
			}])
		</script>
	</body>
```

>  ng-model指令一般只作用于表单元素

###   数据处理
####   ng-repeat
ng-repeat用于数据循环绑定
ng-repeat="key in obj";
ng-repeat="(a,b) in obj"

####   ng-switch
判断变量的值,如果变量的之与列出的任意1个值相等,则执行其中的逻辑.
ng-switch;
ng-switch-when
​		
```html
				//ng-switch  item为判断的对象
	<li ng-repeat="item in list" ng-switch on="item">
				//ng-switch-when 类似原生js中switch判断的case
  		<span ng-switch-when="html">我喜欢html</span>
  		<p ng-switch-when="ccs">哈哈css</p>
  		<a ng-switch-when="js" href="#">哦js</a>
  		<span ng-switch-when="jQuery">like jQuery</span>
 		<span ng-switch-default>啦啦啦,没有匹配到</span>
     </li>>
```
###   过滤器
过滤器的基本使用格式：
{数据|过滤器：参数...}
####   内置过滤器
- date 时间过滤器

   过滤时间的过滤器，{time|date:"yyyy-MM-dd hh:mm:ss"}

- currency 货币过滤器 {price|currency:'￥':3}
- uppercase/lowercase 大小写过滤器
- orderBy 过滤器

   ｛{students|orderBy:'score'}} 将student数组中的对象以score属性为参照进行排序 默认是升序.
- filter 过滤器

   ｛{students|filter:{score:90} }} 过滤出数组中对象分数等于90的对象.

####   自定义过滤器
```javascript
	app.filter('过滤器名字',function(){
		return function(data){//data是个形参，指向的是需要被过滤的数据
			//需要过滤执行的代码
			return newdata //返回新的过滤之后的数据
		}
	});
```

##   服务
###   内置的服务
- $scope
- $log
- $timeout

   app.controller('box',['$scope','$timeout',function($scope,$timeout){
   ```javascript
   	$timeout(function(){ },2000)//类似原生的setTimeout()
   }])
   ```
- $interval

   //类似原生的setInterval();
   ```javascript
   移除$interval的方式：
   	var timer = $interval(function(){},1000)
   		$interval.cancel(timer);//类似原生的clearInterval();
   ```

- $filter

   $filter服务是一个函数，主要作用是改变内置过滤器的过滤方式

   	$scope.time = $filter('date')(数据,'yyyy-MM-dd hh:mm:ss');
- $http

$http是用于向服务器发送异步请求的函数，类似jquery的ajax函数;

参数：

1. url // 请求地址
2. method // 请求的方式
3. params // 当请求方式为get的时候，需要传参的属性，值为对象方式传参
4. data // 当请求方式为post的时候，需要传参的属性，值为字符串方式传参
5. headers // 当请求为post的时候需要设置请求头
6. then() // 回调函数，请求成功需要执行的函数
7. catch() // 请求不成功需要执行的代码

   //get请求
```javascript
   $http({
   	url:'',
   	method:'get',
   	params:{name:'',age:''}
   }).then(function(res){
   	执行成功的代码
   }).catch(function(){
   	不成功的时候执行的代码
   })；

   //post请求
   $http({
   	ulr:'',
   	method:'post',
   	data:'name=jack&age=21',
   	headers:{
   	'Content/type':'application/x-www-form-urlencoded'
   	}
   }).then(function(){}).cath(function(){});
```


- $window

   $window指向window对象;

- $routeParams

   获取通过路由传的参数;


###   自定义服务
####   factory
自定义服务方法，factory是一个方法，有两个参数；

- 自定义服务名
- 数组，如果有依赖的服务先依赖注入，再回调函数；

   app.factory('name',['',function(){
   		return:{
   			fn1:function(){}
   			fn2:function(){}
   		}
   	}]);

####   service
service也是自定义服务的一种方法，与factory方法一样，有两个参数；

使用service自定义服务，不需要设置return返回值，设置的回调函数直接给this;

		app.service('name',['',function(){
			this.fn1:function(){};
			this.fn2:function(){};
		}])

###   配置块
配置块会在提供者注册和配置的过程中，对模块或者服务进行配置。通过模块的.config()方法进行配置,参数是一个数组:

数组有两个参数：
1. 需要配置的服务名称，**加上provider**；
2. 回调函数，需要配置的执行的代码;

   配置网络跨域请求白名单
   	app.config(['$sceDelegateProvider', function ($sceDelegateProvider){
   			$sceDelegateProvider.resourceUrlWhitelist["http//www.baidu.com","http//www.ali.com"];	
   	}])

###   路由服务
location.hash可以获取到url中锚点的值；
window对象中有个onhashchange,可以监控浏览器地址栏中锚点变化的事件;

angular中对url锚点变化进行了封装，这就是路由，路由可以实时监控url地址栏是否发生变化，如果发生变化，就发生对应的事件；

> 如果需要使用路由服务，则需要下载安装包，angular-route.js，注意下载的版本要跟angular的版本一致;

####   路由配置
通过路由的配置，监控url发生了怎样的变化，而要执行什么样的事件;

		app.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/home',{
					template:'',//请求到的字符串模板，字符串！
					templateUrl:'',//请求的文件路径
					controller:'',//让请求的资源与相对应的控制器进行相关联
					redirectTo:'',//跳转到其他锚点
				}).when().otherwise();
		}]);
	
		在设置好路由配置后，还需要在试图中指定ng-view指令用于展示模板的数据;

####   路由传参
路由变化中，可以通过url进行传参，而在对应控制器(controller)中，内置了一个服务$routeParams，用以获取通过路由传过来的参数；

```javascript
<html>
	<a href="#！/home">链接</a>
</html>

app.config(["$routeProveder",function($routeProveder){
  	$routeProveder.when("/:side",{
      templateUrl:'',
      controller:'box'
  	})
}]);

app.controller('box',['$scope','$routeParams',function($scope,$routeParams){
  		var vle = $routeParams.side;
  		console.log(vle);//home
}])
```
> $route.updateParams({})方法可以改变路中参数的值，方法内传入一个对象，对象内键值对的关系更新参数属性以及新值；

####  跨域请求

在angular中的#http服务默认不支持跨域请求，需要对该服务进行配置白名单才能进行跨域请求;跨域请求的本质是script标签通过src属性向不同源服务器发送请求并返回数据;

自己封装一个跨域请求的函数：

```javascript
//封装一个跨域请求的函数
function jsonp(opts){
  //声明一个url用于存放对象中的url
  var url = opts.url + '?';
  //遍历对象中传入的数据
  for(var key in opts.params){
    url += key + '=' + opts.params[key] + '&';
  };
  //回调函数给window对象的属性，声明一个window对象下的属性用于存放函数
  var callbackName = window.Math.random().toString().slice(2);
  window[callbackName] = opts.callback;
  url += 'callback' + callbackName;
  //创建一个script标签用于向服务器发送跨域请求
  var script = window.document.creatElement('script');
  script.src = url;
  //将script标签添加到DOM数中才有效；
  window.document.body.apendChild(script);
};
//跨域请求的服务的调用
jsonp({
  url:'http://api.map.baidu.com/telematics/v3/weather',
  data: {
         ak: "0A5bc3c4fb543c8f9bc54b77bc155724",
         location: "深圳",
         output: "json"
  },
  callback:function(res){
     console.log(res);
  }
});
```

> 在angular中如果使用自己封装jsconp函数的时候，在请求回来的数据渲染到页面之后，需要告诉 scrope 服务说明数据发生了变化，这样页面中的数据才会发生相对应的变化；使用  $scrope.$apply()方法通知视图数据模型发生了变化;



# node

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。**Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效，**采用非阻塞的操作，能够提高处理的效率

##  模块

###  fs模块-文件系统

#### fs.readFile(path,[.encode],callback)

```javascript
//fs.readFile是读取文件的方法;
fs.readFile(__dirname + '/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

#### fs.writeFile(path,text,callback)

```javascript
//fs.writeFile(path,text,callback)
fs.writeFile(__dirname + 'message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
```

#### fs.appendFile(path,text,callback)

```javascript
//fs.appendFile(path,text,callback)
fs.appendFile(__dirname + 'message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
```

### httpt模块

http用以创建服务器

```javascript
//1.引入http模块
var http = require('http');
//2.创建服务器
var server = http.creatServer();
//3.启动服务器,配置端口号
server.listen(3000,()=>{
  console.log('http://127.0.0.1:3000');
});
//4.给服务器绑定请求事件
server.on('request',(req,res)=>{
  	//req 请求的对象，可以获取浏览器请求的的数据
  	var url = req.url //获取用户请求的url地址
    var method = req.method //获取用户提交数据的方式:get/post;
    
    var data = '';
    req.on('data',(chunk)=>{//获取客户端传送过来的数据，以片段的方式 碎片传输
      data += chunk;
    });
  	req.on('end',()=>{//数据传输完毕之后触发的事件;
      
  	})
    
    
    
  	//res 响应的对象，想浏览器响应传送数据
  	res.writeHeader(200,{//设置响应头
      'Content-type':'text/http;charset=utf-8';
  	});
  	res.end('404');//res.end向浏览器发送响应的数据;
})

```

####  数据解码

从客户端传过来的数据，一般以二进制在网络中传送，在服务端，需要将用户传过来的数据进行接收并转义，才能做相应的操作;

```javascript
var data = '';
req.on('data',(chunk)=>{//data事件，当客户端发送数据触发的事件
	data += chunk; // 从客户端传过来的数据是以片段进行传输，所以在服务端需要用拼接字符串的方法将数据整合;
});
req.on('end',()=>{//end事件，当数据传输完毕触发的事件
	
})

```

- querystring.parse()

querystring.parse()方法，能将`二进制的数据`进行转义成`字符串`且转为一个`对象`；

方法实现的原理是：使用`decodeURL`将二进制的数据转义成字符串，然后使用字符串分割方法将字符串分割对象的属性进行保存;

```javascript
querystring.parse(str,separator,eq,options)

parse这个方法是将一个字符串反序列化为一个对象。

参数：str指需要反序列化的字符串;

　　　separator（可省）指用于分割str这个字符串的字符或字符串，默认值为"&";

　　　eq（可省）指用于划分键和值的字符或字符串，默认值为"=";

　　　options（可省）该参数是一个对象，里面可设置maxKeys和decodeURIComponent这两个属性：

　　　　　　maxKeys：传入一个number类型，指定解析键值对的最大值，默认值为1000，如果设置为0时，则取消解析的数量限制;

　　　　　　decodeURIComponent:传入一个function，用于对含有%的字符串进行解码，默认值为querystring.unescape。

```

> 相对应，在客户端，可以通过`encodeURL`将字符串转义成二进制;

###  path路径模块

####  path.join(path1,path2..)

```javascript
//将零散的路径片段合并规范化
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// 返回: '/foo/bar/baz/asdf'
```

####  path.dirname(path)

`path.dirname()` 方法返回一个 `path` 的目录名

```javascript
path.dirname('/foo/bar/baz/asdf/quux');
// 返回: '/foo/bar/baz/asdf'
```

####  path.basename(path,[.ext])

`path.basename(path,[.ext])`获取到路径下的`文件名`;


path.basename('/foo/bar/baz/asdf/quux.html');
// 返回: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// 返回: 'quux'


####  path.extname(path)

`path.extname(path)`获取到路径下的`文件扩展名`;

###  querystring模块（查询字符串）
####   querystring.parse(str);

querystring.parse()方法用来解析把一个 URL 查询字符串（str）解析成一个键值对的集合（json对象）。

####   querystring.stringify(obj)

querystring.stringigify(obj)方法通过遍历对象的自有属性，从一个给定的 obj 产生一个 URL 查询字符串。


###   url模块

####  url.parse
url.parse()方法，能够将url地址解析成一个URL对象；
方法里面的两个参数:
1. URLstring,需要解析的url地址的字符串
2. true/false;是否需要将参数解析成对象的格式，true表示是;
		
		var urlModule = require('url)//引入url模块
		var str = 'http://127.0.0.1:3000/a?userName=%E5%93%88%E5%93%88%E5%93%88%E5%93%88';
		var url = urlModule.parse(str, true);
		//得到以下数据
		URL{
		 slashes: true,
		  auth: null,
		  host: '127.0.0.1:3000',
		  port: '3000',
		  hostname: '127.0.0.1',
		  hash: null,
		  search: '?userName=%E5%93%88%E5%93%88%E5%93%88%E5%93%88',
		  query: 'userName=%E5%93%88%E5%93%88%E5%93%88%E5%93%88',
		  pathname: '/a',
		  path: '/a?userName=%E5%93%88%E5%93%88%E5%93%88%E5%93%88',
		  href: 'http://127.0.0.1:3000/a?userName=%E5%93%88%E5%93%88%E5%93%88%E5%93%88' }


##  express
###   什么是express
1. Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架；
2. Express 不对 Node.js 已有的特性进行二次抽象，只是在Node.js之上扩展了构建 Web 应用所需的基本功能。

###  express的基本使用
安装express;`npm i express -S`

```javascript
var express = require('express');//引入express
//1.创建服务器
var app = express();
//2.启动服务器，设置端口号
app.listen(3000,()=>{
	console.log('http://127.0.0.1:3000')
});
//3.绑定请求事件
app.get('/',(req,res)=>{
	res.send();
})
```

###   express的路由模块
express的路由模块是自己定义的，使用的时候类似自己封装的模块那样进行封装;

```javascrpt
var express = require('express');

//创建路由模块
var router = express.Router();

//路由绑定
router
	.get()
	.post()

//想外暴露模块接口
module.export = router;

```

在app.js文件中引入路由模块并注册使用
```javascript
var router = require('router.js');
app.use(router);//完成注册
```

###    express配置静态文件路径
客户端请求页面的时候，会同时请求页面文件依赖的第三方包，而如果没有配置路径，就会挨个配置第三方文件的路径；express可以很好的解决这个问题;

//注册使用资源文件
`app.use('虚拟path',express.static(path))`
如:第三方插件都会安装在node_modules文件夹下面
app.use('/node_modules',express.static('./node_modules'));

###		express的模板渲染
在express中，推荐使用`ejs`模板渲染；

安装ejs;`npm i ejs -S`

引入ejs；`var ejs = require('ejs')`

###   express的中间件
凡是中间件，一般都使用app.use来注册使用；

中间件可理解为数据的路由；

####  ejs配置默认渲染引擎

**使用ejs的时候，需要配置默认渲染的模板引擎**:
`app.set('view engine','ejs')`;
`app.set('views',path)`//设置ejs的模板文件默认的存放路径，如果不设置是views文件夹下;

####   使用语法
渲染数组对象:

```

<% arr.forEach((item)=>{ %>
	<tr>
		<td><%= item.name %></td>
	</tr>
<% }) %>

```

####  ejs模板中引入其他公共页面
在开发中，页面的头部跟尾部几乎都是一样的，这时候就可以将公共的头部尾部提取出来单独放于一个文件，其他页面编写的时候只需要写内容部分就好，而返回客户端的时候，需要将公共部分引入：

`<%- include('path') %>`path为公共样式相对引入文件的路径；

##  SQL
使用node.js对sql进行增删改查;
安装:`npm i mysql -S`;

```javascript
var mysql = require('mysql');//引入mysql模块
//1.创建与数据库服务器连接
var connection = mysql.createConnection({
	host:'',//设置服务主机
	user:'',数据库的用户名
	password:'',
	database:''.//需要操作的数据库文件
});
//2.执行链接命令
connection.connect();
//3.绑定事件执行命令
connection.query(mysql语句,(err,data)=>{
	
});

```
###   SQL的基本命令
- 插入数据

`insert into 表名 （字段1...） values (值1..)`

`insert into 表名 set?`

- 修改数据

`update 表名 set ? where 选择条件`

- 查询数据

`select * from 表名 where 选择条件`

按顺序查询
`select * from 表名 where 选择条件  order by 排序的选项`;

##  promise
Promise是内置的构造函数,他可以解决回调地狱;
- 优点

有了 Promise 对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise 对象提供统一的接口，使得控制异步操作更加容易。

- 缺点

Promise 也有一些缺点。首先，无法取消 Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。第三，当处于 Pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。


```javascript

new Promise(function(resove,reject){

	resove();
	reject();

}).then(fn(
	resove的回调函数;
),fn(
	reject的回调函数;
))

```

# VUE
MVVM框架,M,V,VM
##  CDN
CDN的全称是Content Delivery Network，即`内容分发网络`。其目的是使用户可就近取得所需内容，`解决 Internet网络拥挤的状况`，提高用户访问网站的响应速度。类似分布各地的物流仓储网络，CDN网络可以将源站的内容缓存到分布全球的CDN节点，根据用户的访问IP，就近连接CDN，提高网站响应速度；
##  基本使用
1. 创建一个实例对象

		var vm = new Vue({
			el:'.box'//指定vue解析的范围
		})
2. 在html中指定vue解析的范围元素
3. 绑定数据

		var vm = new Vue({
			el:'.box'//指定vue解析的范围
			data:{
				msg:'wellcome'
			}
		})		 
4. 视图中渲染数据

与angular类似，在视图中渲染数据使用{{msg}}形式渲染；

##  指令
- v-text / v-html

		var vm = new Vue({
        	el: '.box',
       		data: {
            	msg: '<h1>我是一个兵</h1>'
      			  }
			});
在html中，通过v-text/v-html指令来绑定数据变量；`<p v-text="msg"></p>`;

> v-text与v-html之间的区别:v-text会将文本原封不动的渲染出来，即使有内嵌的标签，也不会解析;v-heml能将内嵌的标签进行渲染!

- v-bind

数据的单向绑定，`<img :src="imgUrl">`;

> v-bind指令可简写为':';
> 动态绑定添加类`:class="{active : data.isAdd}"`

- v-modle

类似angular中的ng-modle；一般用于数据的双向绑定;

- v-on

v-on用于事件的绑定，基本语法：`v-on:click="show"`;

> v-on指令可以简写为'@',如`v-on:click="show"`等价于`@click="show"`;
> vue里面的绑定事件还有个事件修饰符,如 `@keyup.enter='show'`,表示kuyup的事件是在按`enter`事件的时候出发的

		.stop  //阻止冒泡
		.prevent //阻止默认行为
		.capture //
		.self
		.once

- v-if/v-show

类比于angular的ng-if/ng-show

- v-for

在vue中，循环遍历使用`v-for`,用法与angualr中的`ng-repeat`相类似；

		<li v-for="(item,index) in arr" @key="">
			{{item}} --- index
		</li>

##  组件
组件类似模块化，只是组件范围更大，他可以将html也分模块进行分割;
###  创建组件步骤
1. 创建组件视图

		<script type="text/html" id="tpl">
			<div>
				<h1>首页头部</h1>
				<div>{{msg}}</div>
				<input type="button" value="按钮" @click="show">
			</div>
		</script>
		//将需要进行引入的html装入一个容器中，一定要有root容器；

2. 创建组件

component方法用来创建注册组件，方法中接受两个参数，第一个参数为组件的名字，第二个参数是一个对象；

		Vue.component('login',{
			template:"#tpl",
			methods:{
				show:function(){ console.log(222) }
			},
			data:function(){
				return {
					msg:"Wellcome back!"
				}
			}
		});

各组件自己可以设置自己的数据以及事件的绑定；特别注意组件中data的绑定方式；

3. 调用组件

组件定义配置好之后，在html中直接向使用标签一样引用组件的名字；`<login></login>`

##  过滤器
###  私有过滤器
私有过滤器一般设置在局部的实例对象解析的范围内，其他新创建的实例不能使用；

		new Vue({
			el:"",
			filters:{
				sandy:function(data){ 
					return ...
				}
			}
		})

在实例中设置的过滤器就是私有过滤器;

###  公有过滤器
公有过滤器设置给Vue构造函数的原型，其他实例只用new了Vue对象，都能使用这个过滤方法;

		Vue.filter('sandy',function(data){
			return ....
		});

定义在构造函数中的过滤方法就是公有过滤器；

> angular中的自定义过滤属性：

```javascript
app.filter('sandy',function(){
    return function(data){
      return ...
    }
});
```

##  路由
路由依赖以第三方包vue-router,使用前需要进行下载引包；
https://router.vuejs.org/zh-cn

>  在vue项目中,引入vue-router之后,需要使用vue.use(vue-router)注入到项目中;

1. html中设置路由页面

		<router-link to=""></router-link>
2. html中设置路由展示的页面

		<router-view></router-view>
3. 定义组件

定义组件需要一个根标签

		<template>
			<div>
				组件的展示内容
			</div>
		</template>
4. script定义路由

		var vRouter = new VueRouter({
			routes:[{path:"",component:组件}]
		});
5. 实例对象中启用路由

		var vm = new Vue({
			el:"",
			router:vRouter
		});

###   路由的嵌套
什么是路由的嵌套,简单来讲app组件中展示另外一个组件1,组件1中链接展示组件2;

组件的嵌套在路由配置的时候使用children关键字进行自组件的路径配置;

		var vRouter = new VueRouter({
			routes:[{
				path:"/page",
				component:page组件,
				children:[{path:"new1",component:page组件要展示的组件}]
				}]
		})

###   路由传参
类似于angularJs，需要在路由中传参的时候，设置路由需要将参数设置于路由路径中"/home/:type"，在脚本中，通过$route.params.type的方式获取从路由穿过来的参数；

> 当如果在路由传参的方式是"/home?name='sandy'"的类型的时候,通过$route.query的方法获取从路由传过来的参数;

###   父子组件
####  父组件给子组件传参
父组件中:

1. 设置**components**属性

		components:{
			sandy:subcomponent;
			//sandy为需要在html中引入子组件展示的页面
			//subcomponent为子组件	
		}
2. 给子组件传参

		<sandy :params=""></sandy>
子组件中:

1. 通过**props**属性获取从父组件传过来的参数

		props:["params"]

####  子组件给父组件传参
在子组件中

- 通过**$emit()**方法将参数传递给父组件

		methos:{
			change:function(){
				this.$emit("自定义事件/sendParams",params);
			}
		}

在父组件中

1. html结构中，自定义与子组件交互的事件

		<subcomponent @子组件中的自定义事件="父组建中要获取的参数的事件"></subcomponent>
		<subcomponent @sendParams="getparams"></subcomponent>

2. script标签中，定义函数来处理传过来的参数

		methods:{
			getparams:function(data){
				console.log(data);
			}
		}

####   非父子组件传参
1. 使用公共对象

		1. 创建一个公共对象的包

				export default new Vue();

		2. 传参组件中通过$emit()方法进行传参

				//引入公共的对象
				import bus from ""
				//设置专递的参数和值
				create:{
					bus.$emit("自定义传值参数",传递的值)
				}

		3. 在接受方中通过$on()方法来获取参数并处理 

				//引入公共对象
				import bus from ""
				//获取传递过来的参数
				create:{
					bus.$on("自定义传值参数",function(data){	处理参数的代码
					})
				}

2. 使用VueX库

		1.下载安装vuex
			npm i vuex --save

		2.导入并注册
			import vuex from ""
			Vue.use(vuex);

		3.创建仓库
			var store = new vueX.store({
				state:{},//用以存储数据
				getters:{},//用以获取数据
				mutations:{},//同步修改数据
				actions:{}//异步修改数据
			})

3. 在实例中注入使用

		var vm = new Vue(
				store:store
			)


##  使用vue-cli脚手架搭建vue项目
###  安装vue-cli
npm install vue-cli -g

###  使用vue-cli初始化项目
vue init webpack-simple (你的项目名)

###  进入到你的目录
cd you-project

###  安装依赖
npm install

###  运行项目
npm run dev


#  websocket
因为 HTTP 协议有一个缺陷：通信只能由客户端发起,这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦。我们只能使用"轮询"：每隔一段时候，就发出一个询问，了解服务器有没有新的信息。最典型的场景就是聊天室。

**WebSocket 协议**在2008年诞生，2011年成为国际标准。所有浏览器都已经支持了。

它的最大**特点**就是，**服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种**。

##  websocket使用
1. 创造一个实例对象

		var ws = new webSocket('url')

2. 调用实例的方法


		+ ws.readyState
			- 0  正在链接
			- 1  链接成功
			- 2  链接正在关闭
			- 3  链接关闭,或打开链接失败

		+ ws.onopen(fn)
			- 指定成功链接之后的回调函数
		
		+ ws.oncloce(fn)
			- 指定链接关闭之后的回调函数

		+ ws.onmessage(fn)
			- 用于指定接收到服务器数据之后的回调函数
			- ws.onmessage(function(even){
			-      var data = even.data
			- })
		
		+ ws.send(string)
			- 用于向服务器发送数据	


		+ ws.onerror(fn)
			- 用于指定报错时候的回调函数


#  art-template模板渲染引擎
参考文档: http://aui.github.io/art-template/docs/

##  核心方法

- template.compile()

var render = template.compile(str)返回一个渲染函数,渲染函数中再传入数据进行编译成结果.var html = render(data);

- template.render()

var html = template.render(str,data);该方法是上面方法两个步骤的结合,在方法中传入要渲染的字符串跟数据即可;

- template()

终极方法,最简洁最简单的方法,使用: var html = template("id",data),不需要自己读取字符串模板,将字符串模板的定义盒子的id和数据传进去即可;



#  weChat小程序
https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/list.html

##  结构
微信小程序的结构主要app的设置与组件page的设置;

无论是app还是组件的page,都包括四个文件:

1. *.json
2. *.js
3. *.wxhl
4. *.wxss

默认的app的四个配置文件都是关于微信的整体的配置,page组件下的四个配置文件是关于单个页面的配置,其相关配置会覆盖app的整体配置,仅在当前页面中有效;

一个应用同时只能打开5个页面

### 组件的方法
每一个组件都有自己的生命周期,APP全局组件中有一个App()方法;页面组件中有一个Page()方法;

- App()

		App()方法是主要组件中的方法,主要设置整个小程序的相关设置
		1. onLaunch 生命周期函数--监听小程序初始化	当小程序初始化完成时，会触发 onLaunch（全局只触发一次;
		2. onShow  生命周期函数--监听小程序显示	当小程序启动，或从后台进入前台显示，会触发 onShow;
		3. onHide  生命周期函数--监听小程序隐藏	当小程序从前台进入后台，会触发 onHide
		4. onError  错误监听函数	当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息

		开发者可以添加任意的函数或数据到 Object 参数中，用 this 可以访问
		微信提供getApp()方法,在其他组件中可以通过getApp()获取到app组件的实例,进而可以访问全局的数据

		- navigateTo, redirectTo 只能打开非 tabBar 页面。
		- switchTab 只能打开 tabBar 页面。
		- reLaunch 可以打开任意页面。
		

- Page()

		Page()方法是组件页面的方法,主要获取和设置当前页面的实例
		1. data 页面的初始数据
		2. onLoad 生命周期函数--监听页面加载
		3. onReady 生命周期函数--监听页面初次渲染完成
		4. onShow 生命周期函数--监听页面显示
		5. onHide 	生命周期函数--监听页面隐藏
		6. onUnload 生命周期函数--监听页面卸载
		7. onPullDownRefresh 页面相关事件处理函数--监听用户下拉动作
		8. onReachBottom 页面上拉触底事件的处理函数
		9. onShareAppMessage 用户点击右上角转发
		10. onPageScroll 页面滚动触发事件的处理函数
		11. onTabItemTap 当前是 tab 页时，点击 tab 时触发

		开发者可以添加任意的函数或数据到 object 参数中，在页面的函数中用 this 可以访问

		- getCurrentPages() 获取当前页面栈的实例


##  视图层
类似vue,视图中通过{{info}}的形式在视图中渲染页面数据

- wx:for

		wx:for 用于控制渲染数组或对象的数据,index默认数组当前的下标变量名. item默认为当前项的数据对象变量名;

		使用 wx:for-item  可以指定数组当前对象的变量名;
		使用 wx:for-index  可以指定数组当前下标的变量名;

- wx:if

在框架中,使用wx:if="{{}}"来判断是否需要渲染该代码块;

也可以用 wx:elif / wx:else 来添加另外一块的代码

##  模板
WXML提供模板（template），可以在模板中定义代码片段，然后在不同的地方调用。

###  定义模板

		<template name='my-html'> 自定义的模板 </template>

###  调用模板

		<template is='my-html'/>

 - import
	
		import可以在该文件中使用目标文件定义的template;

		<import src="item.wxml"/>
		<template is="item" data="{{text: 'forbar'}}"/>

 - include

		include 可以将目标文件除了 <template/> <wxs/> 外的整个代码引入，相当于是拷贝到 include 位置
		
		//index.html文件中
		<include src="header.wxml"/>
		<view> body </view>
		<include src="footer.wxml"/>
		//header.wxml文件中定义
		<view> this is header </view>
		//footer.wxml文件中定义
		<view> this is footer </view>

##  组件

与其他前端框架类似,小程序也有自己的自定义组件;

###  自定义组件

https://www.jianshu.com/p/8a2a730d9e60

1.  在跟目录下,创建一个保存组件的文件夹
2.  在组件的json文件中,进行组件的配置`{"component":true,"usingComponent":{}}`;
	在wxml中编写视图层的结构,

3.  在其他wxml中,需要引用组件的话,在对应页面的.json文件中引入组件 `{"usingComponents":{"dialog": "/components/Dialog/dialog"}}`

	然后再wxml中通过 <dialog  title='我是标题' content='恭喜你，学会了小程序组件' ></dialog>编写引入组件并且向组件传入参数

##  wxss

  		以iphone6为准  1px = 2rpx;
	







##  事件冒泡

使用bind绑定事件会发生事件冒泡;catch不会发生事件冒泡;

- 组件事件中定义的数据

		使用data- 关键字的形式向事件中传递自定义的数据,<view data-alphaBeta="2" bindtap="bindViewTap"> DataSet Test </view>

		在自定义事件中,bindViewTap(e){},通过e.currentTarger.dataset.alphabeta 来获取;

#   MIP
https://www.mipengine.org/
https://www.mipengine.org/doc/02-what-is-mip.html
##  什么是MIP
MIP(mobile instant pages),移动网页加速器,是一套应用于**移动端**网页的开放性技术标准,通过提供MIP-HTML规范\MIP-JS运行环境以及MIP-cache页面缓存系统,实现移动网页加速;

MIP主要有三部分组成:

- MIP HTML
- MIP JS
- MIP Cahce 

#  Axios

https://www.kancloud.cn/yunye/axios/234845

#  ES6

http://es6.ruanyifeng.com/#docs

ES6一共有6种生命变量的方法:let/const/import/class/function/var

#  设置文字超出之后变为省略号

white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;

#  div盒子拥有失去焦点事件

`<div tabindex="0"></div>`

#  SVG

		<svg width="100%" height="100%" version="1.1"></svg>

SVG代码以<svg>元素开始,包括开启标签和关闭标签</svg>. 这是根元素.width和height属性可设置此SVG文档的宽度和高度. version属性可定义所使用的SVG版本;

		<circle cx="" cy="" r="" stroke="black" stroke-width="2"  fill="red">

circle用来创建一个圆,cx和cy属性定义圆心坐标;


# React

核心库: react/react-dom

特点: 虚拟DOM操作  diff算法  单项数据流

JSX语法 是将javascript + html 结合起来的一种语法糖,JSX不能直接运行, 是被babel-loader翻译之后才能被浏览器识别,在JSX中的标签必须有一个根标签包裹着,并且标签应该是包裹着的!

React要求自定义组件必须是大写字母开头;
React要求自定义组件的类必须继承于 React.Component类

闭包中的值变化不会引起视图变化


- 渲染视图组件

ReactDOM.render({
	<h2>welcome to React!</h2>,
	docuemnt.getElementById('')
});



参数: 1.需要渲染的页面html; 2.页面的挂载点 

- 创建组件

var R_component = React.createClass({
	render:()=>{
		return (<h2>weicome top React component!</h2>)
	}
});

- 组件调用

ReactDOM.render({
	<R_component />,
	document.getElementById(')
})

- React的状态管理

1. Class app extends react.componnet {
    construtor:{
		this.state = {
			checked:false
		}
     }

	//或者
	getInitalState()=>{
		return {
				checked:false
			}
	}
}

2. var R_component = React.creatClass({
	getInitalState:()=>{
		return:{
			checked:false
		}
	},
	reder:()=>{
		return (
			<div class="{ this.state.checked ? 'active' : '' }"></div>
		);

	}
});
	 

状态管理在方法参数中使用 getInitalState() 函数来返回初始的状态,
调用状态的时候使用 { this.state.checked } 来调用定义的状态;

改变状态 通过 `this.setstate()` 方法去改变对应的属性!

ref 属性 指定元素 ,在其他js函数中,通过 this.ref.指定的元素.属性 获取对应元素的数据!


- React 向子组件中传参

    如果父组件向子组件传值,使用自定义属性向子自组件传递参数;  <myCom params='lee'></myCom>
	
1. 在子组件中,展示从父组件中传过来的值; 通过`{this.props.params}`来调用从父组件传过来的自定义参数;
2. 在子组件中的构造器中,**第一个参数**即为调用组件传递的参数 

		`Class app extends react.component {
			constructor(props){
				console.log(props.params);
			}
		}`
	

- React 子组件向父组件传参

	如果需要自组件向父组件传参,需要父组件向子组件中传递一个函数,在子组件中向改函数传递需要传递的参数,通过函数传递参数的方式向父组件传参!
	
	父组件中:
	1. `<myCom  fn={ this.fn }></myCom>`
	2. 在定义的组件类中,定义一个fn的函数来接收子组件传递过来的参数

	子组件中:
	通过this.props.fn 调用父组件传递过来的函数并传递参数

	
- React 框组件传参

	在最上层的组件中,通过`getChildContext(){}`方法返回设置一个需要向后代组件传递的参数,并通过类的原型给child的类型设置值;

	getChildContext(){return:{ a:565656 }}, Class.childContextTypes = {a:PropTypes.number.isRequred };
	
	1. 在需要调用从祖先组件传递过来参数的组件中

		通过构造器中的**第二个参数获取从祖先组件传递过来的组件**

		construtor(prop,context){
			console.log(context);
		};

	2. 在组件内部, propTypes对象中可以定义组件参数的格式和是否必须

		propTypes:{
			title:React.PropTypes.string.isRequired
		}

		表示的是调用改组件的时候,title属性参数是必须的,而且必须是字符串类型;否则会在控制台上报错


		
- React 获取真实的Dom节点

	组件并不是真实的DOM节点, 而是存在于内存之中的一种数据结构,叫做虚拟DOM,只有当它插入文档以后,才会变成真实的DOM;如果需要在组件中获取真实的DOM节点,需要用到ref属性;

	1. jsx中的元素设置ref属性
	
	`<input type='text' ref='myText'><span onClick='{ this.handleClick }'></span>`

	2. 设置点击事件获取到input的真实DOM节点

	`handleClick:function(){  this.ref.myText.focus()  }`

	
	获取真实节点的步骤,1.在html结构中需要获取节点的元素上设置ref属性,并设置属性名; 2. 通过 this.ref.[refName] 获取就能返回真实的DOM节点;


- React 组件的生命周期

	1. Mounting: 已插入真实 DOM
	2. Updating: 正在被重新渲染
	3. Unmounting: 已移除真实DOM