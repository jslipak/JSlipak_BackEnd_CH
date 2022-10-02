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

```text
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
```
- npm start

## Funcionalidades
- Users 
  - Inicio de sesion a traves del localhost en su pantalla de inicio desde el browser
  - Inicio de sesion a traves de la API (Ejemplo en postman)
  - Creacion de User a traves del localhost en su pantalla de inicio desde el browser
  - Creacion de User a traves de la API (Ejemplo en postman)
  - Eliminacion de usuarios dedsde la api 
- Áuth
  - Cuenta con un Login tanto en web como desde la api
  - Cuenta con un logout tanto desde la web como en la api
- Product (only api)
  - se pueden ven todos los productos desde la api a traves de un get (ejemplo en postman)
  - se pueden crear productos desde la api a traves de un post (ejemplo en postman)
  - se pueden eliminar productos desde la api a traves de un delete (ejemplo en postman)
  - se pueden actualizar productos desde la api a traves de un put (ejemplo en postman)
  - se pueden buscar productos desde la api a traves de un get (ejemplo en postman)
  - se pueden buscar productos por categoria desde la api a traves de un get (ejemplo en postman)
  - se pueden buscar productos por id desde la api a traves de un get (ejemplo en postman)
- Cart(only api)
  - se pueden ver todos los carritos desde la api a traves de un get (ejemplo en postman)
  - se pueden crear carritos desde la api a traves de un post (ejemplo en postman)
  - se pueden eliminar carritos desde la api a traves de un delete (ejemplo en postman)
  - se pueden ver un carrito a traves de su id (ejemplo en postman)
  - se pueden agregar productos al carrito a traves de su id (ejemplo en postman)
  - se pueden eliminar productos del carrito a traves de su id (ejemplo en postman)
  - se pueden ver todos los productos que hay en un carrito (ejemplo en postman)
- Order
  - se pueden ver todos los pedidos desde la api a traves de un get (ejemplo en postman)
  - Se pueden ver todos los pedidos de un usuario a traves del id del usuaria (ejemplo en postman)
  - se pueden cambiar los status de una orden a traves de su id este es capturado del jwt(ejemplo en postman)
  - no se puede borrar ningina orden ,por temas de seguridad y seguimiento.
- Chat
  - se puede ver el chat desde la web para hace si o si tiene que estar logeado
  - es una implimentacion basica de socket.io en modo brodcast , llegado el caso que halla un modelo de negocio se puede adaptar
