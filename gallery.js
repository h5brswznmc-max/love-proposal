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
    "Sənin gülüşün bütün günümü işıqlandırır. ✨",
    "Səninlə keçən hər an mənim üçün çox dəyərlidir. 💖",
    "İndi isə sənə ürəyimdəki ən vacib sualı vermək istəyirəm... ❤️"
];

let index = 0;

setInterval(() => {
    index++;

    if (index >= photos.length) {
        window.location.href = "letter.html";
        return;
    }

    photo.src = photos[index];
    message.textContent = texts[index];

}, 5000);