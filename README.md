# AppMaps

[AppMaps](https://appmaps.netlify.app/#/)
es una aplicacion hecha en Vue.js con **TypeScript** y **Vuex**, con la API de [geolocationAPI](https://w3c.github.io/geolocation-api/#introduction) y la API de [MapBox](https://www.mapbox.com/)

Debes permitir la localizacion en tu navegador.

# Instalacion desde NPM
instalar Node Modules
````
npm install
````
Iniciar App de forma local
````
npm run serve
````

# Uso:

La aplicacion consta de un buscador solo de lugares cercanos a la ubicacion de referencia que tiene el navegador (Maneja la ubicacion exacta depende del navegador).

Cuando se hace un busqueda muestra un listado de 5 lugares.
Si hace click en cada lugar el mapa te lleva hasta el mismo, si presionas "Como llegar" te mostrara una ruta sugerida desde tu ubicacion hasta la ubicacion del lugar que marcaste.
