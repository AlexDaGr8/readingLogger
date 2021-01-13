<template>
    <div class="progress-bar">
        Current streak: {{ currentStreak.length }} days
        <div class="progress">
            <div class="amount" :style="{width: getPerc(currentStreak.length, 100) + '%'}"></div>
        </div>
        Longest streak: {{ longestStreak.length }} days
        <div class="progress">
            <div class="amount longest" :style="{width: getPerc(longestStreak.length, 100) + '%'}"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { readStore } from '@/store/ReadStore'
import { computed, defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
    setup() {
        let streaks = reactive({
            currentStreak: computed(() => readStore.streaks.currentStreak),
            longestStreak: computed(() => readStore.streaks.longestStreak),
            streaks: computed(() => readStore.streaks.streaks),
        });
        let getPerc = (curr:number,goal:number): number => (curr/goal) * 100;
        return {
            ...toRefs(streaks),
            getPerc
        }
    }
})
</script>

<style>
.progress {
  width: 60%;
  height: 30px;
  margin: 10px auto;
  border: .5px solid var(--color-black);
  border-radius: 5px;
  padding: 2px;
}
.progress > .amount {
  height: 100%;
  background: var(--color-green);
  border: 0px solid transparent;
  border-radius: 3px;
}
.amount.longest {
    background: var(--color-purple);
}
</style>