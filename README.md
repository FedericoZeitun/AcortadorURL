# Deployment de la app en Heroku
https://peaceful-anchorage-24334.herokuapp.com/

# Proyecto Acortador URL con Node.js y MongoDB
En este proyecto se utilizó Node.js y Express para la parte del backend,
mientras que para la base de datos se utilizó MongoDB con Mongoose.

# Resumen del proyecto
El proyecto consiste en ingresar una url normal de cualquier página en el input,
y la aplicación va a generar la url corta, utilizando el package de "shortId" para
poder generarla. En caso de que el usuario quiera ingresar en la url un valor no válido,
el backend lo detectará inmediatamente y lanzará un error,
así también en caso de que haya un error de otro tipo.

# MVC
Para trabajar de una manera mas organizada, se uso MVC como patrón, teniendo por separado los models,
controllers y views, con sus respectivas carpetas y archivos. 
En views se utilizó Pug como motor de plantilla de Node.js para escribir código HTML.
En controllers/urlController.js definimos las rutas y las exportamos hacia el router/index.js.
En mdoels/Url.js se definio el modelo donde están los métodos para generar la estructura de la base de datos.

También se utilizaron otras dependencias a lo largo del proyecto,
como por ejemplo Nodemon y Dotenv.
