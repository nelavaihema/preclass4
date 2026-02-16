
// // 10;
// // 20;

// // console.log(10 + 20);

// // 100 + 10;

// // // 100 places
// // 10
// // 10
// // 10 
// // 10

// // javascript variable...
// // Variable is a container used to store the data....

// // in javascript, we can declare the variables
// // 1) var keyword
// // 2) let keyword
// // 3) const keyword

// // declaration with "var"
// var firstName = "venkat"; 
// var lastname = "ram"
// console.log(firstName)
// console.log(lastname)
// // declare the variable with name called "firstName", assigned/store the value (venkat)


// // re-declaration is allowed 
// var a = 10; //we are declare variable and assigning value 10
// var a = 20;
// var a = 100;
// console.log(a)


// var name = "venkat"; //we are declare name and assign "venkat"..(init)
// name = "rama"; //re-assignment is allowed in javascript
// console.log(name)


// // // // // // // var is not the block scope 


// {
//     var value = 2000;
//     console.log(value)
// }
// console.log(value); //incase of var we can able to access outside of the block


// // 
// var x = 10;
// {
//     var x = 20;
// }
// console.log(x); //20



// // let a = 10;
// // console.log(a)


// // re-declaration is not possible in the same scope
// // let name = "rama";
// // let name = "venkat";
// console.log(name)


// // in let, re-assginment is possible
// let count = 1;
// count = 100;
// console.log(count)


// // let is the block scope
// // let a = 200
// {
//     let a = 100; //let is the block scope...let a = 100 will not be visible outside
//     console.log(a); //
// }
// console.log(a); //


// // // data type tells javascript what kind of value is stored in the given variable.

// // //javascript internally do automatic type conversion 


// // // let value = true;
// // // console.log(typeof value)

// // // in javascript data types are divided into two categories 

// // // 1) Primitive data types 

// // // a)  Number: used for intergers and floating point numbers

// // let a = 100;
// // let b = 100.5
// // console.log(typeof a, typeof b)



// // // b) string -> used to store the text...
// // //we can use either single quotes '  ' 
// // //we can use double quotes " "
// // // `    `

// // let name = "venkat";
// // let firstName = 'rama';
// console.log(typeof name, typeof firstName)


// // // c) boolean...only two values.. either true or false

// let isLoggedin = true;
// let hasPaid = false;

// console.log(typeof isLoggedin, typeof hasPaid)


// // // d) undefined... declared the variable but not assigned the value

// let y;
// console.log(typeof y)

// // // // e) null....absence of the value

// let user = null;
// console.log(typeof user); //object


// // // symbol, bigint

// // // 2) non Primitive data types / reference data types

// // // a) object -> stores key - value pair

// let person = { //curly bracket
//     name: "venkat",
//     city : {
//         pincode: "523155",
//         street: "main road"
//     }
// };

// console.log(person.name)
// console.log(person.city.street)


// // // b) array ... used to store group of values [] (square bracket)

// // // let arr = [1, 2, 3, 4, 5]

// // // c) function

// // //function defintion 

// //one function...
// function welcome() {
//     console.log("venkat");
//     console.log("ravi");
//     console.log("shiva");
//     console.log("ramaaaa")
// }

// // function call
// welcome()





// // const....redeclartion is not possible
// // const ..... reassingment is not possible
// // const ...declartion and assignment should happen in the same line

// // const a = 100;
// // const a = 300; //not possible 

// // const a = 100; 
// // a = 200;
// // console.log(a)

// // const a = 100;
// // console.log(100)


// const arr1 = [1, 2, 3, 4, 5];
// // const arr = [1, 2, 3, 4, 5, 6];
// //modifying or mutation 
// arr1.push(6); // push will insert the element at the end of the array
// console.log(arr1)
// // // arithmetic operators 

// // // addtion, sub, muliplication, division, remainder, exponentiation, increment, decrement

// // let a = 10; 
// // let b1 = 4;

// console.log(a + b1);
// console.log(a - b1);
// console.log(a * b1)
// console.log(a / b1)
// console.log(a % b1)
// console.log(a ** b1)

// a++
// console.log(a)

// b--
// console.log(b)








// // // assignment operators 

// // let x  = 20;

// // addition compound assignmnet operator

// x += 5; // x = x + 5
// console.log(x)


// // // comparison operators
// let c = 10;
// let d = "10";

// console.log(c == d); //only the value it will not type
// console.log(c === d); //value + type(equality operator)
// console.log(c != d);
// console.log(c !== d)
// console.log(c > 5); //true
// console.log(c < 5); //false
// console.log(c >=10); // true

// // // logical operators 

// // logical AND &&
// // logical OR ||
// // logical ! operator

// let isAdult = true; 
// let okLogin = false;

// true && true == true
// true && false == false
// false && true ==false
// false && false == false

// // console.log(isAdult && okLogin)


// // // string opeators 

// let one = "one item";
// let two = "2nd item";
// console.log(one +" " + two)


// // // ternary operator 
 
// // // condition ? "first statement" : "second statement"

// // // condition true = first statement
// // // condition false = second statement


// let age = 16;
// let result = age >=18 ? "Adult" : "Minor";
// console.log(result)

// // copy by value ...memory is fixed...memory will be allocated(primitive data type)

// // let a = 10; //a = 10
// // let b = a; // b = 10

// b = 20; 

// console.log(a); //10
// console.log(b); //20


// // copy by reference  (non-primitive)

// let person1 = {name: "venkat"};
// let person2 = person1;

// person2.name = "rama";

// console.log(person1.name) ; //rama
// console.log(person2.name) // rama



// let ages=16;
// if(ages>=18){
//     console.log("eligible");
// }else{
//     console.log("not")
// }

// let marks=75;
// if(marks>=90){
//     console.log("grade A");
// }else if(marks>=60){
//     console.log("grade B")
// }else{
//     console.log("Fail")
// }

// let username="hema";
// let password="123456";
// if(username==="hema" && password==="123456"){
//     console.log("sucess");
// }else{
//     console.log("not success");
// }

// let username1="hema";
// let password1="123456";

// if (username1==="hema"){
//     if(password1==="123456"){
//         console.log("login");

//     }else{
//         console.log("wrong");
//     }
// }else{
//     console.log("usename")
// }    

// let day="hema";
// switch(day){
//     case "hema":
//      console.log("mon");
//      break;
//     case 2:
//      console.log("tue");
//      break;
//     default:
//      console.log("invalid");
// }   
// let sum1=0;
// for (let i=1;i<=5;i++){
//     sum1=sum1+i;
// }
// console.log("sum of numbers", sum1);

// let sum=[1,2,3,4,4,55,6,7]
// for (let i=0;i<sum.length;i++){
//     console.log(sum[i]);
// }

// let mobiles1=["oppo","lg","tfyguh"];
// for (let key in mobiles1){
//     console.log(mobiles1[key]);
// }
// // // // Count how many numbers between 1 and 100 are divisible by 3.
// // // // Print numbers from 10 to 1 using a loop.


// let count1=0;
// for (let i=1;i<=100;i++){
//     if(i%3===0){
//         count1++
//     }
//     console.log(count1);
// }

// for (let i=10; i>=1;i--){
//     console.log(i);
// }
// let counts =0;
// for (let i=1; i<=100;i--){
//     if(i % 3===0){
//         counts++;
//     }
//     console.log(counts);
// }
// let arr=[5,10,15,20];
// // let sum1=0;
// for (let i=0;i<arr.length;i++){
//     sum1+=arr[i];
// }
// console.log(sum1);
// let max=arr[0];

//  let sum2=0;
//  for (let i=1;i<=5;i++){
//     sum=sum2+i;
//  }
//  console.log(sum2)

//  let mobiles=["oppo","vivo","dell"];


//  for (let index in mobiles){
//     // if(mobiles[index]==="vivo")
//     console.log(index);
//  }
//  let mobile={
//     name:"hg",
//     age:10
   
//  }
//   for (let key in mobile){
//         console.log(key);
//     }
// for (let mobile of mobiles){
//     console.log(mobile)
// }
//  for (let i=1;i<=10;i++){
//     if(i===2){
//         continue
//     }
//     console.log(i);
//  }

//  for(let i=0;i<mobiles.length;i++){
//     if(mobiles[i]==="vivo"){
//         console.log("order success");
//         break;
//     }
//  }

//   for(i=10;i>=1;i--){
//     console.log(i)
//   }
//   let count4=0;
//   for (let i=1;i<=100;i++){
//     if(i%3===0){
//         count4++;
//     }
//     console.log(count4);
//   }

// arr=[56,76,12,89];
// let sum3=0;
// for(let i=0;i<arr.length;i++){
//     sum3=sum3+arr[i];
// }
// console.log(sum3);

// largest=arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i];
//     }
// }
// console.log(largest);

// small=arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]<small){
//         small=arr[i];
//     }
// }
// console.log(small);

// let global="goo12345678d";
// function test(){
//     console.log(global);
// }
// test();
// function test(){
//     let global="gooeresfdd";
//     console.log(global); 
// }

// test();

// if(true){
//     var a=10;
//     // const b=50;
// }
// console.log(a);

// let message="Hema";
// // function global(){
// //     console.log(message);
// // }
// // global();


// function block(){
//     let number=45;
    
// }
// block();
// console.log(number); //error

// if(true){
//     var x=20;
//     let y=50;
// }
// console.log(x);
// console.log(y); //error

// {
//     let a=40;
//     const b=56;
//     console.log(x);
//     console.log(y);
// }


// for (var i=1;i<=3;i++){
//     console.log(i);
// }
// console.log(i);


