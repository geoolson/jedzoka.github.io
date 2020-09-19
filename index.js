navigator.serviceWorker.register('sw.js');
var k=[localStorage.getItem(0),,,"https://api.nal.usda.gov/fdc/v1/food"];
var t=document.querySelector("textarea");
var d=document.querySelectorAll("div");
var h=document.querySelectorAll("h1");
var b=document.getElementsByTagName("b");
var p=document.getElementsByTagName("p");
var u=window.location.href.split("?");
var n=new XMLHttpRequest();
var i=2;
var e=1;
var v;
var g;
var x;
var j;
k[0]=localStorage.getItem(0);
if(!k[0])k[0]="DEMO_KEY";
if(u[1]===""){
if(confirm("Apply?")){
while(i<u.length){
x=localStorage.getItem(u[i]).split(";");
localStorage.setItem(u[i],x[0]+";"+u[i+1]+";"+u[i+2]);
i+=3}}z(u[0])}i=0;
while(i<localStorage.length){
x=localStorage.key(i);
if(x.includes("a"))y(x);
else if(x>99999999999)o(x);
else if(x>1)l(x)
i++}
j=document.querySelectorAll("i");
if(j[0] && j[0].innerHTML<0)j[0].style.color="#ff6464";
while(i<j.length){
if(j[i].innerHTML<0 || j[i].title!=0){
j[i].style.color="#ff6464";
g=j[i].nextElementSibling;
v=g.nextElementSibling;
d[0].insertBefore(j[i],j[0]);
d[0].insertBefore(g,j[0]);
d[0].insertBefore(v,j[0]);}i++}
document.addEventListener("keydown",q=>{if(h[q.key-1])h[q.key-1].click();else if(q.key==="Enter"){r();r()}})
function l(x){
v=localStorage.getItem(x)
if(v!==null){
d[3].innerHTML+="<b id='"+v+"' onclick='a(this.children[0]);c(this.id)' class='translate'><p id='"+x+"' class='notranslate'>0</p> "+v.split(';')[0]+"</b>"}
else{
n.open("GET",k[3]+"/"+x+"?api_key="+k[0]);
n.send();
n.onload=function(){
j=JSON.parse(n.responseText);
if(j.error)w();
v=j.description;
if(j.ingredients)v+=" ~ "+j.ingredients;
if(j.brandOwner)v+=" ~ "+j.brandOwner;
g=0;
j=j.foodNutrients;
while(g<j.length){
if(j[g].amount)v+=";"+j[g].nutrient.id+";"+j[g].amount;
if(!localStorage.getItem("a"+j[g].nutrient.id)){localStorage.setItem("a"+j[g].nutrient.id,j[g].nutrient.name.split('Vitamin ')+" "+j[g].nutrient.unitName+";0;0");y("a"+j[g].nutrient.id)}g++}
localStorage.setItem(x,v)
if(k[1])location.reload();
l(x)}}}
function c(x){g=1;
v=x.split(";");
while(g<v.length){
x=document.querySelector("i#a"+v[g]);
x.innerHTML=(x.innerHTML*1+v[g+1]*e).toFixed(6)*1;
if(x.innerHTML<0)x.style.color="#ff6464";
else if(x.title!=0 && x.innerHTML*1>=x.title)x.style.color="#b030b0";
else x.style.color="#bbe1fa";
g+=2}g=0}
function r(){i=0;
if(!k[2]){k[2]=e;
h[2].innerHTML="--";
h[2].onclick="e*=-1";
while(i<j.length){
j[i].innerHTML=(j[i].innerHTML*e).toFixed(6)*1;
j[i].title=(j[i].title*e).toFixed(6)*1;
i++}i=0;
if(u[1]){while(i<u.length-1){
e=u[i+2];
if(e>0)b[i/2].click();
l(u[i+1]);
i+=2}
k[1]="a"}
e=h[1].innerHTML}
if(d[0].style.width==="100%")
d[0].style.width="100px";
else{d[0].style.width="100%";
x=t.value;
g=x.length;
if(g==40){localStorage.setItem(0,x);z(u[0])}
else if(g>0 && e!=0){
n.open("GET",k[3]+"s/search?api_key="+k[0]+"&query="+x);
n.send();
n.onload=function(){
j=JSON.parse(n.responseText);
i=0;d[4].innerHTML="<b><p>data type</p>food name ~ ingredients ~ brand owner</b>";
while(i<50){
d[4].innerHTML+="<b id='"+j.foods[i].fdcId+"' onclick='l(this.id);d[4].removeChild(this);'><p>"+j.foods[i].dataType+"</p>"+j.foods[i].description+" ~ "+j.foods[i].ingredients+" ~ "+j.foods[i].brandOwner+"</b>";
i++}}}
v="for "+k[2]+" days:\n";
g="";
i=0;
while (i<p.length){
if(p[i].innerHTML!=0){
v+="-"+b[i].textContent+"\n";
if(p[i].id)g+="?"+p[i].id+"?"+p[i].innerHTML/100
}i++}
x=new Date()/1;
j=t.value.split("?");
localStorage.setItem(x,j[0]+g);
g=u[0]+g;t.value=v+g;o(x)}}
function m(x){j=e;i=2;
x=x.split("?");
if(e===0)localStorage.removeItem(x[0]);
else{
while(i<x.length){
e=(x[i+1]*j).toFixed(6)*1;
document.querySelector("p[id='"+x[i]+"']").click();
i+=2}e=h[1].innerHTML}}
function o(x){
g=localStorage.getItem(x);
j=g.split("?");
d[4].innerHTML+="<b id='"+x+"?"+g+"' onclick='a(this.children[0]);m(this.id)' class='notranslate'><p>0</p> "+j[0]+"</b>"}
function s(x){
g=localStorage.getItem(x).split(";");
z(u[0]+"??"+x+"?"+g[1]+"?"+g[2])}
function f(x){g=0;x--;
n=[1114,1106,1162,1109,1185,1165,1166,1167,1170,1175,1177,1178,1176,1180,1087,1098,1099,1100,1089,1090,1101,1091,1004,1103,1095,1092,1093,1051,1005,1079,1269,1270,1003,1008];
v=[];
k.length=68;
k.fill(0,0,68);
while(g<x){
switch (g){
case 0:v=[-10,-400,-40,-4,-2.0,-0.2,-0.3,-2,-1.7,-0.1,-65,-0.4,-5,-125,-200,-0.2,-10,-110,-0.27,-30,-0.003,-100,-31,-15,-2,-400,-110,-700,-60,0,-4.4,-0.5,-9.1,0,25,600,,,,,,,,,,,,,1000,,700,,40,,,,,45,4];break;
case 1:v=[0,-100,-10,-1,-0.5,-0.1,-0.1,-2,-0.1,-0.2,-15,-0.1,-1,-25,-60,-0.02,-490,-20,-10.73,-45,-0.597,-175,1,-5,-1,-460,-260,-100,-35,0,-0.2,0,-1.9,0,13,0,,,,,,,,,,,,,500,,200,,0,,,,,15,1];break;
case 2:v=[-5,200,35,-1,-27.5,-0.2,-0.1,-2,-0.2,-0.2,-70,-0.4,-2,-50,-440,-0.12,-200,40,4,-5,-0.6,-185,30,0,0,-1140,-430,-500,-35,-19,-2.4,-0.2,-2,0,25,0,400,200,,,,10,,30,300,,,1000,1000,1,400,200,0,65,2,3000,,30,2];break;
case 3:v=[0,-100,-10,-1,-25,-0.1,-0.1,-2,-1,-0.1,-50,-0.3,-4,-50,-300,-0.1,-300,-0,-3,-50,-0.3,-40,0,-10,-2,-300,-200,-400,0,-6,-3,-0.2,-6,0,12,300,250,100,,,,5,,10,100,,,0,0,2,900,100,0,45,1,0,,60,5];break;
case 4:v=[0,-200,-20,-4,-5,-0.3,-0.3,-4,-1,-0.4,-100,-0.6,-8,-125,-300,-0.26,-1000,-30,2,-110,-0.4,-750,0,-10,-3,-200,-200,-700,0,-6,-2,-0.3,-15,0,25,800,550,300,,,,5,,20,200,,,1000,500,2,7800,300,0,240,3,1000,,130,11];break;
case 5:v=[0,-300,-30,-4,-15,-0.3,-0.4,-4,-1,-0.3,-100,-0.6,-5,-175,0,-0.19,-1000,-30,-3,-170,-0.3,0,0,-15,-3,-500,-300,-900,0,-7,-4,-0.4,-18,0,0,1100,600,200,,,,10,,20,200,,,1000,0,3,0,300,5,0,3,0,,120,11];break;
case 6:v=[0,0,-15,0,-45,0,0,0,0,0,0,0,-5,0,300,-0.01,-1000,0,3,10,-0.1,550,0,0,0,-400,0,-400,0,0,-1,0,-4,0,0,200,200,200,,,,5,,20,200,,,500,-500,2,0,200,0,0,2,0,,0,6];break;
case 7:v=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,,,,0,,0,0,,,0,0,0,0,0,0,0,0,0,,0,0];break;
case 8:v=[0,0,0,0,0,0,0,0,-0.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,3,0,0,0,0,0,0,0,0,,,,0,,0,0,,0,-500,0,0,0,0,0,0,0,,0,0];break;
case 9:v=[-5,0,0,0,0,0,0,0,0,0,0,0,0,0,-200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,,,,0,,0,0,,,0,0,0,0,0,0,0,0,-1000,,0,0];break;
case 10:v=[5,300,45,4,60,0.3,0.4,4,1,0.7,100,0.6,10,175,-100,0.2,2000,30,0,180,0.7,-550,0,15,3,1100,300,1600,0,4,4,0.6,22,0,0,-1300,-800,-400,,,,-15,,-40,-400,,,-1500,1000,-5,0,-500,-5,0,-5,1000,,-120,-17];break;
case 11:v=[0,-100,-20,-4,-15,-0.1,-0.1,-2,-1,-0.2,-100,-0.6,-5,-25,0,-0.19,-1000,-30,-7,-120,0,0,0,-15,-1,0,-300,-200,0,0,-1,-0.1,-12,0,0,1100,600,200,,,,10,,20,200,,,1000,0,3,0,300,5,0,3,0,,120,11];break;
case 12:v=[0,0,-10,0,-15,-0.1,-0.1,0,0,-0.1,0,0,-5,-25,300,-0.01,0,0,-3,50,-0.2,550,0,0,1,-300,0,-400,0,1,-1,0,0,0,0,200,200,200,,,,5,,20,200,,,500,-500,2,0,200,0,0,2,0,,0,6];break;
case 13:v=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,,,,0,,0,0,,,0,0,0,0,0,0,0,0,0,,0,0];break;
case 14:v=[0,0,0,0,0,0,0,0,0,-0.2,0,0,0,0,-200,0,0,0,10,0,0,0,0,0,0,0,0,0,0,4,1,0,0,0,0,0,0,0,,,,0,,0,0,,,0,-500,0,0,0,0,0,0,0,,0,0];break;
case 15:v=[-5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,,,,0,,0,0,,,0,0,0,0,0,0,0,0,-1000,,0,0];break;
case 16:v=[5,-50,-5,0,15,-0.3,-0.3,-4,-1,-0.4,-200,-0.2,0,-25,-100,-0.1,0,-70,-19,-80,-0.2,-550,0,-5,-4,0,0,-300,-45,-7,-2,-0.3,-25,0,0,-200,-200,-200,,,,-5,,-20,-200,,,-500,1000,-2,0,-200,0,0,-2,500,,0,-6];break;
case 17:v=[0,-20,-5,0,-15,0,0,0,0,0,0,0,0,0,300,0,0,0,0,50,0,550,0,0,1,-300,0,0,0,0,0,0,0,0,0,200,200,200,,,,5,,20,200,,,500,-500,2,0,200,0,0,2,0,,0,6];break;
case 18:v=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,,,,0,,0,0,,,0,0,0,0,0,0,0,0,0,,0,0];break;
case 19:v=[0,-430,-30,-4,15,0,-0.2,1,-1,-0.1,100,-0.2,-5,-100,-300,-0.3,0,-70,17,0,-0.6,-550,0,-10,-2,400,0,-800,-35,-1,0,0.1,0,0,0,-200,-200,-200,,,,-5,,-20,-200,,,-500,500,-2,0,-200,0,0,-2,500,,0,-6];break;
case 20:v=[0,-100,-5,0,-15,0,0,0,0,0,0,0,0,0,300,0,0,0,1,50,0,550,0,0,1,-300,0,0,0,0,0,0,0,0,0,200,200,200,,,,5,,20,200,,,500,-500,2,0,200,0,0,2,0,,0,6];break;
case 21:v=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,,,,0,,0,0,,,0,0,0,0,0,0,0,0,0,,0,0];break;}
;i=0;
while(i<34){
k[i]=(k[i]+v[i]).toFixed(6)*1;
if(v[i+34] || v[i+34]>=0)k[i+34]=(k[i+34]+(v[i]+v[i+34])).toFixed(6)*1;
i++}
g++}
e="";
i=0;
while(i<34){e+='?a'+n[i]+'?'+k[i]+'?'+k[i+34];i++}
z(u[0]+"?"+e)}
function a(x){x.innerHTML=x.innerHTML*1+e*100;if(e===0)d[3].insertBefore(x.parentNode,b[0])}
function z(x){window.location.href=x}
function y(x){
x=localStorage.getItem(x).split(";");
d[0].innerHTML+="<i id='"+localStorage.key(i)+"' title='"+x[2]+"' onclick='s(this.id)'>"+x[1]+"</i><u class='translate'>"+x[0]+"</u><br>"}
function w(){d[4].innerHTML="<h1>You have exceeded your hourly or daily call limit. Try again later or get your own <a href='https://fdc.nal.usda.gov/api-key-signup.html'>API Key</a></h1>"}
