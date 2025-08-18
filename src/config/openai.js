// openai.js
require('dotenv').config();
const OpenAI = require('openai');

if (!process.env.OPENAI_API_KEY) {
  console.error('Faltou OPENAI_API_KEY no .env');
  process.exit(1);
}

const MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

class OpenAIService {
  // configuração estática
  static configuration() {
    return new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  // função estática de completion simples
  static async textCompletion(prompt) {
    try {
      const client = this.configuration();

      const response = await client.responses.create({
        model: MODEL,
        input: [
          { role: 'system', content: 'Você é um assistente direto e pastoral.' },
          { role: 'user', content: prompt },
        ],
      });

      return response.output_text;
    } catch (err) {
      console.error('Erro em textCompletion:', err);
      throw new Error(err.message || 'Falha ao gerar completion');
    }
  }
}

// exportando a classe
module.exports = OpenAIService;
