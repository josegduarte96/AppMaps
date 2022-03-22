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

@media screen and (max-width: 480px) {
    button {
       position: fixed;
       height: 50px;
       top: 85vh;
       bottom: 0px;
       left: 10px;
       right: 140px;
       margin-bottom: 0px;
    }
}
</style>