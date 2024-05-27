const { generateResponse } = require('../../utils/openai');
const path = require('path');
const fileFormat = '.json';
const folderNameResults = 'generate-data'


const dateTypes = {
  valid: '2024-05-30',
  invalidFormat: '30-05-2024',
  invalidYear: '20245-05-30',
  invalidMonth: '2024-13-30',
  invalidDay: '2024-05-32',
  incompleteDate: '2024-05',
  specialCharacters: '2024/05/30',
  longFormat: '2024-05-30T12:00:00.000Z',
  longYear: '202400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
};

const currentFileName = path.basename(__filename, path.extname(__filename));
const outputFileName = `${folderNameResults}/${currentFileName}-results${fileFormat}`;

const messages = [
  { 
    role: "system", 
    content: "You are a software quality engineer with 10 years of experience creating test data for backend testing."
  },
  {
    role: "user", 
    content: `Generate 10 dates of each of these ones ${Object.keys(dateTypes).join(', ')}.I want only the result in the ${fileFormat} format I asked you, without any additional comments like opinions, suggestions or other answers.`
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
