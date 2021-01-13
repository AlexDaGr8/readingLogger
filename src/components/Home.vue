<template>
  <div>
    <h1>Your Reading Log</h1>
    <div class="container">
      <reading-form class="col-span2"></reading-form>
      <progress-bar class="col-span2"></progress-bar>
      <reading-list class="col-span2"></reading-list>
      <Calendar class="col-span2"></Calendar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ReadingList from '@/components/ReadingList.vue';
import Calendar from '@/components/Calendar.vue';
import ProgressBar from './ProgressBar.vue';
import ReadingForm from './ReadingForm.vue';

export default defineComponent({
  name: 'Home',
  components: { ReadingList, Calendar, ProgressBar, ReadingForm }
});
</script>