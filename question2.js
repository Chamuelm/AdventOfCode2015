const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
    if (err) {
        console.log("Error reading input file: ", err.message);
        throw err;
    }

    console.time('Time took: ');

    let floor = 0;
    let keepIterate = true;
    for (let i = 0; i < data.length && keepIterate; i++) {
        if (data[i] === 40) { // Encoding for '('
        floor += 1;
        } else {
            // Assuming here that the input is legal
            floor -= 1;

            if (floor < 0) {
                console.timeEnd('Time took: ');
                console.log("Entered to basement at index: ", i + 1);
                keepIterate = false;
            }
        }
    }
});
