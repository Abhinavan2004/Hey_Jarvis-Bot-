module.exports = async (req, res) => {
  res.status(200).json({
    message: 'Test endpoint working',
    tokenSet: !!process.env.TELEGRAM_BOT_TOKEN,
    token: process.env.TELEGRAM_BOT_TOKEN ? 'Token exists' : 'Token missing'
  });
};