import axios from 'axios'   

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        country: 'ar',
        types: 'poi,address,locality,neighborhood,country,postcode,place,district,region',
        access_token: 'pk.eyJ1Ijoiam9zZWdkdWFydGU5NiIsImEiOiJjbDB5MGxqZXYwZWxsM2lxaGJlZnViY3k2In0.-RBopAlGwZa5X4kwx31u8A'
    }
})

export default searchApi