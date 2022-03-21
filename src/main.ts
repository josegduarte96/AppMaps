import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zZWdkdWFydGU5NiIsImEiOiJjbDB5MGxqZXYwZWxsM2lxaGJlZnViY3k2In0.-RBopAlGwZa5X4kwx31u8A';


if (!navigator.geolocation) {
    alert('Tu navegador no tiene activado el GeoLocation')
    throw new Error('Tu navegador no tiene activado el GeoLocation')
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
