// Particles effect of the Loading
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Loading Particles Effects OK');
});


// Hamburger logic
let hamburger = document.getElementById("hamburger");
let openHamburgerIcon = document.getElementById("openHamburgerIcon");
let closeHamburgerIcon = document.getElementById("closeHamburgerIcon");
let menus = document.getElementById("menus");
let navbar = document.getElementById("navbar");
hamburger.addEventListener("click", function() {
    console.log("Clicked");
    if (hamburger.classList.contains("close")) {
        hamburger.classList.toggle("close");
        hamburger.innerHTML = `<i id="openHamburgerIcon" class="fas fa-close"></i>`;
        console.log("Opened");
        hamburger.classList.remove("close");
        hamburger.classList.add("open");
        navbar.style.height = "30vh";
        menus.style.display = "block";
        navbar.style.display = "flex";
        navbar.style.flexDirection = "column";
    } else {
        hamburger.innerHTML = `<i id="closeHamburgerIcon" class="fas fa-bars"></i>`;
        console.log("Closed");
        hamburger.classList.add("close");
        menus.style.display = "none";
        navbar.style.height = "8vh";
    }
});


// Properties Hover Logic
let properties = document.getElementsByClassName("property");
console.log(properties);

for (let i = 0; i < properties.length; i++) {
    properties[i].addEventListener("mouseover", function() {
        let para = properties[i].childNodes[3];
        para.style.display = "inline";
    })
}
for (let i = 0; i < properties.length; i++) {
    properties[i].addEventListener("mouseleave", function() {
        let para = properties[i].childNodes[3];
        para.style.display = "none";
    })
}

