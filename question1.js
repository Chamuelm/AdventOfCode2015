const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
    if (err) {
        console.log("Error reading input file: ", err.message);
        throw err;
    }

    console.time('Time took: ');

    let floor = 0;
    data.forEach((value, index, array) => {
        if (value === 40) { // Encoding for '('
            floor +=1;
        }
    });

    // Rest of chars are ')' if the input is legal.
    floor -= (data.length - floor);

    console.timeEnd('Time took: ');
    console.log("The floor is: ", floor);
});
