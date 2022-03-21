<script lang="ts" src="./SearchResults.ts"/>
<template>

    <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
        <h5>Cargando</h5>
        <span>Espere por favor..</span>
    </div>

     <ul v-else-if="places.length > 0" class="list-group mt-3">
        <li 
        v-for="place in places" 
        :class="{active: place.id === activePlace}"
        class="list-group-item list-group-item-action"
        :key="place.id" 
        @click="placeSelect(place)" 
        >
            <h4 class="fw-bold">{{place.text}}</h4>
            <p>{{place.place_name}}</p>
            <div align="right">
                <button 
                :class="(place.id === activePlace) ? 'btn btn-outline-light' : 'btn btn-outline-primary'"
                class="btn btn-outline-primary btn-sm"
                @click="direcciones(place)"
                >
                    Como llegar
                </button>
            </div>
        </li>         
    </ul>
</template>

<style scoped>
li{
    cursor: pointer;
}
h4{
    font-size: 15px;
}
p{
    font-size: 12px;
    margin: 0;
}
</style>