var pop = document.querySelector(".overlay")
var ppbox = document.querySelector(".popbox")
var button = document.querySelector(".btn")

button.addEventListener("click", function () {
    pop.style.display = "block"
    ppbox.style.display = "block"
})
var vig = document.querySelector(".cancelbtn")

vig.addEventListener("click", function () {
    pop.style.display = "none"
    ppbox.style.display = "none"
})


var con = document.querySelector(".container")
var b1 = document.querySelector(".book1")
var b2 = document.querySelector(".book2")
var b3 = document.querySelector(".book3")
var addbook = document.querySelector(".addbtn")

addbook.addEventListener("click", function (event) {
    event.preventDefault()
    var kis = document.createElement("div")
    kis.setAttribute("class", "bookcontainer")
    kis.innerHTML = `<h2>${b1.value}</h2>
            <h5>${b2.value}</h5>
            <p>${b3.value}</p>
             <button onclick="deleted(event)" class="btns">Delete</button>`
    con.append(kis)
    pop.style.display = "none"
    ppbox.style.display = "none"
})

function deleted(event) {
    event.target.parentElement.remove()
}