const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const success = document.getElementById("success");

// Xeyr düyməsi qaçır
function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});

// Bəli düyməsi
yesBtn.addEventListener("click", () => {

    document.querySelector(".container").style.display = "none";

    success.style.display = "flex";

    createHearts();

});

// Ürəklər
function createHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.bottom="-30px";
        heart.style.fontSize=(20+Math.random()*30)+"px";
        heart.style.pointerEvents="none";
        heart.style.animation="fly 5s linear forwards";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },5000);

    },250);

}

// Animasiya
const style=document.createElement("style");

style.innerHTML=`

@keyframes fly{

0%{
transform:translateY(0) scale(1);
opacity:1;
}

100%{
transform:translateY(-120vh) scale(1.8);
opacity:0;
}

}

`;

document.head.appendChild(style);