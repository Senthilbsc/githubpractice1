const fs = require('fs');
const path = require('path');
const os = require('os');

// Desktop path
const desktopPath = path.join(os.homedir(), 'Desktop');

// Input and output CSV paths
const inputFile = path.join(desktopPath, 'input.csv');
const outputFile = path.join(desktopPath, 'column_names.csv');

// Read CSV file
const csvData = fs.readFileSync(inputFile, 'utf8').trim().split('\n');

// Prepare output CSV
let output = ['FullName'];

// Skip header and combine columns
for (let i = 1; i < csvData.length; i++) {
  const [firstName, lastName] = csvData[i].split(',');
  output.push(`${firstName} ${lastName}`);
}

// Write new CSV file
fs.writeFileSync(outputFile, output.join('\n'));

console.log('CSV imported and exported successfully');