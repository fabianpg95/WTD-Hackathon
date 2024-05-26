const OpenAI = require("openai");
require("dotenv").config()
const openai = new OpenAI({
    apiKey: process.env.API_KEY
});
async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ 
        role: "system", 
        content: "Eres un ingeniero de calidad de software con 10 años de experiencia trabajando en documentos de estrategia de pruebas."
    },
    {
        role: "user", 
        content: "Qué es un plan de pruebas?"
    }],
    model: "gpt-4o",
  });
  console.log(completion.choices[0].message.content);
}
main();