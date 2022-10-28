const title = document.querySelector(".title")
const box = document.querySelector(".box")

let count = 0

function counter() {
    count++
    title.innerHTML = count
}
function reseet(){
    count = 0
    title.innerHTML = count
}
function violet() {
    box.style.backgroundColor = "rgb(255, 7, 205)"
    
}
function green() {
    box.style.backgroundColor = "rgb(33, 248, 4)"
    
}
function dodgerblue() {
    box.style.backgroundColor = "rgb(16, 194, 243)"
    
}
function black() {
    box.style.backgroundColor = "black"
    
}
