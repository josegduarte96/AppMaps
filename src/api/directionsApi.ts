import axios from 'axios'   

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        language: 'es',
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1Ijoiam9zZWdkdWFydGU5NiIsImEiOiJjbDB5MGxqZXYwZWxsM2lxaGJlZnViY3k2In0.-RBopAlGwZa5X4kwx31u8A'
    }
})

export default directionsApi