const photo = document.getElementById("photo");
const message = document.getElementById("message");

const photos = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg"
];

const texts = [
    "Səni tanıdığım gündən həyatım daha gözəl oldu. ❤️",
    "Hər gülüşün mənim üçün ən qiymətli hədiyyədir. ✨",
    "Səninlə keçən hər an yaddaşıma ən gözəl xatirə kimi həkk olunur. 💖",
    "Bu gün sənə ürəyimdəki ən səmimi sualı vermək istəyirəm... ❤️"
];

let i = 0;

function nextPhoto() {
    photo.style.opacity = "0";
    message.style.opacity = "0";

    setTimeout(() => {
        i++;

        if (i >= photos.length) {
            window.location.href = "letter.html";
            return;
        }

        photo.src = photos[i];
        message.innerText = texts[i];

        photo.style.opacity = "1";
        message.style.opacity = "1";
    }, 800);
}

setInterval(nextPhoto, 6000);