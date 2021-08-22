let priyoPerson = 'Koolsom Begum';
priyoPerson = 'Momotaj Begum';
const hubby = 'Akbar the greater';

//default parameter
function getName(first,last='Chowdhury'){
    return first + ' ' + last;
}


// template String
const myPeople = `My lovely person is are ${hubby} and his full name is ${getName('akbar')}. MY name is ${priyoPerson}.`
console.log(myPeople);


//arrow function
const getName2 = (first,last) => first + ' ' + last;
const fiveTimes = x => x*5;
const bigArrowFunc = (x,y,z) => {
    const firstPart = x + y;
    const secondPart = y + z;
    const thirdPart = z / x;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
}


//spread operartor
const numbers = [2,3,6,1,4,5];
const min = Math.min(...numbers);
console.log(min);
