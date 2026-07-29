const start = document.getElementById("start");
const music = document.getElementById("music");

start.addEventListener("click", async () => {

    try {
        await music.play();
        music.volume = 0.6;
    } catch (e) {
        console.log(e);
    }

    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "gallery.html";
    }, 1000);

});

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
.glass{
    transition:1s;
}

body{
    transition:1.5s;
}