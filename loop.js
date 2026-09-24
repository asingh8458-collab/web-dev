/*for (let i=1;i<=10;i++){
   if(i==5) break;
   console.log(`2*${i})= ${2*i}`)

}*/
/*let i = 1;

while (i <=10 ) {
    console.log(`2 * ${i} = ${2 * i}`);
    i++;
}*/


/*console.log(`Tittle`)
let fruits=['apple','mango','banana']
console.log(fruits.length)  - returns the length of an array*/

/*for(let i =0;i<fruits.length;i++){
    console.log(fruits[i])
}*/
console.log('=======================================')

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); //adds kiwi in the fruits array in the last
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log('=======================================')
fruits.pop() //removes last element of an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log(fruits.length);


