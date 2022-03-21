<template>
  <button @click="ubicationBtn" class="btn btn-primary">
      Ir a mi ubicacion
  </button>
</template>

<script lang="ts">
import { useMapStore, usePlaceStore } from '@/composables'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MyLocationButton',
    setup() {
       const {userLocation, isUserLocationReady} = usePlaceStore()
       const { map } = useMapStore()
       
       return {
           ubicationBtn: () => {
               map.value?.flyTo({
                   center: userLocation.value!,
                   zoom: 14
               })
           }
       }
    },
})
</script>


<style scoped>
button {
    position: fixed;
    right: 30px;
    top: 20px;
}
</style>