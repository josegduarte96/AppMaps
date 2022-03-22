<script lang="ts" src="./SearchBar.ts"/>

<template>
    <div class="searchbar-container">
        <input 
            placeholder="Buscar Lugares.." 
            type="text" 
            class="buscador form-control"
            v-model="searchTerm"
        />
        <SearchResults/>
    </div>
</template>


<style scoped>
.searchbar-container{
    position: fixed;
    top: 20px;
    left: 30px;
    width: 280px;
    background-color: white;
    overflow: hidden;
    border-radius: 2px;
    padding: 3px;
    z-index: 9999;
}
</style>