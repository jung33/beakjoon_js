var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var hour = parseInt(input[0]);
var min = parseInt(input[1]);
let add = parseInt(input[2]);


if(min>=45)
{
    console.log(hour);
    console.log(min-45);

}

else if(hour==0)
{
    console.log(23);
    console.log(min-45+60);
}
else 
{
    console.log(hour-1);
    console.log(min-45+60);
}