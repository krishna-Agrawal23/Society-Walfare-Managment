const Brevo = require('@getbrevo/brevo');

// Initialize Brevo API client
const apiInstance = new Brevo.TransactionalEmailsApi();

// Set API key
const apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = process.env.BREVO_API_KEY;

// Default sender
const defaultSender = {
  email: process.env.BREVO_SENDER_EMAIL || 'noreply@Arihant Plazadarshan.com',
  name: process.env.BREVO_SENDER_NAME || 'Arihant Plaza Society'
};

module.exports = {
  apiInstance,
  defaultSender,
  Brevo
};
