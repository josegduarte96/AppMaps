import { createStore } from 'vuex';

// My custom modules
// import exampleModule from './module-template';
import places from './places/index';
import { PlacesState } from './places/state';

import map from './map/index';
import { MapState } from './map/state';



export interface StateInterface {
  places: PlacesState
  map: MapState
}

export default createStore<StateInterface>({
  modules: {
    places,
    map
  }
})
