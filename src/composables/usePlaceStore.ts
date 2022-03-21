import { computed, onMounted } from "vue"
import { StateInterface } from "@/store"
import { useStore } from "vuex"

export const usePlaceStore = () => {

    const store = useStore<StateInterface>()

    
    onMounted(() => {
        if (!store.getters['places/isUserReadyLocation']) {
            store.dispatch('places/getInitialLocation')
        }
    })

    return {
        isLoading: computed(() => store.state.places.isLoading),
        userLocation: computed(() => store.state.places.userLocation),
        places: computed(() => store.state.places.places),
        isLoadingPlaces: computed(() => store.state.places.isLoadingPlaces),

        //Actions
        searchPlaceByTerm: (query = '') => store.dispatch('places/searchPlaceByTerm', query),

        //Getters
        isUserLocationReady: computed<boolean>(() => store.getters['places/isUserLocationReady']),

        
        //Mutations
    }

}