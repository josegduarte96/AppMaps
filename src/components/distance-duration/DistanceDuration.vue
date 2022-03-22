<template>
  <div v-if="distance" class="trip-container column">
      <div class="col">Distancia: <strong>{{distance}} Km</strong></div>
      <div class="col">Duracion: <strong>{{duration}} minutos</strong></div>
  </div>
</template>

<script lang="ts">
import { useMapStore } from '@/composables'
import { defineComponent } from 'vue'

export default defineComponent({
name: 'DistanceDuration',
    setup() {
        const {duration, distance} = useMapStore()

        return {
            duration, 
            distance
        }
    },
})
</script>


<style scoped>
.trip-container{
    position: fixed;
    bottom: 100px;
    padding: 10px;
    left: 35px;
    width: 270px;
    font-size: 25px;
    background-color: white;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
    z-index: 9999;
}

strong{
    color: #3fb1ce;
}

@media screen and (max-width: 480px) {
    .trip-container {
        position: fixed;
        bottom: 120px;
        padding: 10px;
        left: 15px;
        width: 200px;
        font-size: 15px;
        background-color: white;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
        z-index: 9999;
    }
}

</style>