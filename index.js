const media = window.matchMedia("(max-width:768px)");
const navbar = document.querySelector(".navbar");
const menuBars = document.querySelectorAll(".menu-bar, .menu-close");
const navLinks = document.querySelectorAll(".nav-item");
const dark=document.querySelector(".dark");
const body=document.body;
const root=document.documentElement;
const theme=document.querySelector(".Theme")
const theme_color=document.querySelector(".theme-color")
const colors=document.querySelectorAll(".theme-color li")

const MediaQuery = (media) => {
    if (media.matches) {
        document.querySelector(".logo").innerHTML = "JS";
    } else {
        document.querySelector(".logo").innerHTML = "Jayasurya";
    }
};

media.addEventListener("change", MediaQuery);
MediaQuery(media);

menuBars.forEach((element) => {
    element.addEventListener("click", () => {
        if (navbar.style.display === "flex") {
            navbar.style.display = "none";
        } else {
            navbar.style.display = "flex";
        }
    });
});
     
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

dark.addEventListener("click", () => {
    if(body.style.background =="black"){
    body.style.background = "white"; 
    body.style.color = "black";
    root.style.setProperty('--seconadry-color', 'white');
    root.style.setProperty('--color-black', 'black');
    }else{
    body.style.background = "black"; 
    body.style.color = "white";
    root.style.setProperty('--seconadry-color', 'black');
    root.style.setProperty('--color-black', 'white');
    }
});

theme.addEventListener("click",()=>{
    if(theme_color.style.display==="none"){
        theme_color.style.display="grid";
    }else{
        theme_color.style.display="none";
    }
})

for(let i=0;i<3;i++){
    colors[i].addEventListener("click",()=>{
        if(i==0)
            root.style.setProperty("--primary-color","red");
        else if(i==1)
            root.style.setProperty("--primary-color","#4be04b");
        else
            root.style.setProperty("--primary-color","#2020ec");
    });
}