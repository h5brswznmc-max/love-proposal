const start = document.getElementById("start");
const music = document.getElementById("music");

start.addEventListener("click", () => {

    music.play().catch(() => {});

    setTimeout(() => {
        window.location.href = "gallery.html";
    }, 1000);

});