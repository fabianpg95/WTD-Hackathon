const { generateResponse } = require('../../utils/openai');
const { transformDataFromFile, saveResultToFile } = require('../../utils/file');
const path = require('path');
const fs = require('fs');
const fileFormat = '.txt';
const folderNameResults = 'transform-data';
const fileNameToRead = 'requeriments.txt';

const currentFileName = path.basename(__filename, path.extname(__filename));
const outputFileName = `${folderNameResults}/${currentFileName}-results${fileFormat}`;

const messages = [
  { 
    role: "system", 
    content: "You are an experienced Software QA engineer with 10 years of experience in creating test cases once you have the functional requirements. You are skilled at analysing and interpreting complex software documents to create comprehensive and clear test cases."
  },
  {
    role: "user", 
    content: `Read the content of the document carefully and generate all possible test cases for each requirement listed. Ensure that the test cases are comprehensive and cover all aspects of the functionality described in the document. I want only the result in the ${fileFormat} format I asked you, without any additional comments like opinions, suggestions or other answers.`
  }
];

console.log("Starting to generate the response...");

const outputDir = path.join(__dirname, '..', '..', folderNameResults);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

transformDataFromFile('', fileNameToRead)
  .then(content => {
    // Add the content to the user's message
    messages[1].content += `\n\nDocument Content:\n${content}`;

    generateResponse(messages, outputFileName)
      .then(responseContent => {
        saveResultToFile(outputFileName, responseContent)
          .then(() => console.log("✅ Response generated and saved"))
          .catch(err => console.error("❌ Error saving response:", err));
      })
      .catch(err => console.error("❌ Error generating response:", err));
  })
  .catch(err => console.error("❌ Error reading file:", err));
