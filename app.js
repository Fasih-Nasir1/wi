function fn() {
    var navba = document.getElementById("navbar");
    var navbae = document.getElementById("navbare");
    var ys = window.scrollY;
    var navLinks = document.querySelectorAll('.nav-link');

    let dl = document.getElementById("ido")
    let dle = document.getElementById("idoe")
    let lc = document.getElementById("ilo")
    let lce = document.getElementById("iloe")
    //
    if (ys > 205) {
        navba.classList.add("navt")
        navbae.classList.add("navte")
        navLinks.forEach(function (navLink) {
            navLink.classList.add("scrolled");
        });
        dl.classList.remove("hi")
        dle.classList.remove("hi")
        lc.classList.add("hi")
        lce.classList.add("hi")
    }
    else {
        dl.classList.add("hi")
        dle.classList.add("hi")
        lc.classList.remove("hi")
        lce.classList.remove("hi")
        navba.classList.remove("navt")
        navbae.classList.remove("navte")
        navLinks.forEach(function (navLink) {
            navLink.classList.remove("scrolled");
        });

    }
}
window.addEventListener("scroll", fn)

document.addEventListener("DOMContentLoaded", function fn() {
    const body = document.getElementById("bod");
    const load = document.getElementById("loa");

    body.style.display = "none"
    load.style.display = "block"
    setTimeout(function fn() {
        body.style.display = "block"
        load.style.display = "none"
    }
        // ,5500

    )
})


a = 0;
b=0;
c=0;
e=0;
d = "+"
p = "%"

function num() { document.getElementById("five").innerHTML = a++ + d
     if (a > 500) { a = 0}}setInterval(num, 40)
// 
function num1() { document.getElementById("six").innerHTML = b++ + p
     if (b > 100) { b = 0}}setInterval(num1, 150)
    //  
    function num2() { document.getElementById("sev").innerHTML = c++ + d
    if (c > 3472) { c = 0}}setInterval(num2, 5)
    // 
    function num3() { document.getElementById("eg").innerHTML = e++ + d
    if (e > 5000) { e = 0}}setInterval(num3, 5)

        document.getElementById("trusb").addEventListener("click",()=>{
            window.open("contac.html");
        })