let number = prompt("Enter a number:");

number = Number(number);

if (isNaN(number)) {
    console.log("Error: Please enter a valid number.");
} else {
    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}