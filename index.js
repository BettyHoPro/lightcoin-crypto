// let balance = 500.00;
class Account {

  constructor(username) {
    this.username = username;
    //this.balance = 0;
    this.transaction = [];
  }

  get balance() {
    let balance = 0;
    return balance += this.transaction.map(trans => trans.value).reduce((a, b) => a + b);
  }

  addTransaction(transaction) {
    this.transaction.push(transaction);
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (!this.isAllowed()) {
      console.log(`Your remaining balance is ${this.account.balance} ca, you don't have enough money to withdraw ${this.amount} ca.`);
      return false;
    }
    //this.account.balance += this.value;
    this.time = new Date();
    this.account.addTransaction(this);
    console.log(`Congratulations! You ${this.value > 0 ? "deposit" : "withdraw"} ${this.amount} ca successfully. Your account balance is ${this.account.balance} ca.`);
    return true;
  }

}

class Withdrawal extends Transaction {

  // commit() {
  //   this.account.balance -= this.amount;
  // }
  get value() {
    return -this.amount;
  }

  isAllowed() {
    return (this.account.balance - this.amount >= 0);
  }

}

class Deposit extends Transaction {

  // commit() {
  //   this.account.balance += this.amount;
  // }
  get value() {
    return this.amount;
  }

  isAllowed() {
    return true;
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const my1Account = new Account('billybob');

//console.log('Starting Balance:', my1Account.balance);

const t11 = new Deposit(120.00, my1Account);
t11.commit();

const t21 = new Withdrawal(50.00, my1Account);
t21.commit();

const t31 = new Withdrawal(150.00, my1Account);
t31.commit();

//console.log('Ending Balance:', my1Account.transaction);
console.log('Ending Balance:', my1Account.balance);

console.log("=================");


// const myAccount = new Account("snow-patrol");
// const hisAccount = new Account("couple");

// t0 = new Deposit(100, myAccount);
// t0.commit();
// console.log(`Transaction 0: `, t0);

// t1 = new Withdrawal(50.25, myAccount);
// t1.commit();
// console.log('Transaction 1:', t1);

// t2 = new Deposit(400, hisAccount);
// t2.commit();
// console.log('Transaction 2:', t2);

// t3 = new Withdrawal(9.99, hisAccount);
// t3.commit();
// console.log('Transaction 3:', t3);

// console.log('My Account Balance:', myAccount.balance);
// console.log('His Account Balance:', hisAccount.balance);

// t3 = new Deposit(120.00);
// t3.commit();
// console.log('Transaction 3:', t3);

// console.log('Balance:', balance);


