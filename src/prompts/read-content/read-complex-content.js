const { generateResponse } = require('../../utils/openai');
const { readContentFromFile } = require('../../utils/file');
const fs = require('fs');
const path = require('path');
const fileFormat = '.txt';
const folderNameResults = 'read-content';
const fileNameToRead = 'data-structures-algorithms.txt';

const currentFileName = path.basename(__filename, path.extname(__filename));
const outputFileName = `${folderNameResults}/${currentFileName}-results${fileFormat}`;

const messages = [
  { 
    role: "system", 
    content: "You are an experienced software engineer with 10 years of experience analysing and interpretating complex Software documents and processing information to explain it easy for others"
  },
  {
    role: "user", 
    content: `Read the content carefully and give me a summary of all the information easy to understand. I want only the result in the ${fileFormat} format I asked you, without any additional comments like opinions, suggestions or other answers.`
  }
];

console.log("Starting to generate the response...");

const outputDir = path.join(__dirname, '..', '..', folderNameResults);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

readContentFromFile('complex-content', fileNameToRead)
  .then(content => {
    // Add the content to the user's message
    messages[1].content = content;

    generateResponse(messages, outputFileName)
      .then(() => console.log("✅ Response generated and saved"))
      .catch(err => console.error("❌ Error generating response:", err));
  })
  .catch(err => console.error("❌ Error reading file:", err));
