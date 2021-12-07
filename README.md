# StartApp-Authentication2 :earth_americas: :lock: :key: :earth_americas:

## Comando para instalar paquetes
npm install  
## Comando para correr aplicacion
node server.js --Comienza a escuchar en el puerto 8080--
<details>
    <summary><strong>Tecnologías Involucradas</strong></summary>

### Node.js
Es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google
#### Pagina oficial de Node.js: 
* https://nodejs.org/es/
### Express 
Es un marco de aplicación web de back-end para Node.js. Está diseñado para crear aplicaciones web y API. Se lo utiliza principalmente para hacer los HTTP requests
#### Pagina oficial de Express: 
* https://expressjs.com/es/
#### Carpetas donde se uso de la tecnología dentro de la aplicación:
* server.js
### bcryptjs
Es un module de node.js que permite hacer encriptaciones. Se utiliza para encriptar el password recibido
#### Pagina oficial de bcryptjs: 
* https://www.npmjs.com/package/bcryptjs
#### Carpetas donde se uso de la tecnología dentro de la aplicación:
* app/controllers/auth.controller.js
### jsonwebtoken
JSON Web Token es un estándar abierto basado en JSON propuesto por IETF para la creación de tokens de acceso que permiten la propagación de identidad y privilegios o claims. Se utiliza para la creación de Tokens. 
#### Pagina oficial de jsonwebtoken: 
* https://www.npmjs.com/package/jsonwebtoken
#### Carpetas donde se uso de la tecnología dentro de la aplicación:
* app/controllers/auth.controller.js
### Sequelize
Sequelize es un ORM de Node.js basado en promesas para Postgres, MySQL, MariaDB, SQLite y Microsoft SQL Server. Cuenta con un sólido soporte de transacciones, relaciones, carga ansiosa y perezosa, replicación de lectura y más. Se utiliza para interactuar con Postgres
#### Pagina oficial de Sequelize: 
* https://sequelize.org/

#### Carpetas donde se uso de la tecnología dentro de la aplicación:
* app/models/index.js
* app/models/user.model.js
### PostgreSQL
 Es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto. 
#### Pagina oficial de PostgreSQL: 
* https://www.postgresql.org/
### Nodemailer
Es un módulo de Node.js que nos permite hacer él envió de correos electrónicos. Esto se utiliza en las siguientes ocasiones:
* Cuando un usuario se registra de manera regular (Sin hacerlo mediante Google). En ese caso se le envía un correo de confirmación a su cuenta
* Cuando un usuario registrado de manera regular, desea cambiar su contraseña 
#### Pagina oficial de Nodemailer: 
* https://nodemailer.com/about/
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
* Maneja las acciones de Sign Up & Sign In
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

