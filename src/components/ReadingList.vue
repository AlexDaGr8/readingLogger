<template>
  <div class="list">
    <div v-for="data in readList" :key="data.date" class="grid-2">
      <div>
        {{ formatDate(data.date) }} - {{ data.book }} <span v-show="data.minutes">({{ data.minutes }} min)</span>
      </div>
      <div class="button-group">
        <button class="edit" @click="editItem(data)">Edit</button>
        <button class="delete" @click="deleteItem(data)">X</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref, reactive, computed } from "vue";
import { logItem, readStore } from "@/store/ReadStore";
import ReadingForm from "@/components/ReadingForm.vue";

export default defineComponent({
  components: { ReadingForm },
  setup() {
    let readList = computed(() => readStore.readList);

    let formatDate = (date: Date) => {
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    };
    let deleteItem = async (item: logItem) => {
      let done = await readStore.deleteItem(item);
      console.log("done", done);
    };
    let editItem = (item: logItem) => {
        readStore.setEditItem(item);
    } 
    return {
      readList,
      formatDate,
      deleteItem,
      editItem
    };
  },
});
</script>

<style scoped>
.list {
  margin: 5px auto;
  text-align: left;
  width: 90%;
  height: 500px;
  overflow-y: scroll;
  box-shadow: -1px 4px 4px 2px var(--color-grey);
  padding: 10px 10px;
}
.grid-2 {
  display: grid;
  grid-template-columns: 2fr 0.75fr;
  margin: 5px auto;
  width: 100%;
}
.button-group {
    text-align: center;
}
</style>
