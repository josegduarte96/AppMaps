import { Feature } from '@/interfaces/places';
import mapboxgl from 'mapbox-gl';
import { MutationTree } from 'vuex';
import { MapState } from './state';


const mutation: MutationTree<MapState> = {
    setMap(state: MapState, map: mapboxgl.Map) {
        state.map = map
    },

    setMarkersPlaces(state, places: Feature[]){
        if (!state.map) return 

        // Borrar marcadores primero
        state.markers.forEach(marker => marker.remove())
        state.markers = []
        for (const place of places) {
            const [lgn, lat] = place.center

            const popup = new mapboxgl.Popup()
                .setLngLat([lgn, lat])
                .setHTML(
                    `<h4>${place.text}</h4>
                    <p>${place.place_name}</p>
                    `
                )
            const marker = new mapboxgl.Marker()
                .setLngLat([lgn, lat])
                .setPopup(popup)
                .addTo(state.map)

            state.markers.push(marker)
                    
        }
        // Borrar lineas de direcciones cuando no se busque ningun place
        if (state.map?.getLayer('RouteString')) {
            state.map.removeLayer('RouteString')
            state.map.removeSource('RouteString')
            state.distance = undefined
            state.duration = undefined
        }
    },

    setLineaDireccion(state, coords: number[][]) {

        const start = coords[0]
        const end = coords[coords.length - 1]

        // Definir bounds (contenido dentro del map)
        const bounds = new mapboxgl.LngLatBounds(
            [start[0], start[1]],
            [start[0], start[1]]
        );

        for (const coord of coords) {
            const newCoord: [number, number] = [coord[0], coord[1]]
            bounds.extend(newCoord)
        }

        state.map?.fitBounds(bounds, {
            padding: 200
        });

        // Polyline
        const sourceData: mapboxgl.AnySourceData = {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: coords
                        }
                    }
                ]
            }
        };

        // Elimino lineas de direcciones que esten cargadas y vacio el sourceData
        if (state.map?.getLayer('RouteString')) {
            state.map.removeLayer('RouteString')
            state.map.removeSource('RouteString')
        }

        // Establezco el nuevo sourceData
        state.map?.addSource('RouteString', sourceData)

        // Establezco la nueva linea de direccion
        state.map?.addLayer({
            id: 'RouteString',
            type: 'line',
            source: 'RouteString',
            layout: {
                'line-cap': 'round',
                'line-join': 'round'
            },
            paint: {
                'line-color': '#3FB1CE',
                'line-width': 2
            }
        });
    },

    setDistanciaDuracion(state, { distance, duration }: { distance: number, duration: number }) {
        let km = distance / 1000
        km = Math.round(km * 100)
        km /= 100

        state.distance = km
        state.duration = Math.floor(duration / 60)
    }
}


export default mutation;