const yes = document.getElementById("yes");
const no = document.getElementById("no");

// Xeyr düyməsi qaçsın
no.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    no.style.position = "absolute";
    no.style.left = x + "px";
    no.style.top = y + "px";

});

// Telefon üçün
no.addEventListener("touchstart", (e) => {

    e.preventDefault();

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    no.style.position = "absolute";
    no.style.left = x + "px";
    no.style.top = y + "px";

});

// Bəli düyməsi
yes.addEventListener("click", () => {

    document.body.innerHTML = `
    <div style="
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        height:100vh;
        text-align:center;
        color:white;
        background:linear-gradient(135deg,#ff2d75,#7b2cff);
        padding:20px;
    ">
        <h1 style="font-size:55px;">🎉❤️</h1>

        <h2>Məni dünyanın ən xoşbəxt insanı etdin!</h2>

        <p style="font-size:22px;margin-top:20px;">
        Səni çox sevirəm, İnci ❤️
        </p>
    </div>
    `;
});