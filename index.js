// LOOPS

// 1. create a loop that prints out the numbers 0 - 5 using a while loop

var i = 0;

while(i <= 5){
    console.log(i);
    i++;
}

// 2. create a loop that prints out the numbers 0 - 5 using a for loop

for(var i = 0; i <= 5; i++){
    console.log(i);
}

// 3. create a loop that prints out the numbers 0 - 5 using a for loop but for each number return the squared version

for(var i = 0; i <= 5; i++){
    console.log(i*i);
}

//4. iterate over the string below and print out each character
let string = "the fox jumps over the moon"; 

for(var i = 0; i < string.length; i++){
    console.log(string[i]);
}

