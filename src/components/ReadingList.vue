<template>
        <div class="list-input">
            <div class="list">    
                <div v-for="data in readList" :key="data.date" class="grid-2">
                    <div>
                        {{ formatDate(data.date) }} - {{ data.book }} <span v-show="data.minutes">({{data.minutes}} min)</span> 
                    </div>
                    <button class="delete" @click="deleteItem(data)">X</button>
                </div>
            </div>
            <div>
                <reading-form></reading-form>
            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref, reactive, computed } from 'vue'
import { logItem, readStore } from '@/store/ReadStore'
import ReadingForm from '@/components/ReadingForm.vue';

export default defineComponent({
    components: { ReadingForm },
    setup() {
        let readList = computed(() => readStore.readList);
        
        let formatDate = (date: Date) => {
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        }
        let deleteItem = async (item: logItem) => {
            await readStore.deleteItem(item);
        }
        return {
            readList,
            formatDate,
            deleteItem
        }
    }
})
</script>

<style scoped>
.list-input {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  margin: 5px auto;
  text-align: left;
  width: 100%;
}
input[type="number"] {
    width: 50px;
}
.grid-2 {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: auto;
  width: 100%;
}
</style>