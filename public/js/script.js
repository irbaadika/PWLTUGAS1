const tabKonten = document.querySelector(".about-tab"),
about = document.querySelector(".about");

tabKonten.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabKonten.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        about.querySelector(".tab-konten.active").classList.remove("active");
        about.querySelector(target).classList.add("active");        
    }
});