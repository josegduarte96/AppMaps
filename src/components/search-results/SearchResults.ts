import { useMapStore, usePlaceStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
    name: 'SearchResults',
    setup() {
        const { isLoadingPlaces, places, userLocation } = usePlaceStore()
        const { map, setMarkersPlaces, obtenerRutas } = useMapStore()
        const activePlace = ref('')

        watch(places, (newPlaces) => {
            activePlace.value = ''
            setMarkersPlaces(newPlaces)
        })

        return{
            isLoadingPlaces, 
            places,
            activePlace,
            // establece la ruta en el mapa desde una ubicacion a otra
            direcciones: (place: Feature) => {
                // si en la ubicacion del usuario esta vacia hago un return
                 if (!userLocation.value) return

                activePlace.value = place.id
                // ubicacion para ir
                const [lng, lat] = place.center
                // ubicacion del usuario
                const [userLng, userLat] = userLocation.value

                // establezco el array start y end como un array de 2 number y paso la ubicacion del user y la ubicacion 
                // que recibo en la funcion (place)
                const start: [number, number] = [userLng, userLat]
                const end: [number, number] = [lng, lat]

                obtenerRutas(start, end)
            },
            // esta funcion hace el fly cuando hago click en cada direccion
            placeSelect: (place: Feature) => {
                activePlace.value = place.id
                const [lng, lat] = place.center
                map.value?.flyTo({
                    center: [lng, lat],
                    zoom: 14
                })
            }
        }
    }
});