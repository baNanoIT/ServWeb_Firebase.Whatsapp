require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Carga desde .env
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Carga desde .env
const client = require('twilio')(accountSid, authToken);
client.messages
    .create({
        from: 'whatsapp:+14155238886', // Número del Sandbox de Twilio o número aprobado
        contentSid: 'HXb5b62575e6e4ff6129ad7c8efe1f983e', // SID de tu plantilla
        contentVariables: '{"1":"12/1","2":"3pm"}', // Variables definidas en la plantilla
        to: 'whatsapp:+17208311725' // Número de destino con formato internacional
    })
    .then(message => console.log(`Mensaje enviado con SID: ${message.sid}`))
    .catch(err => console.error('Error al enviar mensaje:', err));
