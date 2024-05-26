const { generateResponse } = require('../../utils/openai');
const path = require('path');
const fileFormat = '.json';
const folderNameResults = 'read-content'

const currentFileName = path.basename(__filename, path.extname(__filename));
const outputFileName = `${folderNameResults}/${currentFileName}-results${fileFormat}`;

const messages = [
  { 
    role: "system", 
    content: "You are a software quality engineer with 10 years of experience creating test data for backend testing."
  },
  {
    role: "user", 
    content: `Generate 3 access tokens with the same format for each of these types: ${Object.keys(accessTokenTypes).join(', ')}. I want only the result in the ${fileFormat} format I asked you, without any additional comments like opinions, suggestions or other answers.`
  }
];

console.log("Starting to generate the response...");

generateResponse(messages, outputFileName)
  .then(() => console.log("✅ Response generated and saved"))
  .catch(err => console.error("❌ Error generating response:", err));