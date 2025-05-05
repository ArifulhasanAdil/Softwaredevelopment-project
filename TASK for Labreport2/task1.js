class BankAccount
{
    constructor(accountNumber, accountHolderName, balance) {
      this._accountNumber = accountNumber;
      this._accountHolderName = accountHolderName;
      this._balance = balance;
    }
  
    // Getter methods
    getAccountNumber()
    {
      return this._accountNumber;
    }
  
    getAccountHolderName()
    {
      return this._accountHolderName;
    }
  
    getBalance() {
      return this._balance;
    }
  
    // Setter methods
    setAccountHolderName(name)
    {
      this._accountHolderName = name;
    }
  
    // Deposit method
    deposit(amount)
 {
      if (amount > 0)
     {
        this._balance += amount;
        console.log(`Deposited: $${amount}. New Balance: $${this._balance}`);
      } 
      else 
      {
        console.log("Deposit amount must be greater than zero.");
      }
 }
  
    // Withdraw method
    withdraw(amount) {
      if (amount > 0 && amount <= this._balance) {
        this._balance -= amount;
        console.log(`Withdrawn: $${amount}. New Balance: $${this._balance}`);
      } else {
        console.log("Insufficient funds or invalid amount.");
      }
    }
  }
  
  // Example Usage
  const myAccount = new BankAccount(12110,"Adil", 1000);
  console.log(myAccount.getBalance()); // 1000
  myAccount.deposit(500);
  myAccount.withdraw(200);
  myAccount.withdraw(2000); // Should not be allowed
  console.log(myAccount.getBalance());