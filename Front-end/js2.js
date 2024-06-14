// console.log("start");
// function abc(x){
//     console.log(x*2);
//     temp(x/2);

// }
// abc(8)
// console.log("Mid");
// function temp(x){
//     console.log(x/2);

// }

// console.log("end")

///////////////////////////////////// CALLBACKS AND  PROMISES  ////////////////////////////////

// const button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', cb);
// function cb(){
//     console.log('button clicked');
// }


// const input = document.getElementsByTagName('input')[0]

// const cb = function abc(ev){
//     console.log('input is' , ev.target.value) ;
//     }
// input.addEventListener('keyup',cb)

////////// timeout ////////////////

// console.log("start")
// const delay = 2000;
// const cb = () =>{
//     console.log( " cb called")
// }

// setTimeout(cb ,delay);
// console.log('end')




// console.log("start")

// setTimeout(()=>{
//     console.log('cb called');

//     setTimeout(()=>{
//         console.log(' internal cb called');
// },10000 );
// },10000);
// console.log('end');



// console.log("start");
// setTimeout(()=>{
// console.log("a");
// },0);
// console.log("mid")
// function abc() {
// console.log("B");
// }
// function efg() {
// console.log("C");
// setTimeout(()=>{
//     console.log('D')
// },0);
// }
// setTimeout(abc,0);
// efg();
// console.log("end")



// const pr = fetch('https://api.github.com/user/likbalpande');
// console.log(pr)

// const cb = ()=> {
//     console.log('cb called');


// }
// const cb1 = ()=> {
//     console.log('catch block');
// }
// pr.then(cb).catch(cb1);






//  const pr = fetch('https://api.github.com/users/likbalpande');

// pr.then((res) => {
// const pr2 = res.json();

// pr2.then((data)=>{
//     console.log(data);
// });
// }).catch((e) =>{
// console.log('fetch - ', e)
// });


// const request1 = fetch("https://dummyjson.com/products");

// request1.then((result)=>{
//     const convertData = result.json();
// convertData.then(renderUI);
//  convertData.then((data) =>{
//     console.log(data)

// });
// }).catch((error)=>{
// alert("u have error")
// })


// const renderUI =(data) =>{
    // console.log("****************************************************", data);
// const products = data.products;
// console.log(products);
// }


// const root  = document.getElementById('root');
// const request=fetch("https://dummyjson.com/products");

// request.then((result)=>{
//    const convertData = result.json();
// convertData.then(renderUI);
// convertData.then((data) =>{
//     console.log(data)

// });
// }).catch(( error )=>{
// alert("u have error")
// })


// const renderUI =(data) =>{

// const products = data.products;
// for(let i=0;i<products.length;i++){
//     const card = document.createElement('div');
//     card.className = 'product-card';
//     card.innerHTML = `<h3> ${products[i].title} <h3>
//      <p>${products[i].price }</p>`;
//     root.appendChild(card);
// }
// };
