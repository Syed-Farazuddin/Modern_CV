

var icon = document.getElementById("menu-icon")
var bar = document.querySelector(".sidebar")
icon.addEventListener("click",function(Event){
    bar.classList.toggle("pop-sidebar")
})

