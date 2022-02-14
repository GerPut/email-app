const firsttext = document.querySelector("textarea[name=textarea-1]")
const finaltext = document.querySelector("textarea[name=textarea-2]")
const button = document.querySelector("button")
const number = document.querySelector(".number")

button.addEventListener("click", function () {
    let temp = firsttext.value
    let expression = /([A-Za-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
    let emaildata = temp.match(expression)

    finaltext.innerText = emaildata
    number.innerHTML = emaildata.length
})