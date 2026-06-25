//Creating class
class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }

}

//Multiple objects are made using class - Student
const student1 = new Student("Nisha", 18);
console.log(student1);
const student2 = new Student("Khushboo", 10);
console.log(student2);


//Adding methods to classes
class welcome {
    constructor(name){
        this.name = name;
    }
    greet(){       
        console.log(`Hello ${this.name}`);
    }
}
const s1 = new welcome("Prisha");
s1.greet();



//question - Banking System
class Bank{
    constructor(name,acc_no, balance,branch){
        this.name = name;
        this.acc_no = acc_no;
        this.balance = balance;
        this.branch = branch;
    }

    checkBalance(){
        console.log(`Current balance in your account is: Rs.${this.balance}`);
    }

    depositBalance(amount){
        console.log(`Amount deposited: Rs.${amount}`);
        this.balance += amount;
        console.log(`Current balance is: Rs.${this.balance}`);
    }

    withdrawBalance(money){
        console.log(`Money withdrawn from your account is: Rs.${money}`);
        this.balance = this.balance - money;
        console.log(`Balance left in you account after withdrawl is: Rs.${this.balance}`);
    }
}

const detail = new Bank ("Khusbhoo", 155239803477, 80000, "Tejaji Branch");
console.log(detail);

detail.checkBalance();
detail.depositBalance(8000);
detail.withdrawBalance(5000);