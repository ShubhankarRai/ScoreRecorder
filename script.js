var B1 = document.querySelector("#b1");
var B2 = document.querySelector("#b2");
var B3 = document.querySelector("#b3");
var d = document.querySelector("#d");
var di = document.querySelector("#di");
var i = document.querySelector("input");
var sp = document.querySelector("p span");
var s = 0;
var e = 0;
var go = false;
var ws = 5;

B1.classList.add("mar");
B2.classList.add("mar");
B3.classList.add("mar");
document.body.style.backgroundColor = 'black';
B1.addEventListener("click", function(){
  document.body.style.backgroundColor = 'orange';
  if(!go){
    s++;
    if(s==ws){
      
      d.classList.add("winner");
      go=true;
    }
  }  
  d.textContent= s;

});
B2.addEventListener("click", function(){
  
  document.body.style.backgroundColor = 'indigo';
  if(!go){
    e++;
    if(e==ws){
      di.classList.add("winner");
      go=true;
    }
  }  
  di.textContent= e;
});
B3.addEventListener("click", function(){
  reset();

});

function reset(){
  document.body.style.backgroundColor = 'black';
  s = 0;
  e = 0;
  d.textContent= 0;
  di.textContent= 0;
  d.classList.remove("winner");
  di.classList.remove("winner");
  go = false;
}
i.addEventListener("change", function(){
  sp.textContent = i.value;
  ws = Number(i.value);
  reset();

})