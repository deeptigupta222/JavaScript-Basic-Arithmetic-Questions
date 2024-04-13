// 1. even and odd


function even_odd(n){
    if(n%2==0){
        return "EVEN number"
    }
    else{
        return "Odd number"
    }
}

console.log(even_odd(5))



// 2. largest number


function largest(a,b){
    if(a>b){
        return a
    }
    else{
        return b
    }
}

console.log(largest(2,3))


// 3. vowel or consonent


function vow_con(char){
    let array=['a','e','i','o','u','A','E','I','O','U']
    if(array.includes(char)){
        return "charetor is vowel"
    }
    else{
        return "charector is consonent"
    } 
}

console.log(vow_con("z"))




// 4.three number as input and return largest one


function largestOne(a,b,c){
    if(a>b){
        if(a>c){
            return a
        }
        else{
            return c
        }
    }
    else{
        if (b>c){
            return b
        }
        else{
            return c
        }
    }
}


console.log(largestOne(111,12,3))







// 6.positive ,negative and zero



function checkNum(n){
    if(n>0){
        return "num is positive"
    }
    else if (n==0){
        return "num is zero"
    }
    else{
        return "num is negative"
    }
}

console.log(checkNum(-6))


// 8 pallindrom

function pallin(s){
    let m=""
    for(let i=0;i<s.length;i++){
        m=s[i]+m
    }
    if(m==s){
        return "yes,pallindrom"
    }
    else{
        return "no"
    }
}

console.log(pallin("madam"))



// 9.vote

function voteEligibility(age){
    if(age>=18){
        return "eligible for vote"
    }
    else{
        return "not eligible for vote"
    }
}

console.log(voteEligibility(17))



// 10.type of trianlge



function typeTriangle(a,b,c){
    if(a==b && b==c){
        return "Equilateral"
    }
    else if(a==b || b==c || c==a){
        return "isosceles"
    }
    else{
        return "scalene"
    }
}


console.log(typeTriangle(0,8,2))



// 7.grade

function salary_avg(a,b,c,d,e){
    let avg=(a+b+c+d+e);
    let p=avg/5;
    if(p>90 && p<=100){
        return "A"
    }
    else if (p>80 && p<=90){
        return "B"
    }
    else if (p>70 && p<=80){
        return "C"
    }
    else if (p>60 && p<=70){
        return "D"
    }
    else if (p>50 && p<=60){
    return "E"
    }
    else if (p>40 && p<=50){
    return "E"
    }

}

console.log(salary_avg(50,50,50,50,50))


