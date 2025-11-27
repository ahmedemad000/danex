// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id', // You'll get this from EmailJS dashboard
  TEMPLATE_ID: 'your_template_id', // You'll get this from EmailJS dashboard
  PUBLIC_KEY: 'your_public_key', // You'll get this from EmailJS dashboard
  COMPANY_EMAIL: 'contact@danex.tech' // Your company email that receives submissions
}

// Email template parameters structure
export const EMAIL_TEMPLATE_PARAMS = {
  company_name: 'Danex Technologies',
  company_email: 'contact@danex.tech',
  reply_to: 'from_email' // This will be dynamically set
}