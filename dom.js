let value=document.getElementById("text")

value.innerText="Welcome to Prepbytes";

let a=document.getElementsByTagName("h1")


a[0].innerText="Competitive coding";


let b=document.getElementsByClassName("box");

b[0].innerText="Changed by dom";

function handler(){
 let c=document.getElementsByTagName("h1")
 c[1].innerText="Hello World"

}


function changeDirection(){
 let d=document.getElementsByClassName("container");
 d[0].style.flexDirection="column";
}


let e=document.getElementsByTagName("h1")

e[2].style.color='red';
e[2].setAttribute("id","heading");