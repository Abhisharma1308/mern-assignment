// // // console.log("working.....")
// // // //declaration
// // // var age= 18;
// // // //assignment  / initialization
// // // console.log(age);
// // // //re-assignment
// // //   age=19;
// // //   console.log(age)
// // //   //re-declaration
// // //  var age= 120;
// // //  console.log(age)
// // //  function abc(){
// // //     var name="abhishek"
// // //     console.log(age)
// // //     console.log(name)
// // //  }
// // //  abc()


// // // let v1 ='10';
// // // let v2 = 10 ;
// // // if(v1==v2){
// // //    console.log("YES")
// // // }else{
// // //    console.log("NO")
// // // }
// // // if(v1===v2){
// // //    console.log("YES")
// // // }else{
// // //    console.log("NO")
// // // }
// // // typeof(v1)
// // // console.log(typeof(v1))

// // ////////////////////////// concatenate   ///////////////////////////
// // // let v1 = "Ajay";
// // // let v2 = "kumar";
// // // let r = v1 + ' ' + v2
// // // console.log(r);

// // //////////////////////////  functions ///////////////////////////

// // // function definition 
// // // with function keyword

// // function HelloWorld(x){
// //    console.log ("Hello",x);
// // }
// // //function invocation
// // HelloWorld("ajay");

// // // function assignment 

// // const pH = function HelloWorld(x){
// //    console.log ("Hello",x);
// // }
// // pH("hehehe")



// // // anonymous function

// // const pHi = function (x){
// //    console.log ("Hello",x);
// // }
// // pHi("hehehe")



// // // arrow function assignment

// // const pHii  = (x) => {
// //    console.log ("Hello",x);
// // }
// // pHii("hehehe")



// // function sum(a,b){
// // const ans = (a+b);
// // console.log(ans);
// // }
// // sum(10,40)

// //  sum1=(a,b) => {
// //    let ans = (a+b);
// //    console.log(ans);
// //    }
// //    sum1(10,60)



// // if / else

// // function hihe(x,y){
// //    if(x === undefined && y===undefined){
// //       console.log(0);
// //    }else if(y===undefined){
// //       console.log(x)

// //    }
// //    else{
// // console.log(x+y)
// //    }
// // }

// // hihe();
// // hihe(10);
// // hihe(10,20);


// // giving default value

// // function sumNum(a=0, b=0){
// //    console.log(a+b);
// // }
// // sumNum(10);
// // sumNum(10,20);
// // sumNum();


// // const obj1 = new Object();
// // const obj2 = {};
// // obj1.name = 'Abhishek';
// // obj2.city = 'Delhi';
// // console.log(obj1);
// // console.log(obj2);


// // const obj3 = {
// //    namee : "Ajay",
// //    "age" : 30,
// //    10 : "ten",
// //    "city" : "jaipur",
// //    20:200
// // } 
// // console.log(obj3)
// // console.log(obj3.namee);
// // console.log(obj3[20]);

// // const input = prompt();
// // console.log(obj[input]);


// ///////////////////// array  //////////////////////////
// // const arr = new Array();
// // const arr1 = ["abhi",12,"200"];
// // console.log(arr1);
// // console.log(arr1[0]);
// // console.log(arr1[2]);


// ////////////////////// loosely and strictly equal too /////////////////////////

// // primitive


// // const o1 ={
// //    name : 'Aman',
// // }
// // o1.name = "ddd"
// // const o2 =  o1;
// // o2.name = "raaj"
// // console.log(o1)
// // console.log(o2)

// // non primitive

// // let u1 = "Ak";
// // let u2 = u1;
// // u2="raj";
// // console.log(u1);
// // console.log(u2);


// // for in work for every one
               
// // for of not work for every one  --->  only work when the values are iterable




// // const s2 = document.getElementsByTagName('section')
// // const secondSection = s2[1];
// // const tittle =secondSection.getElementsByTagName('h4')
// // tittle[0].innerText="Js callbacks"


// // const tittle = document.getElementsByTagName('section') [1].getElementsByTagName('h4')
// // tittle[0].innerText="Js callbacks 123"

// // const tittle = document.querySelector('section:last-type-of>h4');
// // tittle.style.color = 'brown'
// // tittle.className= 'cs2'


// const p = document.createElement("p");
// p.innerText= 'New line from dom';
// const sec =document.getElementsByTagName('section')[0];
// // sec.appendChild(p);
// sec.prepend("hello..................................."); ////// it will come at first
//  sec.append("hello!!!!");                                ////// it will come at last



// // const parent = document.getElementsByTagName("div");
// // parent.addEventListener = 

// // function printHello(){
// //    console.log("hello...!")
// // } 
// // // function inputClicked(e){
// // //    console.log("Clicked....!")
// // // } 
// // function inputKeydown(e){
// //    console.log("inputKeydown",e);
// //    console.log(e.target.value);
// // } 
// // function inputKeyup(e){
// //    console.log("inputKeyup",e);
// //    console.log(e.target.value);
// // } 
// // function inputChanged(e){
// //    console.log("Changed",e);
// //    console.log(e.target.value);

// // } 

// // function handleUserName(e){
// //    console.log("Name :",e.target.value);

// // }

// // function handleUserAge(e){
// //    console.log("Age :",e.target.value);
 
// // }
// // function handleSubmit(e){
// //    e.preventDefault();
// //    console.dir(e.target);
// //    const form = e.target;
// //    const UserName = form[0].value;
// //    const UserAge = form[1].value;

// //    if(UserAge<30){
// //       console.log("age is perfect");

// //    }
// //    else{
// //       console.log("Change age");
// //    }

// // }

// // const handleSubmit =(e)  => {
// //    e.preventDefault();
// //    const arr =e.target;
// //    const name = arr[0].value;
// //    const email = arr[1].value;
// //    const form = document.getElementById("form")[0];
// //    FormData.style.Display="none";
// //    renderCard(name, email);
// // }
// // const renderCard = (n, e) =>{
// // const root = document.getElementById("root");
// // root.setAttribute('class','card');
// // root.innerHTML=
// // <h3 class='name'> Name is : $(n)   </h3>;

// // <h4 class='email ' > email is : $(e)</h4>;

// // }  chcek agaainnnn


// //////////////////////////////////////// next functions //////////////


// // const showResult = (res) => {
// //    console.log(res);
// //    const root =document.getElementById("root")
// //    root.innerText = res;

// // }
// //  const sum=(a,b) =>{
// //    const res = a+b;
// //    showResult (res);
// //  }
// //  const mul=(a,b) =>{
// //    const res = a*b;
// //    showResult (res);
// //  }

// // another method

// // const showResult = (res) => {
// //    // console.log(res);
// //    const root =document.getElementById("root")
// //    root.innerText = res;

// // }
// // const prettyPrint = (res) => {
// //    // console.log(res);
// //    const root =document.getElementById("root")
// //    root.style.color= 'yellow'
// //    root.innerText = res;

// // }
// //  const sum=(a,b,fn) =>{
// //    const res = a+b;
// //    fn(res);
// //  }
// // const rr = sum(10,20, prettyPrint)
// // not done

// // another one example

// // function payWithPaytm() {

// //    console.log('Payment Processing with paytm...');
// // }

// // function payWithGpay() {
// //    console.log('Payment Processing with Gpay...');
// // }
// // const userDetails = (name ,age , seat, processingPayment ) => {
// // console.log(`booking for 
// //    ${name} whose age is ${age} `);


// // if(true){
// //    processingPayment();
// // }
// // else{
// //    console.log('Error')
// // }
// // };

// // userDetails('Abhi', 21 , 'SL' ,payWithGpay);




// //////////////////////////////   array   ///////////////////////////////////


// // const arr = ["Banana", "Apple", "Mango"];
// // const printValues =  (a,b,c) =>{
// // console.log('value is: ' , a);
// // console.log('index is: ' ,b);
// // console.log('array is: ' , c);
// // console.log("---------")
// // }
// // for(let i =0 ; i<Array.length ; i++){
// //    printValues (arr[i], i, arr);
// // }
// //// arr.forEach(printValues)


// // const arr = [21,12,23]
// // let sum = 0 ;
// // arr.forEach((a) => {
// //    sum+=a;
// // });
// // console.log(sum)


// // const res = arr.filter((x) => {
// //    if(x%2==0) return true; else return false;
// // });
// // console.log("res:" ,  res)
// // console.log("arr:" ,  arr)


// // const words = ["happy","square","confidence"]
// // const res = words.filter((x) =>{
// //    if(x.length <=5) return true; else false;
// // });
// // console.log(res)









































