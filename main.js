const reverseString = str => [...str].reverse().join('');

console.log(reverseString('number'));

const countString = num => num.length;

console.log(countString('avengers'));

const capitalizeFirstLetter = str => `${str.charAt(0).toUpperCase()} ${str.slice(1)} }`

console.log(capitalizeFirstLetter('hello'));

const array = [30, 49, 66, 78, 99];

const max = Math.max (...array);
const min = Math.min (...array);
console.log(min);
console.log(max);


const arr = [1,2,3,4,5];

const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue,0);
console.log(sum)

const arry = [1, 2, 3, 4, 5];

const filteredArray = arry.filter(num => num > 2);

console.log(filteredArray);

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(13));
console.log(isPrime(9));

function fibonacci(n) {
    let a = 0, b = 1, c;
    if (n === 0) return a;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibonacci(5));
