const { generateResponse } = require('../../utils/openai');
const path = require('path');
const fs = require('fs');
const fileFormat = '.json';
const folderNameResults = 'generate-data'

const currentFileName = path.basename(__filename, path.extname(__filename));
const outputFileName = `${folderNameResults}/${currentFileName}-results${fileFormat}`;

const dataVariables = [
  'user_data',
  'product_data',
  'transaction_data',
  'log_data',
  'sensor_data',
  'random_data'
];

const messages = [
  { 
    role: "system", 
    content: "You are a software quality engineer with 10 years of experience creating test data for backend testing."
  },
  {
    role: "user", 
    content: `Generate realistic test data for backend testing including ${dataVariables.join(', ')}.I want only the result in the ${fileFormat} format I asked you, without any additional comments like opinions, suggestions or other answers.`
  }
];

console.log("Starting to generate response...");

// Ensure the output directory exists
const outputDir = path.join(__dirname, '..', '..', folderNameResults);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

generateResponse(messages, outputFileName)
  .then(() => console.log("✅ Response generated and saved"))
  .catch(err => console.error("❌ Error generating response:", err));