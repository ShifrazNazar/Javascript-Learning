const incrementBtn = document.querySelector("#increment")
const decrementBtn = document.querySelector("#decrement")
const counterEl = document.getElementById("counter")

let counter = 0
const ulElement = document.getElementById("listItems")

function incrementCounter() {
  counter++
  counterEl.innerText = counter

  // create element
  const li = document.createElement("li")
  const b = document.createElement("b")

  // setting css 
  if (counter % 2 === 0){
    li.setAttribute('class','red')
  }else{
    li.style.background = "yellow"
  }
  
  

  // set attribute to remove elemet
  li.setAttribute("data-counter", counter)
  
  // li.innerHTML = "<b>senetence </b>" + counter
  
  // create nodes to add sentences
  const textNode = document.createTextNode("Sentence: ")
  b.appendChild(textNode)
  li.appendChild(b)
  const textNode2 = document.createTextNode(counter)
  li.appendChild(textNode2)

 

  
  // append that element
  ulElement.appendChild(li)
  
}

function decrementCounter() {

  const li = document.querySelector('[data-counter="'+counter+'"]')
  // get attribute
  const number = parseInt(li.getAttribute("data-counter"),10)
  if (number%2===0){
    li.remove()
  }
  counter--
  counterEl.innerText = counter
}


incrementBtn.addEventListener("click", incrementCounter)
decrementBtn.addEventListener("click", decrementCounter)