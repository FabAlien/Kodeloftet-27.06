// console.log("Hello World")

function greeting(personName) {
    let greeting = "Greeting " + personName

    console.log(greeting)
}

// greeting("Per")
// greeting("Pål")
// greeting("Askeladden")

function buttonHandler() {
    console.log("Button Pressed!")
}

let myButton = document.getElementById("clickmeButton")
// console.log(myButton)
// console.dir(myButton)

myButton.addEventListener("click", buttonHandler)

let counter = document.querySelector("#counter")
console.log(counter)

let displayElement = counter.querySelector("span")
console.log(displayElement)

function increment() {
    let value = Number(displayElement.textContent)
    let newValue = value + 1

    displayElement.textContent = newValue
}

function decrement() {
    console.log("Decrementing")
}

function reset() {
    console.log("Resetting")
}


let incrementButton = counter.querySelector("button:nth-child(2)")
let decrementButton = counter.querySelector("button:nth-child(3)")
let resetButton = counter.querySelector("button:nth-child(4)")
console.log(incrementButton)
console.log(decrementButton)
console.log(resetButton)

incrementButton.addEventListener("click", increment)
decrementButton.addEventListener("click", decrement)
resetButton.addEventListener("click", reset)