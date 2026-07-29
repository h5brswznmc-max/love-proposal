const yes = document.getElementById("yes");
const no = document.getElementById("no");
const success = document.getElementById("success");

no.addEventListener("mouseenter", move);
no.addEventListener("touchstart", (e)=>{
    e.preventDefault();
    move();
});

function move(){

const x=Math.random()*(window.innerWidth-120);

const y=Math.random()*(window.innerHeight-60);

no.style.position="fixed";
no.style.left=x+"px";
no.style.top=y+"px";

}

yes.onclick=()=>{

document.querySelector(".container").style.display="none";

success.style.display="flex";

createHearts();

};

function createHearts(){

setInterval(()=>{

const h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="fixed";

h.style.left=Math.random()*100+"vw";

h.style.bottom="-30px";

h.style.fontSize=(20+Math.random()*30)+"px";

h.style.animation="fly 5s linear forwards";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},5000);

},200);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes fly{

0%{

transform:translateY(0);

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

`;

document.head.appendChild(style);