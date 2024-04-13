
// 1.Given length and breadth of a rectangle, return the area of the rectangle

function area_rec(l,b){
    let Area=l*b;
    return Area;
}
console.log(area_rec(5,2))



// 2.Take a number and print the square of the number

function square(num){
    let p=num**2;
    return p;
}
console.log(square(5))



// 3.Take two numbers and only print the integer part when a is divided by b


function Int(a,b){
    let c=a/b;
    let p=parseInt(c)
    return p;
}

console.log(Int(21,4))


// 4.Take a number and print out the last digit of the number.


function last_digit(a){
    let z=a%10;
    return z
}

console.log(last_digit(123))


// 5.Take a number and find the cube of that number


function square(p){
    let c=p**3;
    return c;
}
console.log(square(3))


// 6.Take a 3 digit number and print the reverse of that number.

function rev(a){
    let m=""
    while(a>0){
        let z=a%10;
        m=m+String(z);
        a=Math.floor(a/10);
    }
    return m   
}
console.log(rev(-528))


// 7.Take a number and print out the first digit of the number. Ex - 145 = 1, 789 = 7


function first_digit(N){
    let z=String(N);
    let p=z.slice(0,1)
    return p;
}

console.log(first_digit(123))


// 8.Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7


function sum_digit(num){
    let sum=0;
    let z=String(num)
    let pp=parseInt(z[0]);
    let p=num%10;
    sum=p+pp;
    return sum;
}

console.log(sum_digit(452))


// 9.Take two numbers and swap them. Ex - a = 10, b=5; =&gt; a=5, b=10;


function Swap(a,b){
    console.log(`value of a ${a} and va`)
    let x=a;
    a=b;
    b=x
    return [a,b];
    a,b=b,a
    return [a,b]
}

console.log(Swap(5,10))



// 10.ake salary of five employees and print the average salary of all the employees.


function salary_avg(a,b,c,d,e){
    let avg=(a+b+c+d+e);
    let p=avg/5;
    return p
}

console.log(salary_avg(1,2,3,4,5))

