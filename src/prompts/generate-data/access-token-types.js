const { generateResponse } = require('../../utils/openai');
const path = require('path');
const fs = require('fs');
const fileFormat = '.json';
const folderNameResults = 'generate-data'

const accessTokenTypes = {
  valid: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  invalidFormat: 'invalid_token_format',
  expired: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE2MTk5NzYyMjl9.qj51R3LOz4onB7PmXvW4ymnm9lPoxOiaMg2xq_hHvzM',
  revoked: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.TUiCFQ4Q45q0hHzg94zyrZV4F3WK2r-Y5u3RyrrJqlI',
  malformed: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ',
  invalidIssuer: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.eyJpc3MiOiJodHRwczovL3Rlc3QuY29tIiwiZXhwIjoxNTE2MjM5MDIyfQ',
  insufficientPermissions: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.eyJwZXJtaXNzaW9ucyI6WyJhZG1pbiJdfQ',
  compromisedSecret: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.WrjQw_6w2Gk-vWcbDYMMCUv7ZMPue_uIFVJz2cKKD4w',
  stolenToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.gmMP5ZyZsnYkO5T-b_djA7F9yS8Ll9xHONgEExKtquw'
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
    content: `Generate 3 access tokens with the same format for each of these types: ${Object.keys(accessTokenTypes).join(', ')}. I want only the result in the ${fileFormat} format I asked you, without any additional comments like opinions, suggestions or other answers.`
  }
];

console.log("Starting to generate the response...");

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

generateResponse(messages, outputFileName)
  .then(() => console.log("✅ Response generated and saved"))
  .catch(err => console.error("❌ Error generating response:", err));