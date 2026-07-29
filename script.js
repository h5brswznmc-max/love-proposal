const start = document.getElementById("start");
const music = document.getElementById("music");

start.addEventListener("click", async () => {

    start.disabled = true;
    start.innerHTML = "❤️ Hazır ol... ❤️";

    music.volume = 0.6;

    try {
        await music.play();
    } catch (e) {
        console.log(e);
    }

    document.body.style.transition = "1.5s ease";
    document.body.style.filter = "brightness(0)";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "gallery.html";
    }, 1500);

});