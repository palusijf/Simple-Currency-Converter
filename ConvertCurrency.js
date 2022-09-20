const input = require('sync-input');
let currencies = ["USD", "JPY", "EUR", "RUB", "GBP"];
let answer = 1;
function convertToUSD(from, amount) {
    let change;
    switch (from) {
        case "JPY":
            change = (amount / 113.5);
            return change;
        case "EUR":
            change = (amount / 0.89);
            return change;
        case "RUB":
            change = (amount / 74.36);
            return change;
        case "GBP":
            change = (amount / 0.75);
            return change;
        default:
            return amount;
    }
}

function convert(from, to, amount) {
    let usdConvert = convertToUSD(from, amount);
    switch (to) {
        case "USD":
            return usdConvert;
        case "JPY":
            return usdConvert * 113.5;
        case "EUR":
            return usdConvert * 0.89;
        case "RUB":
            return usdConvert * 74.36;
        case "GBP":
            return usdConvert * 0.75;
        default:
            return;
    }
}

console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

while (answer !== 2) {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    answer = Number(input());
    if (answer === 2)
        break;
    if (answer === 1) {
        console.log("What do you want to convert?");
        let from = input("From: ").toUpperCase();
        if (!currencies.includes(from)) {
            console.log("Unknown currency");
        }
        let to = input("To: ").toUpperCase();
        if (!currencies.includes(to)) {
            console.log("Unknown currency");
        }
        let amount = Number(input("Amount: "));
        if (amount < 1) {
            console.log("The amount cannot be less than 1");
        } else if (!Number(amount)) {
            console.log("The amount has to be a number");
        } else {
            let change = convert(from, to, amount).toFixed(4);
            console.log(`Result: ${amount} ${from} equals ${change} ${to}`);
        }
    }
    else console.log("Unknown input");
}
console.log("Have a nice day!");