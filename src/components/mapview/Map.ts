import { usePlaceStore, useMapStore } from "@/composables";
import mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
    name: 'Map',
    setup() {
        const mapElement = ref<HTMLDivElement>()
        const {userLocation, isUserLocationReady} = usePlaceStore()
        const { setMap } = useMapStore()
        
        const initMap = async() => {
          if (!mapElement.value) throw new Error('No se cargo el divElement')
          if (!userLocation.value) throw new Error('user location not found')

          await Promise.resolve()

          const map = new mapboxgl.Map({
              container: mapElement.value, // container ID
              style: 'mapbox://styles/mapbox/light-v10', // style URL
              center: userLocation.value, // starting position [lng, lat]
              zoom: 15 // starting zoom
            });
            const myLocationPopup = new mapboxgl.Popup()
                .setLngLat(userLocation.value)
                .setHTML(
                    `<h5>Tu Ubicacion</h5>`
                )
            const myLocationMarker = new mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup)
                .addTo(map)
        
            // TODO: ESTABLECER EL MAP GLOBAL EN EL modulo map del STORE
            setMap(map) 
        }

        
        watch(isUserLocationReady, (newVal) => {
            if(newVal) initMap()
        })
        
        onMounted(() => {
            if (isUserLocationReady.value) return initMap()
        })

        return {
            isUserLocationReady,
            mapElement
        }
    }
});