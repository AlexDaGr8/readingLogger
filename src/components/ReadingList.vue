<template>
  <div class="list">
    <list-item v-for="data in readList" :key="data.date" :data="data"></list-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { readStore } from "@/store/ReadStore";
import ListItem from "@/components/ListItem.vue";

export default defineComponent({
  components: { ListItem },
  setup() {
    let readList = computed(() => readStore.readList);
    return {
      readList
    };
  },
});
</script>

<style scoped>
.list {
  margin: 5px auto;
  text-align: left;
  width: 90%;
  height: 60vh;
  overflow-y: scroll;
  padding: 10px 10px;
}
</style>
