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
    subject: "Vous avez demandé à réinitialiser votre mot de passe.",
    html: `<h1>Réinitialisation de votre mot de passe</h1><p>Bonjour,<br/><br/>Vous avez demandé à réinitialiser votre mot de passe.<br/>Nous vous remercions d'utiliser le lien suivant : ${req.link} afin de procéder à sa réinitialisation.<br/><br/>Bien cordialement,<br/><br/>L'équipe des Compagnons Sérruriers Du Devoir.</p><h3><font color="red">Ceci est un message automatique, merci de ne pas
    repondre.</font></h3>`,
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
