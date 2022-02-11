# Alkemy Challenge con Node JS
Challenge de alkemy para desarrollar una API de Disney usando node js

EL deploy en Heroku [API](https://challenge-alkemy-rmc.herokuapp.com/api/character)

### Caracteristicas principales 📋
CRUD de personajes, películas, generos, tipo (Peliculas o serie)
búsqueda de personajes por nombre, edad y género, y busqueda de  películas por título y género
Registro,autenticacion y autorización de usuarios y uso de Json Web Token

## Construido con ⚙️
[Express](https://expressjs.com/es/) - Framework usado.

[Express-Validator](https://www.npmjs.com/package/express-validator) - Middleware de Express para validar datos.

[Bcrypt](https://www.npmjs.com/package/bcrypt) - Encriptar contraseña.

[Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Generador de Token.

[Mysql2](https://www.npmjs.com/package/mysql2) - BBDD.

[Sequelize](https://www.npmjs.com/package/sequelize) - ORM.

### EndPoints 🔩
**character - movie - genre - type**
   * GET /api/*character*
   * GET /api/*character*/:id 
   * POST /api/*character*
   * PUT /api/*character*/:id 
   * DELETE /api/*character*/:id

**Auth** 🔑

  - POST /api/login
  - POST /api/register


## Iniciar la App 🔧

1. Dirijase a la carpeta donde descargo los archivos e instale los paquetes y dependencias necesarios con el siguiente comando
  ```js
  npm i
  ```
2. Cree el archivo .env y complete con las siguientes variables de muestra que se encuentran en el archivo [.env.example](https://github.com/code-rmc/alkemy-challenge-node/blob/main/.env.example)
3. iniciar la app con
  ```
  node src/index.js
  ```
  
## Versionado 📌
Para todas las versiones mira los [Tags](https://github.com/code-rmc/alkemy-challenge-node/tags) disponibles,
