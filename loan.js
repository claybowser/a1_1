//Title : Assignment #1 part 2 : Weekly Loan Calculator
//Author : Clay Bowser
//Date Last Modified : 2020/09/20
/// Notes : .parseFloat(var) TURN STRING INTO DECIMAL
/// .toFixed(x) = decimal places
/// isNaN = is Not A Number
/// Math.pow or ())**()

console.log('Weekly Loan Calculator\n');

//global variables
var readlineSync = require('readline-sync');
var dollars;
var rate;
var years;
var interest;
var weeklyPayment;

//gather input from User
dollars = readlineSync.question("Enter the amount of loan: ");
    //User input validation
    while (dollars > 1000000 || dollars < 1 || isNaN(dollars)){
        dollars = readlineSync.question("Please enter a valid amount: ");
    }
rate = readlineSync.question("Enter the interest rate (%): ");
    while (rate > 1000000 || rate < 1 || isNaN(rate)){
        rate = readlineSync.question("Please enter a valid interest rate (%): ");
    }
years = readlineSync.question("Enter the number of years: ");
    while (years > 1000000 || years < 1 || isNaN(years)){
        years = readlineSync.question("Please enter a valid number of years: ");
    }
//Convert string to number
dollars = parseFloat(dollars);
years = parseFloat(years);
rate = parseFloat(rate);

//calculations
rate = rate / 100;
interest = rate / (5200/100);

weeklyPayment = (interest / (1 - (Math.pow((1 + interest),(-52 * years))))) * dollars;

//display information to User
console.log("\nYour weekly payment will be: $" + weeklyPayment.toFixed(2));


