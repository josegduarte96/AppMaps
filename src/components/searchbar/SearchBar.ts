import { usePlaceStore } from "@/composables";
import { computed, defineComponent, ref } from "vue";
import SearchResults from "../search-results/SearchResults.vue";


export default defineComponent({
    name: 'SearchBar',
    components: { SearchResults },
    setup() {
        const debounceValue = ref()
        const debounceTimeout = ref()
        const { searchPlaceByTerm } = usePlaceStore()
        
        
        return {
            searchTerm: computed({
                get() {
                  return debounceValue.value
                },
                set(val: string) {
                  if ( debounceTimeout.value ) clearTimeout(debounceTimeout.value)

                  debounceTimeout.value = setTimeout(() => {
                    debounceValue.value = val
                    searchPlaceByTerm(val)
                  }, 500);
                }
            })
        }
    }
})