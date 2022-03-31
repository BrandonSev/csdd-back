require("dotenv").config();

const nodemailer = require("nodemailer");

const { EMAIL_HOST, EMAIL_PORT, EMAIL_SECURE, EMAIL_USED, EMAIL_PASS } = process.env;

const transport = nodemailer.createTransport({
  host: EMAIL_HOST,
  secure: EMAIL_SECURE,
  port: EMAIL_PORT,
  auth: {
    user: EMAIL_USED,
    pass: EMAIL_PASS,
  },
});

const send = (req, res) => {
  const emailOption = {
    from: EMAIL_USED,
    to: req.body.email,
    subject: "Vous avez demandé à réunitialiser votre mot de passe.",
    text: `Merci d'utiliser le lien pour réinitialiser votre mot de passe`,
  };
  transport.sendMail(emailOption, (err) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      res.sendStatus(200);
    }
  });
};

module.exports = send;
