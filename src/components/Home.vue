<template>
  <div>
    <h1>Home</h1>
    <div class="container">
      <div class="col-span2 progress"></div>
        <reading-list></reading-list>
        <Calendar></Calendar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ReadingList from '@/components/ReadingList.vue';
import Calendar from '@/components/Calendar.vue';

export default defineComponent({
  name: 'Home',
  components: { ReadingList, Calendar }
});
</script>

<style>
.container {
  display: grid;
  width: 80vw;
  grid-template-columns: 1fr 1fr;
  margin: auto;
}
.col-span2 {
  grid-column: span 2;
}
.progress {
  width: 100%;
  border: solid blue;
}
</style>