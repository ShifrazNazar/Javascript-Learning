console.log('hello')

let titleDiv = document.getElementById('title')

console.log('before: ', titleDiv.innerText)

let message = 'Square Color Counter 🚀'

titleDiv.innerText = message;

console.log('after: ', titleDiv.innerText)

titleDiv.innerHTML = `<p>${message}</p>`

titleDiv.style.backgroundColor = 'blue'

const squares = document.querySelectorAll('.colorSquare')

// let yellowDiv = document.getElementById("yellow")
// yellowDiv.onclick = function(){  // using traditional function
//   console.log("yellow") 
// }

// let redDiv = document.getElementById("red")
// redDiv.onclick = () => { // using arrow function
//   console.log("red")
// }

// let greenDiv = docume// // even shorter arrow functionnt.getElementById("green")
// greenDiv.onclick = () => console.log("green")  // using one line arrow function

// Writing the above 3 codes in foreach loop
// squares.forEach(square =>{
//   square.onclick = () => {
//     console.log(square.value)
//   }
// })

// Anonymous function are not given a name and they are only going to be used in one place and giving it a name is not necessary.
// A callback function is a function that is passed as an argument to another function and is executed after some kind of event or action has taken place. 
// It is called a "callback" because it is called by the other function when the event or action has completed.

// forEach
const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
squares.forEach(square => { // for each square
  square.onclick = () => { // when its clicked
    timesClicked[square.value] += 1 // increment square value on console
    square.innerText = timesClicked[square.value] // show changes on DOM
  }
})

function clearScores() {
  squares.forEach(square => {
    square.innerText = ''
  })
}
const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => {
  clearScores() // when clear btn is clicked the above function will run
}
