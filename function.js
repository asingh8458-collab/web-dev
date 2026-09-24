function sum(x, y) {
    console.log("The sum is", x + y);
}

function product(x, y) {
    console.log("The product is", x * y);
}

function difference(x, y) {
    console.log("The difference is", x - y);
}

sum(4, 5);
product(4, 5);
difference(4, 5);



// checking even or odd

function checkevenodd(num) {
    return num% 2;
}
// let x=5;
let x= prompt ('Enter any number to check odd or even');
let result = checkevenodd(x);
if (result==0) {
   // console.log alert('The number is even ');
   alert('The number is even')
}
    else {
       // console.log alert('The number is odd');
       alert('The number is odd')
        }