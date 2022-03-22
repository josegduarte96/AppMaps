import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/api';
import { Feature, PlacesResponse } from '@/interfaces/places';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation({ commit }) {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          }
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit('setLngLat', coords),
            (err) => {
                console.error(err)
                alert('No geolocation :(')
            },
            options
        )
    },

    async searchPlaceByTerm({commit, state}, query: string): Promise<Feature[]> {
        
        if (query.length === 0) {
            // TODO: crear setPlaces
            commit('setPlaces', [])
            return []
        }
        
        if (!state.userLocation) {
            throw new Error('el usuario no tiene ubicacion activa')
        }

        commit('setIsLoadingPlaces')

        const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        }) 
        if (window.screen.width < 480) {
            commit('setPlaces', resp.data.features.slice(0, 2))
        } else {
            commit('setPlaces', resp.data.features)
        }
         return resp.data.features
    }
}



export default actions;