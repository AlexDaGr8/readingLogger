<template>
    <div class="reading-form">
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
                <input name="pagesTo" type="number" v-model="pageTo"> 
            </div>
        </div>
        <button v-if="editItem === undefined" class="add" @click="add">Add</button>
        <div class="button-group" v-else>
            <button class="update" @click="update">Update</button>
            <button class="add" @click="add">Save New</button>
        </div>
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
            return new Date(+splitDate[0], +splitDate[1] - 1, +splitDate[2]);
        }
        let form = reactive<logItem>({
            uuid: null,
            book: '',
            date: now.value,
            notes: '',
            time: nowTime.value,
            minutes: null,
            pageTo: null,
            pageFrom: null,
            dateStr: toDateValueStr(now.value)
        });
         let editItem = computed(() => {
            let toEdit = readStore.editItem;
            if (toEdit !== undefined) {
                console.log(readStore.editItem)
                form.uuid = toEdit.uuid;
                form.book = toEdit.book;
                form.date = toEdit.date;
                form.time = toEdit.time;
                form.notes = toEdit.notes;
                form.minutes = toEdit.minutes;
                form.pageFrom = toEdit.pageFrom;
                form.pageTo = toEdit.pageTo;
                form.dateStr = toEdit.dateStr
            }
            return toEdit;
        })
        let add = () => {
            let newData: logItem = {
                book: form.book,
                date: convertToDate(form.dateStr as string),
                notes: form.notes,
                time: form.time,
                minutes: form.minutes,
                pageTo: form.pageTo ? +form.pageTo as number : null,
                pageFrom: form.pageFrom ? +form.pageFrom as number : null,
                dateStr: form.dateStr
            }
            console.log(newData)
            readStore.add(newData);
            resetForm();
        }
        let update = async () => {
            let newData: logItem = {
                uuid: form.uuid,
                book: form.book,
                date: convertToDate(form.dateStr as string),
                notes: form.notes,
                time: form.time,
                minutes: form.minutes,
                pageTo: form.pageTo,
                pageFrom: form.pageFrom,
                dateStr: form.dateStr
            }
            let update = await readStore.updateItem(newData);
            resetForm();
        }
        let resetForm = () => {
            form.uuid = null;
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
            add,
            editItem,
            update
        }
    }
})
</script>

<style scoped>
.reading-form {
    width: 90%;
}
input[type="number"] {
    width: 50px;
}
.field {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 5px;
    text-align: left;
}
.field label {
    text-align: center;
}
button {
    margin: 0 auto;
    display: block;
    width: 30%;
}
.button-group button {
    margin: 0 3%;
    display: inline;
}
</style>