<template>
    <div class="minutes-chart">
        
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { readStore } from "@/store/ReadStore";

export default defineComponent({
  setup() {
    let readList = computed(() => readStore.readList);
    return {
      readList
    };
  },
});
</script>