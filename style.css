*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

html{
scroll-behavior:smooth;
}

body{
background:#06060d;
color:white;
overflow-x:hidden;
}

#loader{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:#000;
display:flex;
justify-content:center;
align-items:center;
z-index:9999;
animation:fadeOut 2.5s forwards;
animation-delay:2s;
}

.loader-content{
text-align:center;
}

.loader-content h1{
font-size:48px;
color:#ff4d88;
letter-spacing:2px;
}

.loader-content p{
margin-top:10px;
font-size:20px;
color:#ddd;
}

.loader-heart{
margin-top:20px;
font-size:60px;
animation:heart 1s infinite;
}

@keyframes heart{
0%{transform:scale(1);}
50%{transform:scale(1.3);}
100%{transform:scale(1);}
}

@keyframes fadeOut{
to{
opacity:0;
visibility:hidden;
}
}

#hero{
height:100vh;
background:url("assets/background.jpg") center center/cover no-repeat;
display:flex;
justify-content:center;
align-items:center;
position:relative;
text-align:center;
padding:20px;
}

.overlay{
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.55);
backdrop-filter:blur(3px);
}

.hero-content{
position:relative;
z-index:2;
max-width:850px;
animation:show 2s;
}

.hero-content h2{
font-size:28px;
font-weight:300;
color:#fff;
}

.hero-content h1{
font-size:78px;
margin:20px 0;
color:#ff4d88;
text-shadow:0 0 25px #ff4d88;
}

.hero-content p{
font-size:22px;
line-height:1.9;
color:#f5f5f5;
margin-bottom:40px;
}

#start{
padding:18px 45px;
border:none;
border-radius:50px;
background:linear-gradient(45deg,#ff0066,#ff4d88);
color:white;
font-size:22px;
cursor:pointer;
transition:.4s;
box-shadow:0 0 25px rgba(255,0,102,.5);
}

#start:hover{
transform:scale(1.08);
box-shadow:0 0 45px #ff0066;
}

@keyframes show{
from{
opacity:0;
transform:translateY(50px);
}
to{
opacity:1;
transform:translateY(0);
}
}

@media(max-width:768px){

.hero-content h1{
font-size:50px;
}

.hero-content h2{
font-size:22px;
}

.hero-content p{
font-size:18px;
}

#start{
font-size:18px;
padding:15px 35px;
}

.loader-content h1{
font-size:34px;
}

}
