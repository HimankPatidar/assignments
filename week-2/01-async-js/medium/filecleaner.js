const fs = require('fs').promises;

async function cleanFile(filename) {
  try {
    // Read the contents of the file
    const data = await fs.readFile(filename, 'utf8');

    // Remove extra spaces between words
    const cleanedData = data.replace(/\s+/g, ' ');

    // Write the cleaned data back to the file
    await fs.writeFile(filename, cleanedData);

    console.log(`File ${filename} cleaned successfully.`);
  } catch (err) {
    console.error(`Error processing file ${filename}:`, err);
  }
}

// Clean up the file myFile.txt
cleanFile('myFile.txt');
