// 1. Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.

// let a=10;
// let b=20;

// console.log(`sum of ${a} and ${b} is ${a+b}`);
// console.log(`difference of ${a} and ${b} is ${a-b}`);
// console.log(`product of ${a} and ${b} is ${a*b}`);
// console.log(`quotient of ${a} and ${b} is ${a/b}`);
// console.log(`modulus of ${a} and ${b} is ${a%b}`);


// 2. Take two numbers and only print the integer part when a is divided by b.


// let x=12;
// let y=5;
// let z=x/y;
// let r=parseInt(z)
// console.log(`integer part when a is divided by b ${r}`);


// 3. Take two numbers a,b and print the exponential power of the first number raised by the second.


// let a=2;
// let b=3;
// let z=a**b;
// console.log(`exponential power of the ${a} raised by the ${b} , and result is ${z}`);


// 4. Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.


// let a=13;
// let b=3;

// let z=a/b;
// let decimal_Part = z % 1;
// console.log(`decimal part of ${a} and ${b} is ${decimal_Part}`)



// 5. Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.


// let A=50;
// let B=40;
// let C=30;
// let D=20;
// let E=10;
// // avg of marks

// let Avg=(A+B+C+D+E)/5;

// console.log(`average of marks : ${Avg}`);


// 6. Take the cost price a and selling price b of a product, and print the profit obtained on the product.


// let a=70;
// let b=90;
// let profit=b-a;
// console.log(`profit of ${a} and ${b} is ${profit}`);


// 7. Take a number and print out the last digit of the number.

// let x=123;
// let lastdigit=x%10;
// console.log(`last digit of the ${x} is ${lastdigit}`);


// 8. Take a 2 digit number and return the first and last digits.


// let x=54;
// let first= parseInt(x/10);
// let last=x%10;
// console.log(`first digit is ${first} and last digti is ${last}`);


// 9. Write a JavaScript program to find the largest of three numbers.


// let a=1;
// let b=32;
// let c=13;

// if (a>b){
//     if (a>c){
//         console.log(`largest number is ${a}`)
//     }
//     else{
//         console.log(`largest number is ${c}`)
//     }
// }
// else{
//     if(b>c){
//         console.log(`largest number is ${b}`)

//     }
//     else{
//         console.log(`largest number is ${c}`)
//     }
// }



// 10. Write a JavaScript program to check whether a number is even or odd.


// let x=44;
// if (x%2==0){
//     console.log("number is even")
// }
// else{
//     console.log("number is not even")
// }



// 11. Write a JavaScript program to check whether a given number is prime or not.

// let P=13;
// let c=0;
// let i=2;

// while (i<=P){
//     if (P%i==0){
//         c++;
//     }
//     i++;
// }
// if (c==1){
//     console.log("number is prime");
// }
// else{
//     console.log("number is not prime");
// }



// 12. Write a JavaScript program to convert temperature from Celsius to Fahrenheit and vice versa.

// convert temperature from Celsius to Fahrenheit


// let Celsius=30;

// let Fahrenheit=(Celsius*9/5)+32;
// console.log(Fahrenheit)

// // convert temperature from  Fahrenheit to Celsius 

// let Fahrenheit1=86;
// let Celsius1=(Fahrenheit1-32)*5/9;
// console.log(Celsius1)