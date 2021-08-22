const add = (num1, num2) => num1 + num2;
const sum = add(22,12);

const multiply = (num1,num2,num3) => num1 * num2 * num3;
const result = multiply(4,12,3);

const fiveTimes = (num) => num*5;
const output = fiveTimes(50);

const tenTimes = num => num * 10;
const value = tenTimes(12);

const getName = () => 'Bardon Sam';
const nAme = getName();

const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const  total = doMath(12,5);
console.log(total);

