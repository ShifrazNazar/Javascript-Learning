let billTotalInputDiv = document.getElementById("billTotalInput")
let tipInputDiv = document.getElementById("tipInput")
let numberOfPeopleDiv = document.getElementById("numberOfPeople")
let perPersonTotalDiv = document.getElementById("perPersonTotal")


// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// Calculate the total bill per person
const calculateBill = () => {
    // get bill from user input & convert it into a number
    let bill = Number(billTotalInputDiv.value)
  
    // get the tip from user & convert it into a percentage (divide by 100)
    let tipPercentage = Number(tipInputDiv.value) / 100
  
    // get the total tip amount
    let tip = bill * tipPercentage
  
    // calculate the total (tip amount + bill)
    let total = bill + tip
    
    // calculate the per person total (total divided by number of people)
    let totalPerPerson = total / numberOfPeople
 
    // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = `$${totalPerPerson.toFixed(2)}`
  }
  
  // Splits the bill between more people
  const increasePeople = () => {
    // increment the amount of people
    numberOfPeople += 1
  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
  
    // calculate the bill based on the new number of people
    calculateBill()
  }
  
  // Splits the bill between fewer people
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if (numberOfPeople <= 1){
        return
    }else{
        // decrement the amount of people
    numberOfPeople -= 1
  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
  
    // calculate the bill based on the new number of people
    calculateBill()
    }
  }