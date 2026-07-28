const start = document.getElementById("start");
const music = document.getElementById("music");

start.addEventListener("click", () => {

    // Düyməni deaktiv et
    start.disabled = true;
    start.innerHTML = "❤️ Sənin üçün... ❤️";

    // Musiqini başlat
    music.play().catch(err => console.log(err));

    // Kiçik animasiya
    document.body.style.transition = "1.5s";
    document.body.style.opacity = "0";

    // 2 saniyə sonra qalereyaya keç
    setTimeout(() => {
        window.location.href = "gallery.html";
    }, 2000);

});