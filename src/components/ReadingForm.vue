<template>
    <div>
        <div class="field">
            <label for="book">Book: </label>
            <input name="book" type="text" v-model="book" placeholder="Enter Book...">
        </div>
        <div class="field">
            <label for="date">Date: </label>
            <input name="date" type="date" v-model="date">
        </div>
        <div class="field">
            <label for="time">Time: </label>
            <input name="time" type="time" v-model="time">
        </div>
        <div class="field">
            <label for="minutes">Minutes: </label>
            <input name="minutes" type="number" v-model="minutes">
        </div>
        <div class="field">
            <label>Pages (from-to): </label>
            <div>
                <input name="pagesFrom" type="number" v-model="pageFrom"> 
                <span>-</span>
                <input name="pagesFrom" type="number" v-model="pageTo"> 
            </div>
        </div>
        <button @click="add">Add</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref, reactive, computed } from 'vue'
import { readData, ReadState, readStore } from '@/store/ReadStore'

export default defineComponent({
    setup() {
        let form = reactive<readData>({
            book: '',
            date: new Date(),
            notes: '',
            time: null,
            minutes: null,
            pageTo: null,
            pageFrom: null
        });
        let add = () => {
            let newData: readData = {
                book: form.book,
                date: new Date(form.date),
                notes: form.notes,
                time: form.time,
                minutes: form.minutes,
                pageTo: form.pageTo,
                pageFrom: form.pageFrom
            }
            readStore.add(newData);
            form.book = '';
            form.date = new Date();
            form.notes = ''
            form.time = null
            form.minutes = null
            form.pageTo = null
            form.pageFrom = null
        }

        return {
            ...toRefs(form),
            add
        }
    }
})
</script>

<style scoped>
input[type="number"] {
    width: 50px;
}
.field {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 5px;
}
button {
    margin: 0 auto;
    display: block;
    width: 30%;
}
</style>