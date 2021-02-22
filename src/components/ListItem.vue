<template>
    <div class="list-item">
        <h4 class="book">{{ data.book }}</h4>
        <span class="date">{{ formatDate(data.date) }}</span>
        <div class="two-columns">
            <span v-show="data.minutes">Time read: </span> <span v-show="data.minutes">{{ minutesToString(data.minutes) }}</span>
            <span v-show="data.pageFrom && data.pageTo">Pages read:</span> <span v-show="data.pageFrom && data.pageTo">{{data.pageTo - data.pageFrom }} pages ({{ data.pageFrom }}-{{ data.pageTo }})</span>
        </div>
        <div class="button-group">
            <button class="edit" @click="editItem(data)">Edit</button>
            <button class="delete" @click="deleteItem(data)">X</button>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { logItem, readStore } from "@/store/ReadStore";

export default defineComponent({
    props: {
        data: Object
    },
    setup({ data }) {
        let formatDate = (date: Date) => {
            return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
        };
        let deleteItem = async (item: logItem) => {
            let done = await readStore.deleteItem(item);
            console.log("done", done);
        };
        let editItem = (item: logItem) => {
            readStore.setEditItem(item);
        } 
        const minutesToString: (minutes: number) => string = (minutes: number) => {
            let min: string = Math.floor(minutes).toString().padStart(2,'0');
            let seconds: string = Math.floor((minutes % 1) * 100).toString().padStart(2,'0');
            return `${min}:${seconds}`;
        }
        return {
            data,
            formatDate,
            deleteItem,
            editItem,
            minutesToString
        };
    },
});
</script>

<style scoped>
.list-item {
    display: grid;
    grid-template-columns: 2fr 0.75fr;
    margin: 2% auto;
    width: 96%;
    padding: 10px;
    box-shadow: 0px 0px 4px 2px var(--color-grey);
    border-radius: 5px;
}
h4 {
    margin: 3% 0;
    text-align: left;
}
.two-columns {
    display: grid;
    grid-template-columns: 35% 1fr;
    width: 100%;
}
.button-group {
    text-align: right;
}
.date {
    padding: 5px;
    text-align: right;
    margin-bottom: 10px;
}
</style>