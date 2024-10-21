var timeSpawn = 2;
var time = 30;
var score = 0;
var diff = 1;
var a = 0;
var mole = Math.floor(Math.random()*9);
var arr = [document.querySelector("#c1"), document.querySelector("#c2"), document.querySelector("#c3"), 
document.querySelector("#c4"), document.querySelector("#c5"), document.querySelector("#c6"), 
document.querySelector("#c7"), document.querySelector("#c8"), document.querySelector("#c9")];
function spawn() {
   timeSpawn = Math.random()*diff;
   randEl()
}
function randEl(argument) {
   mole = Math.floor(Math.random()*9);
}
function clickBtn(e){

if (document.getElementById(e.id).innerHTML == "@") {
   document.getElementById(e.id).innerHTML = "-";
   score += 1;
   document.getElementById("sc").innerHTML = "Очки: "+ score;
}
}
var x = setInterval(function() {
      time-=1
      timeSpawn-=1;
      if (timeSpawn <= 0) {
      arr[mole].innerHTML = "@";
      spawn()
   }
   console.log(a)
   if (score > 3) arr[mole].innerHTML = "@"; spawn();
   if (score > 10) arr[mole].innerHTML = "@"; spawn();
   if (score > 20) arr[mole].innerHTML = "@"; spawn();
   if (score > 30) arr[mole].innerHTML = "@"; spawn();
   if (score > 40) arr[mole].innerHTML = "@"; spawn();
   if (score > 50) arr[mole].innerHTML = "@"; spawn();
   if (score > 60) arr[mole].innerHTML = "@"; spawn();
   if (score > 70) arr[mole].innerHTML = "@"; spawn();
   document.getElementById("tm").innerHTML = "Время: "+ time;
   if (a == 9) {
      clearInterval(x);
      alert("Кроты победили. Начать снова?"); 
      window.location.reload();
   } 
   if (time <= 0) {
      clearInterval(x)
      alert("Игра окончена. Начать снова?");
      window.location.reload();
   }
   // if (arr.includes("-") == false) {
   //    clearInterval(x); alert("Игра окончена. Начать снова?"); window.location.reload();
   // }
}, 1000);
if (score > 3) diff += 2;
if (score > 10) diff += 4;
if (score > 20) diff += 6;
if (score > 30) diff += 8;
if (score > 40) diff += 10;


