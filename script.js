const start = document.getElementById("start");
const music = document.getElementById("music");
const glass = document.querySelector(".glass");

window.onload = () => {
    glass.style.opacity = "0";
    glass.style.transform = "translateY(50px)";

    setTimeout(() => {
        glass.style.transition = "1.2s ease";
        glass.style.opacity = "1";
        glass.style.transform = "translateY(0)";
    }, 300);
};

start.addEventListener("click", async () => {

    start.disabled = true;
    start.innerHTML = "❤️ Hazır ol... ❤️";

    try{
        await music.play();
    }catch(e){}

    document.body.style.transition = "1.5s ease";
    document.body.style.filter = "brightness(0)";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "gallery.html";
    },1500);

});