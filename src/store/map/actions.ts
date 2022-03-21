import { ActionTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';
import { directionsApi } from '@/api';
import { DirectionsResponses } from '@/interfaces/directions';


export type LngLat = [number, number]

const actions: ActionTree<MapState, StateInterface> = {
    async obtenerRutas({ commit }, {start, end}: {start: LngLat, end: LngLat} ) {
        const resp = await directionsApi.get<DirectionsResponses>(`${ start.join(',')}; ${end.join(',') }`)

        commit('setDistanciaDuracion', {
            distance: resp.data.routes[0].distance,
            duration: resp.data.routes[0].duration
        })
        commit('setLineaDireccion', resp.data.routes[0].geometry.coordinates)
    }
}



export default actions;