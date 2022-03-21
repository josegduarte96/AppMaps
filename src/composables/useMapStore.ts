import { Feature } from "@/interfaces/places"
import { StateInterface } from "@/store"
import mapboxgl from "mapbox-gl"
import { computed } from "vue"
import { useStore } from "vuex"
import { LngLat } from '@/store/map/actions'

export const useMapStore = () => {

    const store = useStore<StateInterface>()

    return {
        // State
        map: computed(() => store.state.map.map),
        distance: computed(() => store.state.map.distance),
        duration: computed(() => store.state.map.duration),
        // getters
        isMapReady: computed(() => store.getters['map/isMapReady']),
        // mutations
        setMap: (map: mapboxgl.Map) => store.commit('map/setMap', map),
        setMarkersPlaces: (places: Feature[]) => store.commit('map/setMarkersPlaces', places),
        
        // actions
        obtenerRutas: (start:LngLat, end:LngLat) => store.dispatch('map/obtenerRutas', {start, end})

    }
}