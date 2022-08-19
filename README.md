# Rest API para mutaciones de ADN

Rest API para obtener información de ADN, por el momento solo tiene las funciones de saber si el ADN tiene mutaciones, devuelve estadisticas sobre el mismo y tiene una autentificacion basica.

<kbd>ExpressJS</kbd>  <kbd>Firebase</kbd>  <kbd>Typescript</kbd>  <kbd>Jest</kbd>  <kbd>Swagger</kbd>

### Demos producción

Documentación de la API: [adn-mutations.web.app](https://adn-mutations.web.app/)

URL principal de la API: [us-central1-adn-mutations.cloudfunctions.net](https://us-central1-adn-mutations.cloudfunctions.net/api)

### Servidor

Para subir la API y la documentación a la nuve y obtener una base de datos se utilizo los servicios de [Firebase](https://firebase.google.com/).

- Base de datos: Firebase Firestore (base de datos no relacionable)
- Documentación: Firebase Hosting
- Rest API: Firebase Functions

Se programo un CI/CD con Github Actions para que se compile el proyecto y se suba al servidor al hacer un `git push` a la rama master.

En la carpeta "/functions" es donde se va a compilar la API y se va a subir a Firebase Functions

En la carpeta "/public" es donde esta todo lo relaciónado a la documentación (implementado con Swagger) y se va a subir a Firebase Hosting

Hay dos archivos de configuración importantes
- /firebase.json: Es la configuración basica para el deploy (lo demas esta en el CI/CD)
- /src/services/firebase.sdk.key.json: Llave privada para consumir todos los servicios de Firebase (obviamente no esta subido al repositorio)

### Correr el proyecto en local

**Requisitos**

Como se comento anteriormente se necesita el archivo **firebase.sdk.key.json** y colocarlo en donde corresponde (existe un archivo de ejemplo, hay que reemplazarlo). Para este archivo se puede generar al crear un proyecto nuevo en Firebase ([Tutorial](https://clemfournier.medium.com/how-to-get-my-firebase-service-account-key-file-f0ec97a21620)) o puedes escribirme personalmente para que te pase mi archivo especifico.

Este proyecto se desarrollo con la version 16 de [NodeJS](https://nodejs.org/), recomiendo esta version para correrlo en local (si tenes otra version recomiendo [NVM](https://github.com/nvm-sh/nvm) para poder tener varias versiones de NodeJS en tu sistema operativo).

Tambien para descargar el proyecto se recomienda tener Git instalado.

**Descargar y correr el proyecto**

Abrir la consola y dirigirse a la carpeta donde quieras descargar el respositorio y correr el siguiente comando

`git clone https://github.com/matidiaz00/adn_mutations.git`

Dirigirse a la nueva carpeta "adn_mutations" y correr el siguiente comando para instalar las dependencias

`npm install`

Ahora corremos el siguiente comando para compilar el proyecto cada vez que haya un cambio

`npm run serve:api`

Para visualizar el proyecto se necesita correr los servidores, en este caso utilizamos de forma local los servidores de firebase, para eso abrimos otra consola y nos paramos en el mismo repositorio para correr el siguiente comando

`npm run serve`

**Visualizar el proyecto**

Si hicimos los pasos anteriores ya podemos ingresar a la documentacion desde [localhost](http://localhost:5000/)

Para hacer pruebas de la API se puede utilizar herramientas como postman o en mi caso recomiendo una extención de Visual Studio llamada Thunder Client, deje en la raiz del repositorio el archivo **thunder-client.json** para que lo puedan importar si lo desean.

La URL base de la API es la siguiente **http://localhost:5001/adn-mutations/us-central1/api**

**Listado de endpoints**

En la siguiente tabla esta la información de todos los endpoints

Type | Endpoint | Description
------------- | ------------- | -------------
GET | / | - | Mensaje si funciona la API
GET | /swagger.json | Configuración para Swagger UI
GET | /v1/accounts/json-web-token | Se puede utilizar el UID de Firebase como token
POST | /v1/dna/mutations | Define si un ADN tiene mutación o no
GET | /v1/dna/stats | Estadisticas de mutaciones de ADN en nuestra base de datos

**Ejemplos para el endpoint POST**

Para el endpoint POST /v1/dna/mutations se necesita enviarle un JSON (en el Body Request de la llamada) de un ADN para que nos diga si tiene mutación o no, estos son unos ejemplos:

Ejemplo de ADN con mutación

```{
    dna: [
        "ATGCGA", "CAGTGC", "TTATGT",
        "AGAAGG", "AGTCAG", "TCACTG"
    ]
}```

Ejemplo de ADN sin mutación

```{
    dna: [
        "ATGCGA", "CAGTGC", "TTATTT",
        "AGACGG", "GCGTCA", "TCACTG"
    ]
}```

Otro ejemplo de ADN con mutación

```{
    dna: [
        "ATGCGA", "CAGTGC", "TTATGT",
        "AGAAGG", "CCCCTA", "TCACTG"
    ]
}```