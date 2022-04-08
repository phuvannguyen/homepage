
 document.addEventListener("DOMContentLoaded", () =>{
     document.addEventListener("scroll", (event) => {
         let heightScroll = window.scrollY;
         //Fade in
         if (heightScroll > 20) {
             document.querySelector(".nav-bar").classList.add("sticky");
             document.querySelector(".goTop").style.opacity = "1";



         }
         else {
             document.querySelector(".nav-bar").classList.remove("sticky");
             document.querySelector(".goTop").style.opacity = "0";


         };
     });

     document.querySelector(".menu-toggler").addEventListener("click", (event) => {
        document.querySelector(".menu-toggler").classList.toggle("active");
        document.querySelector(".navbar-menu").classList.toggle("active");
     })

     document.querySelector(".goTop").addEventListener("click", (event) => {
       window.scrollTo(0, 0);
     })

 })