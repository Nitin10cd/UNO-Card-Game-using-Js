var card_selector = document.querySelectorAll("#newSrc");
var card_arr = Array.from(card_selector);


var public_card = document.querySelector(".cards");


var player1Arr;
var player2Arr;
console.log(card_arr.length);


// logic for giving the cards


var min = 0;
var max = card_arr.length - 1;
var diff = max - min;
var Stack1 = document.querySelector(".playerBox1");
var Stack2 = document.querySelector(".playerBox2");




var rand1;




function demo() {
  rand1 = parseInt(Math.random() * diff);


  if (card_arr[rand1].style.visibility !== "hidden") {
    let source = card_arr[rand1].getAttribute("src");
    let kolor = card_arr[rand1].getAttribute("kolor");
    let no = card_arr[rand1].getAttribute("no");
    Stack1.innerHTML += `<img kolor="${kolor}" no="${no}" src="${source}" alt="" class="src">`;
    card_arr.forEach((e, index) => {
      if (e.outerHTML === card_arr[rand1].outerHTML) {
        card_arr[index].style.visibility = "hidden";
      }
    });
  } else {
    demo();
  }
}
var rand;
function demo2() {
  rand = parseInt(Math.random() * diff);
  if (card_arr[rand].style.visibility !== "hidden") {
    let source = card_arr[rand].getAttribute("src");
    let kolor = card_arr[rand].getAttribute("kolor");
    let no = card_arr[rand].getAttribute("no");
    Stack2.innerHTML += `<img kolor="${kolor}" no="${no}" src="${source}" alt="" class="src">`;
    card_arr.forEach((e, index) => {
      if (e.outerHTML === card_arr[rand].outerHTML) {
        card_arr[index].style.visibility = "hidden";
      }
    });
  } else {
    demo2();
  }
}
function card_Distribute1() {
  for (let i = 0; i < 10; i++) {
    demo();
  }
  card_Distribute2();
  visible();
  Center();
}


function card_Distribute2() {
  for (let i = 0; i < 10; i++) {
    demo2();                            
  }
}


const  player1_Btn = document.querySelector("#oneB");
const  player2_Btn = document.querySelector("#twoB");


player1_Btn.onclick=()=>{


 player1_Btn.style.visibility="hidden";
 shild1.style.visibility = "visible";
 shild2.style.visibility="hidden"
 player2_Btn.style.visibility = "visible";


 if(Stack1.childElementCount === 0){
  alert('player1 won')
}
// logic for special cards
 if(player1_Btn.style.visibility !== "visible"){


  // For Draw 2
  if(center.lastElementChild.getAttribute("no") === "draw2"){
    Take();
    Take();
  }


  // For Draw 4
  if(center.lastElementChild.getAttribute("no") === "draw4"){
    Take();
    Take();
    Take();
    Take();
    ShowChoice();
  }


   // wild logic
   if(center.lastElementChild.getAttribute("no") === "wild"){
    ShowChoice();
  }


  // Skip logic
  if(center.lastElementChild.getAttribute("no") === "skip" || center.lastElementChild.getAttribute("no") === "reverse"){
    Hide1();
  }
 
}
}


player2_Btn.onclick=()=>{
 
  player2_Btn.style.visibility="hidden";
  shild2.style.visibility = "visible";
  shild1.style.visibility="hidden"
  player1_Btn.style.visibility = "visible";
  if(Stack2.childElementCount === 0){
    alert('player2 won')
  }
  // Logic For Special Cards
  if(player2_Btn.style.visibility !== "visible"){


    // For Draw 2
    if(center.lastElementChild.getAttribute("no") === "draw2"){
      Take();
      Take();
     
    }


    // For Draw 4
    if(center.lastElementChild.getAttribute("no") === "draw4"){
      Take();
      Take();
      Take();
      Take();
      ShowChoice();


    }


    // wild logic
    if(center.lastElementChild.getAttribute("no")=== "wild"){
      ShowChoice();
    }


      // Skip logic
      if(center.lastElementChild.getAttribute("no") === "skip" || center.lastElementChild.getAttribute("no") === "reverse"){
        Hide2();
      }
  }    
}


var btn = document.querySelector(".btn");
var takeBtn = document.querySelector(".take-Btn");
const visible = () => {
  btn.style.visibility = "hidden";
  takeBtn.style.visibility = "visible"
};


var newArr = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];
var center = document.querySelector(".midCardBox");
function Center(){
  var rand3 = parseInt(Math.random()*diff);
  if(card_arr[rand3].style.visibility !== "hidden"){
    let source = card_arr[rand3].getAttribute("src");
    let kolor = card_arr[rand3].getAttribute("kolor");
    let no = card_arr[rand3].getAttribute("no");
    center.innerHTML+=`<img kolor="${kolor}" no="${no}" src="${source}" alt="" class="src">`;
    card_arr.forEach((e, index) => {
      if (e.outerHTML === card_arr[rand3].outerHTML) {
        card_arr[index].style.visibility = "hidden";
      }
    });
  }
  else {
    Center();
  }
}
var shild1 = document.querySelector(".Shild1");
var shild2 = document.querySelector(".Shild2");


function Draw_Chance(){
  console.log("Kuch nahui")
}








function Take(){
  if(player1_Btn.style.visibility === "visible"){
    rand1 = parseInt(Math.random()*diff);
    if (card_arr[rand1].style.visibility !== "hidden") {
      let source = card_arr[rand1].getAttribute("src");
      let kolor = card_arr[rand1].getAttribute("kolor");
      let no = card_arr[rand1].getAttribute("no");
      Stack1.innerHTML += `<img kolor="${kolor}" no="${no}" src="${source}" alt="" class="src">`;
      card_arr.forEach((e, index) => {
        if (e.outerHTML === card_arr[rand1].outerHTML) {
          card_arr[index].style.visibility = "hidden";
        }
      });
    } else {
      demo();
    }
   
  }
  if(player2_Btn.style.visibility === "visible"){
    rand = parseInt(Math.random()*diff);
    if (card_arr[rand].style.visibility !== "hidden") {
      let source = card_arr[rand].getAttribute("src");
      let kolor = card_arr[rand].getAttribute("kolor");
      let no = card_arr[rand].getAttribute("no");
      Stack2.innerHTML += `<img kolor="${kolor}" no="${no}"  src="${source}" alt="" class="src">`;
      card_arr.forEach((e, index) => {
        if (e.outerHTML === card_arr[rand].outerHTML) {
          card_arr[index].style.visibility = "hidden";
        }
      });
    } else {
      demo2();
    }
  }
}


// Player Chance of player 1




setInterval(()=>{
  var rotate = Math.random();
  if(rotate>=0.5){
    var rotateP3 = Math.random()*100;
  }
  else{
    rotateP3 = -Math.random()*100;
  }
 Stack1Array = Array.from(Stack1.children);
 Stack1Array.forEach((e,index)=>{
  e.onclick = ()=>{
    if(center.lastElementChild.getAttribute("kolor") == e.getAttribute("kolor") || e.getAttribute("kolor") === "black" || center.lastElementChild.getAttribute("no") == e.getAttribute("no") ){
      let s = e.getAttribute("src");
      let k = e.getAttribute("kolor");
      let n = e.getAttribute("no");
      center.innerHTML+=`<img style=" transform:rotateZ(${rotateP3}deg)" kolor="${k}" no="${n}" src="${s}" alt="" class="src">`;
      e.outerHTML =" ";
      console.log(s)
   
    }
  }
console.log(e)
});


},1000);






// Player chance of player 2
setInterval(()=>{
  var rotate1 = Math.random();
  if(rotate1>=0.5){
    var rotateP2 = Math.random()*100;
  }
  else{
    rotateP2 = -Math.random()*100;
  }
 Stack2Array = Array.from(Stack2.children);
 Stack2Array.forEach((e,index)=>{
  e.onclick = ()=>{
    if(center.lastElementChild.getAttribute("kolor") === e.getAttribute("kolor") || e.getAttribute("kolor") === "black" || center.lastElementChild.getAttribute("no") === e.getAttribute("no")){
      let s = e.getAttribute("src");
      let k = e.getAttribute("kolor");
      let n = e.getAttribute("no");
      center.innerHTML+=`<img style=" transform:rotateZ(${rotateP2}deg)" kolor="${k}" no="${n}"  src="${s}" alt="" class="src">`;
      e.outerHTML=" ";
      console.log(s)
    }
 
  }
console.log(e)
});


},1000);




setInterval(() => {
  card_selector = document.querySelectorAll("#newSrc");
  card_arr = Array.from(card_selector);
  max = card_arr.length - 1;
  diff = max - min;
  console.log(card_arr.length);
}, 2000);


var  colorSelector = document.querySelector(".colorBtn")


const ShowChoice=()=>{
  colorSelector.style.visibility = "visible"
}


const ChooseRed = () =>{
  center.lastElementChild.setAttribute('kolor','r')
  colorSelector.style.visibility = "hidden"
}
const  ChooseGreen = () =>{
  center.lastElementChild.setAttribute('kolor','g')
  colorSelector.style.visibility = "hidden"
}
const ChooseBlue = () =>{
  center.lastElementChild.setAttribute('kolor','b')
  colorSelector.style.visibility = "hidden"
}
const ChooseYellow = () =>{
  center.lastElementChild.setAttribute('kolor','y')
  colorSelector.style.visibility = "hidden"
}


// logic for two player Reverse or Skip Card (Not for Four player)
function Hide1(){
  player1_Btn.style.visibility = "visible";
  player2_Btn.style.visibility = "hidden";
  shild2.style.visibility = "visible";
  shild1.style.visibility="hidden"
}
function Hide2(){
  player2_Btn.style.visibility = "visible";
  player1_Btn.style.visibility = "hidden";
  shild2.style.visibility = "hidden";
  shild1.style.visibility="visible"
  }
