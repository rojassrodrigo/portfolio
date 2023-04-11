import Client from 'smtpjs'

export default function sendEmail(name, email, message) {
    // crear instancia de SMTPClient
    var client = new SMTPClient({
      host: "http://localhost:3000",
      username: "rojassrodrigo@live.com",
      password: "Verde.123"
    });
  
    // construir mensaje
    var message = {
      text: message,
      from: email,
      to: "your_email@example.com",
      subject: "Nuevo mensaje de " + name
    };
  
    // enviar mensaje
    client.send(message, function(success, response) {
      if (success) {
        alert("El mensaje se envió correctamente.");
      } else {
        alert("Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.");
      }
    });
  }
  