import { Feature } from '@/interfaces/places';
import { MutationTree } from 'vuex';
import { PlacesState } from './state';


const mutation: MutationTree<PlacesState> = {
    setLngLat(state: PlacesState, coords) {
        const { longitude, latitude } = coords
        state.userLocation = [longitude, latitude]
        state.isLoading = false
    },

    setIsLoadingPlaces(state) {
        state.isLoadingPlaces = true
    },

    setPlaces(state: PlacesState, places: Feature[]) {
        state.places = places
        state.isLoadingPlaces = false
    }
}


export default mutation;