navigator.serviceWorker.register('sw.js');
var t=document.querySelector("textarea");
var d=document.querySelectorAll("div");
var h=document.querySelectorAll("h1");
var b=document.getElementsByTagName("b");
var p=document.getElementsByTagName("p");
var u=window.location.href.split("?");
var n=new XMLHttpRequest();
var k=[];
var i=0;
var e=1;
var v;
var g;
var x;
var j;
k[0]=localStorage.getItem(0);
if(!k[0])k[0]="DEMO_KEY";
if(u[1]){
k[1]="a";
while(i<u.length-1){
l(u[i+1]);
i+=2}i=0}
while(i<localStorage.length){
x=localStorage.key(i);
if(x.includes("a")){
x=localStorage.getItem(x).split(";");
d[0].innerHTML+="<i id='"+localStorage.key(i)+"' title='"+x[2]+"'>"+x[1]+"</i><a class='translate'>"+x[0]+"</a><br>"}
else if(x>99999999999){
g=localStorage.getItem(x);
j=g.split("?");
d[4].innerHTML+="<b id='"+x+"?"+g+"' onclick='a(this.children[0]);m(this.id)'><p>0</p> "+j[0]+"</b>"}
else if(x>1)l(localStorage.key(i))
i++}
if(i==0)d[0].style.width="1px";i=1;
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
document.addEventListener("keydown",q=>{if(h[q.key-1])h[q.key-1].click()})
function o(){
x=t.value;
if(x.length==40){localStorage.setItem(0,x);z()}
else if(x.length<100){
n.open("GET","https://api.nal.usda.gov/fdc/v1/foods/search?api_key="+k[0]+"&query="+x);
x="";
n.send();
n.onload=function(){
j=JSON.parse(n.responseText);
i=0;d[4].innerHTML="<b><p>data type</p>food name ~ ingredients ~ brand owner</b>";
while(i<50){
d[4].innerHTML+="<b id='"+j.foods[i].fdcId+"' onclick='l(this.id);d[4].removeChild(this);'><p>"+j.foods[i].dataType+"</p>"+j.foods[i].description+" ~ "+j.foods[i].ingredients+" ~ "+j.foods[i].brandOwner+"</b>";
i++}}}
else{
x=x.split("Caloric Needs");x=x[1];
x=x.replace(/ND/g,'0');
x=x.replace(/B12|B6|-|[^\d-\.-,]/g,'_');
x=x.replace(/\._|,/g,'');
x=x.split("_");
x=x.filter(Boolean);
x.splice(1,0,0);
x.splice(5,0,0);
x.splice(7,0,0);
x.splice(11,0,0);
x.splice(13,0,0);
x.splice(43,1);
x.splice(46,4);
x.splice(58,2);
x[14]*=1000;
x[38]*=1000;
x[39]*=1000;
x[46]*=0.001;
x[47]*=0.001;
x[48]*=1000;
x[49]*=1000;
x[58]*=1000;
x[59]*=1000;
x[15]=0;
v=[1008,1005,1079,1003,1004,1270,1269,1051,1106,1162,1114,1175,1109,1185,1165,1178,1166,1177,1167,1180,1170,1176,1087,1098,1099,1100,1089,1090,1101,1091,1092,1103,1093,1095];
i=0;
while(i<68){
if(x[i+1]!=0)x[i+1]=(x[i+1]-x[i]).toFixed(6)*1;
j=localStorage.getItem("a"+v[i/2]).split(";");
localStorage.setItem("a"+v[i/2],j[0]+";"+x[i]*-1+";"+x[i+1]);
i+=2}z()}}
if(localStorage===null)d[0].click();
function l(x){
if(localStorage.getItem(x)){
v=localStorage.getItem(x).split(";");
d[3].innerHTML+="<b id='"+localStorage.getItem(x)+"' onclick='a(this.children[0]);c(this.id)' class='translate'><p id='"+x+"' class='notranslate'>0</p> "+v[0]+"</b>"}
else{
n.open("GET","https://api.nal.usda.gov/fdc/v1/food/"+x+"?api_key="+k[0]);
n.send();
n.onload=function(){
j=JSON.parse(n.responseText);
v=j.description;
if(j.ingredients)v+=" ~ "+j.ingredients;
if(j.brandOwner)v+=" ~ "+j.brandOwner;
g=0;
j=j.foodNutrients;
while(g<j.length){
if(j[g].amount)v+=";"+j[g].nutrient.id+";"+j[g].amount;
if(!localStorage.getItem("a"+j[g].nutrient.id))localStorage.setItem("a"+j[g].nutrient.id,j[g].nutrient.name.split('Vitamin ')+" "+j[g].nutrient.unitName+";0;0");
g++}
localStorage.setItem(x,v)
if(k[1])z();
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
while(i<j.length){
j[i].innerHTML=(j[i].innerHTML*e).toFixed(6)*1;
j[i].title=(j[i].title*e).toFixed(6)*1;
i++}i=0;
if(u[1])while(i<u.length-1){
e=u[i+2];
if(e>0)b[i/2].click();
i+=2}
e=h[1].innerHTML}
if(d[0].style.width==="100%")
d[0].style.width="100px";
else{d[0].style.width="100%";
v="for "+k[2]+" day/s:\n";
g="";
i=0;
while (i<p.length){
if(p[i].innerHTML!=0){
v+="-"+b[i].textContent+"\n";
if(p[i].id)g+="?"+p[i].id+"?"+p[i].innerHTML/100
}i++}
if(e===0){localStorage.setItem(new Date()/1,t.value+g);z()}
g=u[0]+g;t.value=v+g}}
function m(x){j=e;i=2;
x=x.split("?");
if(e===0)localStorage.removeItem(x[0]);
else{
while(i<x.length){
e=(x[i+1]*j).toFixed(6)*1;
document.querySelector("[id='"+x[i]+"']").click();
i+=2}e=h[1].innerHTML}}
function a(x){x.innerHTML=x.innerHTML*1+e*100;if(e===0)d[3].insertBefore(x.parentNode,b[0])}
function f(x){window.open(x)}
function z(){location.reload()}
