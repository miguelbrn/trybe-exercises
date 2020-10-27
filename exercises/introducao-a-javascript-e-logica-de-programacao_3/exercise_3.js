let n = 5;
let symbol = '*';

for (let line = 0; line <= n; line++) {
    let output = '';
    for (let col = 0; col <= n; col++) {
        if (col <= n - line) {
            output += ' ';
        }else {
            output += symbol;
        }
    
    }
    console.log(output)
}