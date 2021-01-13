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
  margin-bottom: 5px;
}
button {
    display: inline-block;
    padding: 5px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: -2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
button.add {
  background-color: cyan;
}
button.delete {
  width: 30px;
  height: 30px;
  background-color: #e74c3c;
}
</style>