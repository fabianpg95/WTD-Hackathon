const { generateResponse } = require('../../utils/openai');
const { readContentFromFile } = require('../../utils/file');
const fs = require('fs');
const path = require('path');
const fileFormat = '.txt';
const folderNameResults = 'read-content';
const fileNameToRead = 'large-file.txt';

const currentFileName = path.basename(__filename, path.extname(__filename));
const outputFileName = `${folderNameResults}/${currentFileName}-results${fileFormat}`;

const messages = [
  { 
    role: "system", 
    content: "You are an experience IA with high power interpreting and processing large files and then summarize the most important content only"
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

readContentFromFile('large-content', fileNameToRead)
  .then(content => {
    // Add the content to the user's message
    messages[1].content = content;

    generateResponse(messages, outputFileName)
      .then(() => console.log("✅ Response generated and saved"))
      .catch(err => console.error("❌ Error generating response:", err));
  })
  .catch(err => console.error("❌ Error reading file:", err));
