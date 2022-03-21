<template>
    <Map/>
    <MyLocationButton/>
    <SearchBar/>
    <DistanceDuration />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Map from '../components/mapview/Map.vue'
import MyLocationButton from '../components/my-location-button/MyLocationButton.vue'
import SearchBar from '../components/searchbar/SearchBar.vue'
import DistanceDuration from '../components/distance-duration/DistanceDuration.vue'
export default defineComponent({
  name: 'Home',
  components: { Map, MyLocationButton, SearchBar, DistanceDuration },
  setup() {

    // usePlaceStore()
  }
});
</script>
