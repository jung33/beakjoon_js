var fs = require('fs');
var input = fs.readFileSync('ex.txt').toString().split(' ');
var hour = parseInt(input[0]);
var min = parseInt(input[1]);
let add = parseInt(input[2]);

//23 48 25

hour = hour + Math.floor(add/60);
min = min + add%60;

hour = hour + Math.floor(min/60);
min = min%60;

if(hour>=24)
{
    hour = hour - 24 ;
}



console.log(hour);
console.log(min);
