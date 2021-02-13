// let balance = 500.00;
class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Withdrawal extends Transaction {

  // commit() {
  //   this.account.balance -= this.amount;
  // }
  get value() {
    return -this.amount;
  }

}

class Deposit extends Transaction {

  // commit() {
  //   this.account.balance += this.amount;
  // }
  get value() {
    return this.amount;
  }

}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const my1Account = new Account('billybob');

console.log('Starting Balance:', my1Account.balance);

const t11 = new Deposit(120.00, my1Account);
t11.commit();

const t21 = new Withdrawal(50.00, my1Account);
t21.commit();

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


