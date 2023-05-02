const inp = document.getElementById("inp")
const hide = document.getElementById("hide")
const show = document.getElementById("show")

hide.addEventListener("click", hideBtn)
show.addEventListener("click", showBtn)

function hideBtn(e){
    inp.type = "text"
    show.style.display = "block"
    hide.style.display = "none"
}
function showBtn(e){
    inp.type = "password"
    hide.style.display = "block"
    show.style.display = "none"
}