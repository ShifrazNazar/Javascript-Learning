class Bank {
    constructor(balance = 0) {
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount
      console.log(`Deposit: $${amount}`)
      console.log({balance: this.balance})
    }
  
    withdraw(amount) {
      // Guard clause
      if (this.balance - amount < 0){
        console.log("You cannot withdraw more than what you have")
        return
      }else{
        this.balance -= amount
        console.log(`Withdrew: $${amount}`)
        console.log({"balance": this.balance})
      }
    }
    
  }
  
let shifraz = new Bank();


const depositButton = document.getElementById("deposit")
const withdrawButton = document.getElementById("withdraw")
const amountInput = document.getElementById("amount")
const balanceDiv = document.getElementById("balance")


depositButton.onclick = () =>{
  const amount = Number(amountInput.value) // When clicked the value in text box is extracted
  shifraz.deposit(amount) // When clicked withdraw function is called
  balanceDiv.innerText = `Balance: $${shifraz.balance}` // Dispay balance in DOM
}


withdrawButton.onclick = function(){
  const amount = Number(amountInput.value)
  if (shifraz.balance - amount < 0){
    shifraz.withdraw(amount)
    balanceDiv.innerText = `Insufficient fund`
  } else {
    shifraz.withdraw(amount)
    balanceDiv.innerText = `Balance: $${shifraz.balance}`
  }
}
