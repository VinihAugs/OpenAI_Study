const InputPrompt = require("../models/input-prompt");
const OpenAIService = require("../config/openai");

module.exports = {
  async sendText(req, res) {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({
          success: false,
          message: 'Campo "prompt" é obrigatório',
        });
      }

      // Cria uma instância de InputPrompt
      const userPrompt = new InputPrompt(prompt);

      // Pega o prompt encapsulado
      const reply = await OpenAIService.textCompletion(userPrompt.getPrompt());

      return res.status(200).json({
        success: true,
        data: reply,
      });
    } catch (error) {
      console.error("Erro ao enviar texto:", error);
      return res.status(500).json({
        success: false,
        message: "Erro ao processar o prompt",
        error: error.message || "Erro desconhecido",
      });
    }
  },
};
