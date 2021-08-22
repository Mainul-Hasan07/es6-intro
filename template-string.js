const priya = 'asif akbar';
const meye = "Meye tumi ki dukkho chino";
const kobita = `Kobita tumi sopno charini`;
const multiLine = 'this is my first line. \n' + 
'this is my second line. \n'+ 
'third line text here. \n'+ 
'fourth line text here';

const mutiLineNew = `this is first line 
this is second line 
this is third line
this is fourth line
`

const friends = ['abul','babul','cabul','dabul']
const count = 5;
const old = '<h3 class="friend-name">Friend</h3>';
const old2 = '<h3 class="friend-name">Friend-'+ count + '</h3>';
const new1 =  `<h3 class="friend-name">Friend-${count}</h3>`
const new2 =  `<h3 class="friend-name">Friend-${friends.length}</h3>`

const first = 'Mamun';
const last = 'chowdhury';
const fullOld = 'This person name is: ' + first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. has money ${friends.length * 500}. He lives in Dhaka`;





console.log(fullOld);
console.log(fullNew);
// console.log(new1);
// console.log(mutiLineNew);
// console.log(multiLine);