const fs = require('fs');
const path = require('path');

async function saveResultToFile(fileName, content) {
  const filePath = path.join(__dirname, '..', '..', 'results', fileName);
  
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Result saved successfully in ${filePath} 📂`);
}

async function readContentFromFile(filePath) {
    try {
      const absolutePath = path.resolve(filePath);
      if (!fs.existsSync(absolutePath)) {
        throw new Error(`File not found: ${absolutePath}`);
      }
  
      const content = fs.readFileSync(absolutePath, 'utf8');
      console.log(`📖 Content of ${absolutePath}:\n${content}`);
      return content;
    } catch (error) {
      console.error(`❌ Error reading file from ${filePath}:`, error.message);
      throw error;
    }
  }

module.exports = { saveResultToFile };
