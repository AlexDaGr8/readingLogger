<template>
    <div>
        <div class="list-input">
            <div class="list">    
                <div v-for="data in readList" :key="data.date">
                    {{ formatDate(data.date) }} - {{ data.book }} <span v-show="data.minutes">({{data.minutes}} min)</span>
                </div>
            </div>
            <div>
                <reading-form></reading-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref, reactive, computed } from 'vue'
import { readData, ReadState, readStore } from '@/store/ReadStore'
import ReadingForm from '@/components/ReadingForm.vue';

export default defineComponent({
    components: { ReadingForm },
    setup() {
        let readList = computed(() => readStore.readList);
        
        let formatDate = (date: Date) => {
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        }
        return {
            readList,
            formatDate
        }
    }
})
</script>

<style scoped>
.list-input {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  margin: auto;
  text-align: left;
  width: 100%;
}
input[type="number"] {
    width: 50px;
}
</style>