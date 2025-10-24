let you = document.getElementById("button")
let me = document.getElementById("sidebar");
me.style.opacity = "0"
you.addEventListener("click", function() {
    you.classList.toggle("active")
    if(me.style.opacity === "0"){
        me.style.opacity = "1"
        me.style. transform = "translateY(0px)"
    }
    else{
        me.style.opacity = "0";
        me.style.transform = "translateY(600px)";
    }
})