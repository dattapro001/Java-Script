//alert("hello world")
let year = 21
console.log(year);

const age = 2001
console.log(age);
//string
console.log('this is a string');
let string = 'mugdho datta'
console.log(string);

//string concatination(adding)
let name1='Rittika'
let name2='Paul'
let fullname=name1+" "+name2
console.log(fullname);

//print particuler letters
console.log(fullname[0]);//just print R

//string length
console.log(fullname.length);

//string method
let result=fullname.toUpperCase()
console.log(result);

//more methods
let email='dattapro001@gmail.com'
let index = email.indexOf('@')//using fuction count index number
console.log(index);

let output=email.slice(0,10)//print 0-10 letters
console.log(output);

//math operation
let redius =10
const pi=3.14
let circle=pi*redius**2
console.log(circle);

let like=10
like=like +20
console.log(like);

//concatenation way
let feeling = ' love ';
let who= ' Rittika '
let date=' 18 April '
let gf ='Mugdho' +feeling+ 'the girl name' +who+ 'from the year' +date+ 'And still goes on';
console.log(gf);

//Array
let ninjas=['nugdho','Rittika','chinmoy'];
console.log(ninjas);
//overwrite the value
ninjas[1]='Bristy';
console.log(ninjas);

//Array method
let java=ninjas.join('-');
console.log(java);
//adding two array using concat
let add=ninjas.concat(['mrinmoy','chinmoye']);
console.log(add);
//push pop into array
let push=ninjas.push('baby');
console.log(ninjas);
let pop=ninjas.pop();//pop the baby
console.log(ninjas);

//boolean comparison
console.log(true, false,);//those are boolean
console.log('true','false');//those are string

//methods can return booleans
let em='dattapro001@gmail.com';
let print=em.includes('@');//if @ there then print true else print false
console.log(print);
let print2=em.includes('!');
console.log(print2);

//boolean comparison operators
let year1=2001;
console.log(year1==2001);
console.log(year1==2004);
console.log(year!=2002);
console.log(year>20);
console.log(year<30);