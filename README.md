# Back-end Entrega Final 

## Resumen 
- La entrega es una api de un ecommerce , con una pequeña interface grafica donde hay un chat  donde se pueden seguir los pedidos y comunicarse con atención al cliente.

## Tecnologías Utilizadas
- Nodejs
- Express
- Mondodb
- Mongoose
- Socket.io
- ejs
- .env
- bcrypt
- jsonwebtoken
- multer
- nodemailer
- twilio

## DEPLOY
- git clone https://github.com/jslipak/JSlipak_BackEnd_CH.git
- npm install
- luego crear el .env
´´´
PORT= // aca va el puerto por ejemplo el 3000
NODE_ENV= // este es optativo 
DB= // aca va la url de la base de datos , puede ser local o remota
EMAIL= // aca va el mail desde donde mando el servidor
PASSWORD_EMAIL= // aca va el password del email
SMTP_HOST= // el servidor smtp , por donde se envia el mail
SMTP_PORT= // el puerto del servidor smtp
EMAIL_TO= // el mail al que se envia el mail de notificacion
WHATSAPP= // el numero de whatsapp al que se envia el mensaje de notificacion, tiene que estar validado en twilio o si no usar la version paga
TWILIO_SID= // el sid de twilio
TWILIO_TOKEN= // el token de twilio
TWILIO_PHONE= // el numero de twilio , en la version gratuita es un numero de twilio
TWILIO_WHATSAPP= // el numero de whatsapp de twilio
JWT_SECRET= // el secreto para el la implementacion de jsonwebtoken
COOKIE_SECRET= // el secreto para la implementacion de cookies
´´´
- npm start

## Funcionalidades
- Users 
  - Inicio de sesion a traves del localhost en su pantalla de inicio desde el browser
  - Inicio de sesion a traves de la API (Ejemplo en postman)
  - Creacion de User a traves del localhost en su pantalla de inicio desde el browser
  - Creacion de User a traves de la API (Ejemplo en postman)
