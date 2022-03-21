<script lang="ts" src="./Map.ts" />

<template>
  <div v-if="!isUserLocationReady" class="loading-map d-flex justify-content-center align-items-center">
    <div class="text-center">
      <h1>Espere por favor</h1>
      <span>Localizando...</span>
    </div>
  </div>

  <div 
  v-show="isUserLocationReady"
  class="container-map" 
  ref="mapElement"
  />
</template>


<style scoped>

.loading-map {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
}

.container-map {
  background-color: black;
  width: 100vw;
  height: 100vh;
}
</style>