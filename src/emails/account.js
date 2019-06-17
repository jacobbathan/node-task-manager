const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jacob@jacobb.io',
    subject: 'Thank you for signing up',
    text: `Welcome to the app, ${name}. Let know yeet`
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jacob@jacobb.io',
    subject: `So sorry to see you leave, ${name}`,
    text: `Sorry to see you go, ${name}. Let us know if theres anything we could have done better!`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};
