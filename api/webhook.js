const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token);

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { body } = req;
    
    // Handle incoming messages
    if (body.message) {
      const chatId = body.message.chat.id;
      const text = body.message.text;
      
      // Your bot logic here
      if (text === '/start') {
        await bot.sendMessage(chatId, 'Hello! I am your Jarvis bot!');
      } else if (text === '/help') {
        await bot.sendMessage(chatId, 'Available commands: /start, /help');
      } else {
        // Echo the message or your custom logic
        await bot.sendMessage(chatId, `You said: ${text}`);
      }
    }
    
    res.status(200).json({ ok: true });
  } else {
    // Handle GET requests (for testing)
    res.status(200).json({ message: 'Telegram bot webhook is running!' });
  }
}