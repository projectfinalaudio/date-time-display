// Write a JavaScript program to display the current day and time in the following format
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

#!/usr/bin/env node

// PROGRAM 1
const log = console.log;

let date = new Date();
let dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day;
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

day = date.getUTCDay();

switch (day) 
{
    case 0: log(`Today is : ${dow[0]}`); break;
    case 1: log(`Today is : ${dow[1]}`); break;
    case 2: log(`Today is : ${dow[2]}`); break;
    case 3: log(`Today is : ${dow[3]}`); break;
    case 4: log(`Today is : ${dow[4]}`); break;
    case 5: log(`Today is : ${dow[5]}`); break;
    case 6: log(`Today is : ${dow[6]}`); break;
    default: log(`Today is : ${day}`);   
}


// CHECK WHETHER IT'S PAST NOON OR PAST MIDINIGHT
if (hours >= 12 && hours < 24)
{
    log(`Current time is : ${hours} PM : ${minutes} : ${seconds}`);    
} else
{
    log(`Current time is : ${hours} AM : ${minutes} : ${seconds}`);    
}



// PROGRAM 2

let date = new Date();
let month = date.getMonth();
let day = date.getDate();
let year = date.getFullYear();

// CHECK IF THE MONTH IS LESS THAN 10
if (month < 10)
{
    month = `0${month}`;
}

// CHECK IF THE DAY IS LESS THAN 10
if (day < 10)
{
    day = `0${day}`;    
}

// OUTPUT
log(`${month}/${day}/${year}`);

