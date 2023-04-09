// IF statement
function myAge(age) {
    if (age > 18) {
      return true
    } else {
      return false
    }
  }
  console.log(myAge(19))
  
  // ARRAYS
  // push - adds at back
  // unshift - adds infront
  myFriends = []
  function addFriend(friend) {
    myFriends.push(friend)
  
  }
  addFriend("nimal")
  addFriend("Kamal")
  console.log(myFriends)
  console.log(myFriends.length)
  
  evenNumber = []
  for (let i = 0; i < 16; i++) {
    if (i % 2 === 1) {
      continue
    }
    if (i === 4) {
      continue
    }
    if (i === 12) {
      break
    }
    evenNumber.push(i)
  }
  console.log(evenNumber)
  
  // objects
  const myObject = {
    keyname: "hello world",
    "keyname2": "hello earth",
    age: 20
  }
  // two ways of accessing objects
  console.log(myObject["keyname2"])
  console.log(myObject.keyname)
  
  // objects(live copy) vs function(fake copy)
  function primitiveMutation(primitive) {
    // primitive will become the copy of num
    primitive++
    console.log(primitive) // 101
  }
  let num = 100
  // function is called so 101
  primitiveMutation(num)
  
  // let is called so 100
  console.log(num) // 100
  
  
  function mutation(obj) {
    obj.age++
    // CONSOLE.LOG WASN'T CALLED HERE
  }
  // but if we call function that has an object it still changes because it references to the same address
  mutation(myObject)
  console.log(myObject.age) // 21
  
  // Scoping and shadowing
  const myVayasa = 9
  function printMyAge() {
    const myVayasa = 19 // shadows the first declaration
    console.log(myVayasa) // 19
  }
  printMyAge()
  
  // Accessing HTML
  const h1Element = document.querySelector("h1") // Element
  h1Element.innerText = "hello element"
  
  const h1Class = document.querySelector(".hello") // Class
  h1Class.innerText = "hello class"
  
  const h1Id2 = document.getElementById("hello") // ID
  const h1Id = document.querySelector("#hello")
  h1Id.innerText = "hello ID"
  
  
  
  const allListItems = document.querySelectorAll("ul li") // NodeList is like an arrary
  console.log(allListItems)
  
  for(let i = 0; i < allListItems.length; i++){
    const listItem = allListItems[i]
    listItem.innerText = "YOOOOO"
  }
  
  
  const ul = document.querySelector("ul")
  const li = ul.querySelector("li")
  // const li = ul.getElementById("li") cannot be used
  console.log(ul)
  console.log(li)