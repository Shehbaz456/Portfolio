let mob_nav_btn = document.querySelector(".mob-nav-btn");
let nav_con = document.querySelector(".navbar-con");

let toggelbtn =()=>{
    nav_con.classList.toggle("active")
}


mob_nav_btn.addEventListener('click',()=> toggelbtn());



var typed = new Typed(".multi-text",{
    strings:["Web Developer","MERN Developer","Full stack developer"],
    typeSpeed:30,
    backSpeed:30,
    backDelay:2000,
    loop:true
})


