# StartApp-Authentication :earth_americas: :lock: :key:
<img alt="Logo" align="right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1tfJ2N0SENG9G86Avbt6qN59vXLDAFYggA5IrspoOX4Q_irRB18laR-At4dTKZyG6VI&usqp=CAU" width="20%" />

<details>
  <summary><strong>Comandos para Inicializar</strong></summary>

### Comando para instalar paquetes
npm install  
### Comando para correr aplicacion
node server.js --Comienza a escuchar en el puerto 8080--

</details>

<details>
    <summary><strong>Tecnologías Involucradas</strong></summary>

### Node.js
[![Node Version](https://img.shields.io/badge/Node-v15.8.0-green)](https://nodejs.org/docs/latest-v15.x/api/)
Es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google
### Express
[![Express](https://img.shields.io/badge/Bcryptjs-v.4.17.1-ff69b4)](https://expressjs.com/es/) 
Es un marco de aplicación web de back-end para Node.js. Está diseñado para crear aplicaciones web y API. Se lo utiliza principalmente para hacer los HTTP requests
#### Carpetas donde se uso de la tecnología dentro de la aplicación:
* server.js
### Bcryptjs
[![Bcryptjs](https://img.shields.io/badge/Bcryptjs-v.2.4.3-blueviolet)](https://www.npmjs.com/package/bcryptjs)
Es un module de node.js que permite hacer encriptaciones. Se utiliza para encriptar el password recibido
#### Carpetas donde se uso de la tecnología dentro de la aplicación:
* app/controllers/auth.controller.js
### Jsonwebtoken
[![Jsonwebtoken](https://img.shields.io/badge/Jsonwebtoken-v.8.5.1-brightgreen)](https://www.npmjs.com/package/jsonwebtoken)
JSON Web Token es un estándar abierto basado en JSON propuesto por IETF para la creación de tokens de acceso que permiten la propagación de identidad y privilegios o claims. Se utiliza para la creación de Tokens. 
#### Carpetas donde se uso de la tecnología dentro de la aplicación:
* app/controllers/auth.controller.js
### Sequelize
[![Sequelize](https://img.shields.io/badge/Sequelize-v.6.6.5-green)](https://sequelize.org/)
Sequelize es un ORM de Node.js basado en promesas para Postgres, MySQL, MariaDB, SQLite y Microsoft SQL Server. Cuenta con un sólido soporte de transacciones, relaciones, carga ansiosa y perezosa, replicación de lectura y más. Se utiliza para interactuar con Postgres

#### Carpetas donde se uso de la tecnología dentro de la aplicación:
* app/models/index.js
* app/models/user.model.js
### PostgreSQL
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v.8.7.1-important)](https://www.postgresql.org/)
 Es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto. 
### Nodemailer
[![Node Mailer](https://img.shields.io/badge/NodeMailer-v.6.7.0-red)](https://nodemailer.com/about/)

Es un módulo de Node.js que nos permite hacer él envió de correos electrónicos. Esto se utiliza en las siguientes ocasiones:  
* Cuando un usuario se registra de manera regular (Sin hacerlo mediante Google). En ese caso se le envía un correo de confirmación a su cuenta
* Cuando un usuario registrado de manera regular, desea cambiar su contraseña 

#### Carpetas donde se uso de la tecnología dentro de la aplicación:
* app/config/email.config.js
* app/controllers/auth.controller.js
</details>
<details>
    <summary><strong>Estructura de los Archivos</strong></summary>
    
La división de las carpetas esta de la siguiente manera:
#### Config
En esta carpeta en general se encuentran los archivos de configuración de los diferentes servicios y herramientas de usamos.
* Archivos de configuración de PostgreSQL
* Archivos de configuración de Nodemailer
* Archivos de configuración de Sequelize
* Llave para uso de JsonWebToken
#### Routes
Se declaran los Endpoints que se tienen y también se divide según a los recursos que tengamos
#### Middlewares
Esta parte del código nos ayudara para comunicarnos con otros paquetes, programas o funcionalidades específicas.
* Validaciones de correo electrónicos únicos
* Verificación de Token
* Verificación de Email con formato correcto
* Validacion de Sign Up
#### Controllers
Aqui se aplica toda la logica para los endpoints, que son redireccionados en la carpeta de **Routes**
* Maneja las acciones de Sign Up & Sign In.
* Recovery de passwords
* Cambio de contraseñas
#### Models
Aqui se tienen modelos que representan exactamente lo que esta en la base de datos para que Sequelize haga uso de estos modelos para la interaccion con la DB. 
</details>

<details>
    <summary><strong>Arquitectura del Proyecto</strong></summary>

A través de rutas Express, el CORS como Middleware comprobará la solicitud HTTP que coincida con una ruta antes de llegar a la capa de seguridad.

La capa de seguridad incluye:

Middleware de autenticación JWT: verificar el registro, verificar el token
Si estos middlewares arrojan algún error, se enviará un mensaje como respuesta HTTP.

Los controladores interactúan con la base de datos PostgreSQL a través de Sequelize y envían una respuesta HTTP (token, información del usuario, datos basados ​​en roles que se encuentran en la base de datos del repositorio de Servicio de Datos) al cliente.

Podriamos decir que sigue una Arquitectura del Tipo MVC.
</details>

### TechStack

<code><img height="30" src="https://emojis.slackmojis.com/emojis/images/1465929657/511/heroku.png?1465929657"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"></code>

[API deploy on heroku]: https://dev-auth-db2.herokuapp.com/

🏡 [API Deploy on Heroku][API deploy on heroku]


[![Stake Holder](https://img.shields.io/badge/Cliente-StartAmericasTogether-blue)](https://www.startamericastogether.org/)
