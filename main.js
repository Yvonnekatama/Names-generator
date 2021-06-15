let button=document.getElementById("button");
let generate=document.getElementById("generate");
let names=["Mercy","Shadya","Yvonne","Nelly","Rirri","Keera","Maiah","Eunice","Michelle",
"Violet","Olivia","Ema","Ava","Charlotte","Sophia","Amelia","Isabella",
"Mia","Layla","Adalyn","Savannah","Addison","Willow","Madison","Emily","Elena"];
button.addEventListener("click",function(){
var newName=names[Math.floor(Math.random()* names.length)]
generate.innerHTML=newName;
})
