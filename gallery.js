const photo = document.getElementById("photo");
const message = document.getElementById("message");

const images = [
  "https://i.ibb.co/XxDJ9yVd/MG-3332.jpg",
  "https://i.ibb.co/zThZQkfb/MG-3065.jpg",
  "https://i.ibb.co/gsRB41c/D405-D3-A3-B984-44-D7-988-B-9178363-B7697.jpg",
  "https://i.ibb.co/TBxBnwNG/MG-2378.jpg",
  "https://i.ibb.co/Q72RKkym/MG-2221.png",
  "https://i.ibb.co/SwsxZpJm/MG-2211.jpg",
  "https://i.ibb.co/mLwZZCz/MG-2092.jpg",
  "https://i.ibb.co/KzS2Zk8K/MG-2086.jpg",
  "https://i.ibb.co/WNkkJbyp/MG-2027.jpg"
];

const texts = [
  "Hər dəfə sənə baxanda ürəyim daha sürətli döyünür... ❤️",
  "Sənin gülüşün mənim ən sevdiyim mənzərədir. ✨",
  "Həyatımın ən gözəl təsadüfü səni tanımağım oldu. 💖",
  "Səninlə keçirdiyim hər an mənim üçün çox dəyərlidir. 🥰",
  "Sən həyatımı gözəlləşdirən insansan. 🌹",
  "Sənin yanında özümü xoşbəxt hiss edirəm. ❤️",
  "Gələcəyimi səninlə birlikdə xəyal edirəm. 💍",
  "Səni hər gün daha çox sevirəm. 💕",
  "İndi isə sənə ürəyimdə saxladığım ən vacib sualı verməyin vaxtıdır... ❤️"
];

let index = 0;

// İlk şəkil və mətn
photo.src = images[0];
message.innerHTML = texts[0];

function changePhoto() {

    photo.style.opacity = "0";
    message.style.opacity = "0";

    setTimeout(() => {

        index++;

        if (index >= images.length) {

            document.body.style.transition = "opacity 1.5s";
            document.body.style.opacity = "0";

            setTimeout(() => {
                location.href = "letter.html";
            }, 1500);

            return;
        }

        photo.src = images[index];
        message.innerHTML = texts[index];

        photo.style.opacity = "1";
        message.style.opacity = "1";

    }, 700);
}

setInterval(changePhoto, 6000);