//1.定义一个数组，保存六种数据类型的名称？
var name=['数字','布尔','空','对象','数组','undefined']

//2. 定义一个对象，保存你自己的名字、年龄、爱好？
var jfsjk={
name:'张俊凯',
age: '21',
aihao:'滴滴滴',
}
console.log(jfsjk)

//3. 有一个数组：var arr = [12,43,54,43]，写代码计算数组中第1个元素和第3个元素的和？？
var arr = [12,43,54,43]
console.log(arr[0]+arr[2])

//4. 定义一个二维数组（随便放些数据进去）？
var a=[123,[456,789],258]
console.log(a)

//5.有两个变量 a 和 b ，请写代码交换这两个变量的值？
a=1
b=2
c=a
a=b
b=c
console.log(a,b)

//6. 有一个对象： var obj = {name:'tom',age:10,books:['水浒','西游']} ，写代码打印出 name 属性和 books 中第2个元素？
var obj = {name:'tom',age:10,books:['水浒','西游']}
console.log(obj.name,obj.books[1])

//7. 定义两个变量保存两个数字，然后再定义一个变量保存前两个变量的和？
var a=1
var b=2
var c=(a+b)
console.log(c)

//8. 定义一个包含多行和另一个变量值的字符串？
var ddd=`1111111114444444444
8888888888555555552
2222222222222`
var dada=`内容:${ddd}`
console.log(dada)

//9. 定义一个数组，数组中保存两个对象，然后打印数组中第二个对象的随便一个属性？
var arr=[
{
name:'tom',
age:21
},
{
name:'滴滴滴',
age:20
}
]
console.log(arr[1].age)

//10. 有一个数组：var arr = [13,54,65,23,54]，写代码计算数组中第2个元素和第4个元素的和，并把和保存到第3个元素上 
var arr = [13,54,65,23,54]
arr[2]=arr[1]+arr[3]
console.log(arr)

//11.说出下面代码的运行结果,并且解释原因:
// var name = '张三';
// var age ;
// const gender ="女";
// name = "李四"；
// console.log(name);
// console.log(age);
// gender = "男";
// console.log(gender);

//12.下列变量名哪个不正确
//var sname ;  var 1age ; var Name;
  第二个

二解答题
 // 1、数据类型有几种？               答:七种
//2、什么是对象？如何创建对象？        答:1 由多个键值对组合到一起形成的一种类型,2 使用 a={...}
//3、如何读取和修改和删除对象中的值？  答: 读取 console.log(对象名称.属性) 修改 对象名称.属性 = 修改内容 删除 delete 对象名称.属性
//4、什么时候会出现 undefined？       答: 当定义一个变量，但是没有赋值时，这个变量的值就是 undefined ，代表还没有定义值的意思
//5、什么是数组？如何创建数组？         答: 1 把同一类的数据放到一起组成一组.2  var arr=[1,2,3,4,5,6]
//6、如何获取和修改数组中的某一个值？   答: 1.console.log(属性名) 2.属性名=修改的值
//7、js变量命名有什么规范？             答：不能以数字开头，只能包含数字，字母，下划线，不能使用关键字。
//8、如何定义多行字符串？有几种方法？    答: \n  `...` 两种
//9、Boolean 类型有几个值？分别代表什么？  答: 1.两个  2.true 表示真 ，false 表示假
//10、字符串中能解析变量吗？怎么解析？    答: 1.能 2. 用`内容:${}`