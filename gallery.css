@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    background:#000;
    overflow:hidden;
}

.gallery{
    position:relative;
    width:100%;
    height:100vh;
}

#photo{
    width:100%;
    height:100%;
    object-fit:cover;
    animation:zoom 10s linear infinite alternate;
    transition:opacity 1s ease;
}

.overlay{
    position:absolute;
    inset:0;
    background:linear-gradient(
        to top,
        rgba(0,0,0,.8),
        rgba(0,0,0,.2),
        rgba(0,0,0,.8)
    );
}

.glass-text{
    position:absolute;
    left:50%;
    bottom:40px;
    transform:translateX(-50%);
    width:90%;
    max-width:700px;

    background:rgba(255,255,255,.08);
    backdrop-filter:blur(18px);
    border:1px solid rgba(255,255,255,.15);

    border-radius:25px;
    padding:30px;

    text-align:center;
    color:white;
}

.glass-text h1{
    color:#ff4d88;
    font-size:42px;
    margin-bottom:15px;
    text-shadow:0 0 20px rgba(255,77,136,.7);
}

.glass-text p{
    font-size:20px;
    line-height:1.8;
}

#stars{
    position:fixed;
    inset:0;
    pointer-events:none;
    background-image:
      radial-gradient(2px 2px at 20px 30px,#fff,transparent),
      radial-gradient(2px 2px at 150px 180px,#fff,transparent),
      radial-gradient(2px 2px at 350px 80px,#fff,transparent),
      radial-gradient(2px 2px at 600px 250px,#fff,transparent);
    background-size:800px 400px;
    opacity:.4;
    animation:stars 60s linear infinite;
}

@keyframes stars{
    from{
        transform:translateY(0);
    }
    to{
        transform:translateY(-300px);
    }
}

@keyframes zoom{
    from{
        transform:scale(1);
    }
    to{
        transform:scale(1.12);
    }
}

@media(max-width:768px){

.glass-text{
    bottom:20px;
    padding:22px;
}

.glass-text h1{
    font-size:30px;
}

.glass-text p{
    font-size:17px;
}

}