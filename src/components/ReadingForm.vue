<template>
    <div>
        <div class="field">
            <label for="book">Book: </label>
            <input name="book" type="text" v-model="book" placeholder="Enter Book...">
        </div>
        <div class="field">
            <label for="date">Date: </label>
            <input name="date" type="date" v-model="dateStr">
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
        <button class="add" @click="add">Add</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref, reactive, computed } from 'vue'
import { logItem, ReadState, readStore } from '@/store/ReadStore'

export default defineComponent({
    setup() {
        let now = computed(() => new Date());
        let nowTime = computed(() => `${now.value.getHours().toString().padStart(2, '0')}:${now.value.getMinutes().toString().padStart(2, '0')}`)
        let toDateValueStr = (date: Date) => {
            let year = date.getFullYear();
            let month = (date.getMonth() + 1).toString().padStart(2, '0');
            let day = date.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`
        }
        let convertToDate = (str: string) => {
            let splitDate: string[] = str.split('-');
            console.log('splitDate', splitDate)
            return new Date(+splitDate[0], +splitDate[1] - 1, +splitDate[2]);
        }
        let form = reactive<logItem>({
            book: '',
            date: now.value,
            notes: '',
            time: nowTime.value,
            minutes: null,
            pageTo: null,
            pageFrom: null,
            dateStr: toDateValueStr(now.value)
        });
        let add = () => {
            console.log('form.dateStr', form.dateStr)
            console.log('new Date(form.dateStr as string)', convertToDate(form.dateStr as string))
            let newData: logItem = {
                book: form.book,
                date: convertToDate(form.dateStr as string),
                notes: form.notes,
                time: form.time,
                minutes: form.minutes,
                pageTo: form.pageTo,
                pageFrom: form.pageFrom,
                dateStr: form.dateStr
            }
            readStore.add(newData);
            form.book = '';
            form.date = now.value;
            form.notes = ''
            form.time = nowTime.value
            form.minutes = null
            form.pageTo = null
            form.pageFrom = null,
            form.dateStr = toDateValueStr(now.value)
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