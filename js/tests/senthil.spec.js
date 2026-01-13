const fs = require('fs');
const path = require('path');
const os = require('os');

// Desktop path
const desktopPath = path.join(os.homedir(), 'Desktop');

// Input and output CSV paths
const inputFile = path.join(C:/Users/Senthil/Desktop, 'input.csv');
const outputFile = path.join(C:/Users/Senthil/Desktop, 'column_names.csv');

// Read CSV
const csvContent = fs.readFileSync(inputFile, 'utf8').trim();

// Get header row
const headerRow = csvContent.split('\n')[0];

// Split column names
const columns = headerRow.split(',');

// Prepare output CSV
let outputData = 'ColumnNames\n';
columns.forEach(col => {
  outputData += `${col}\n`;
});

// Write output CSV
fs.writeFileSync(outputFile, outputData);

console.log('Column names converted into one column successfully');
