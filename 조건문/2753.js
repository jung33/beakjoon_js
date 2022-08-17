var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var year = parseInt(input[0]);


if ((year%4==0) && ((year%100!=0)||(year%400==0)))
{
    console.log(1);
}

else {
    console.log(0);
}