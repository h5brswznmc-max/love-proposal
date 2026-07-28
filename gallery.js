const photo = document.getElementById("photo");
const message = document.getElementById("message");

const photos = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg"
];

const texts = [

"Hər dəfə sənə baxanda ürəyim daha sürətli döyünür... ❤️",

"Sənin gülüşün mənim ən sevdiyim mənzərədir. ✨",

"Həyatımın ən gözəl təsadüfü səni tanımağım oldu. 💖",

"İndi isə sənə ürəyimdə saxladığım ən vacib sualı verməyin vaxtıdır... ❤️"

];

let index = 0;

function changePhoto(){

    photo.style.opacity = "0";
    message.style.opacity = "0";

    setTimeout(()=>{

        index++;

        if(index >= photos.length){

            document.body.style.transition="1.5s";
            document.body.style.opacity="0";

            setTimeout(()=>{

                location.href="letter.html";

            },1500);

            return;
        }

        photo.src = photos[index];
        message.innerHTML = texts[index];

        photo.style.opacity="1";
        message.style.opacity="1";

    },700);

}

setInterval(changePhoto,6000);