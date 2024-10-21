// Title: Student Counter App

let display = document.getElementById("count-el")
let increment_btn = document.getElementById("increment-btn")
increment_btn.addEventListener("click", increment)

let archive = document.getElementById("archive")
let save_btn = document.getElementById("save-btn")
save_btn.addEventListener("click", save)

let count = 0

function increment() {
    count++
    display.innerHTML = count
}

function save() {
    archive.innerHTML = archive.innerHTML + count + "-"
}