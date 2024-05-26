const OpenAI = require("openai");
require("dotenv").config();
const { saveResultToFile } = require('./file');

const openai = new OpenAI({
    apiKey: process.env.API_KEY
});

async function generateResponse(messages, outputFileName) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: messages,
    });

    const resultContent = completion.choices[0].message.content;
    console.log(resultContent);

    await saveResultToFile(outputFileName, resultContent);
    console.log(`✅ Result created successfully`);
  } catch (error) {
    console.error('❌ Error creating completion:', error.message);
  }
}

module.exports = { generateResponse };
