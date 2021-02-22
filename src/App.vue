<template>
  <div>
    <!-- <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <router-view></router-view> -->
    <home></home>
    <timer-modal v-if="showModal"></timer-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Home from '@/components/Home.vue';
import TimerModal from '@/components/TimerModal.vue'
import { timerStore } from '@/store/TimerStore';

export default defineComponent({
  name: 'App',
  components: { Home, TimerModal },
  setup() {
    const showModal = computed(() => timerStore.showModal);
    return {
      showModal
    }
  }
});
</script>

<style>
:root {
  --color-black: rgb(23, 17, 35);
  --color-green: rgb(123, 241, 168);
  --color-red: rgb(255, 107, 107);
  --color-blue: rgb(144, 241, 239);
  --color-yellow: rgb(255, 199, 89);
  --color-purple:rgb(119, 101, 227);
  --color-grey: rgb(232, 236, 237);

  --color-green-op: rgba(123, 241, 168, 0.7);
  --color-red-op: rgba(255, 107, 107, 0.7);
  --color-red-op-more: rgba(255, 107, 107, 0.1);
  --color-blue-op: rgba(144, 241, 239, 0.7);
  --color-blue-op-more: rgba(144, 241, 239, 0.1);
  --color-yellow-op: rgba(255, 199, 89, 0.7);
  --color-purple-op: rgba(119, 101, 227, 0.7);
  --color-grey-op: rgba(232, 236, 237, 0.7);
  --color-black-op: rgba(23, 17, 35, 0.3);
}
#app {
  font-family: 'Courier New', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-black);
  margin-top: 30px;
}
.container {
  display: grid;
  width: 80vw;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  margin: auto;
}
.container > div {
  margin: 5px;
}
.col-span2 {
  grid-column: span 2;
}
.col-span3 {
  grid-column: span 3;
}
button {
    display: inline-block;
    margin: 5px 5px;
    padding: 5px 8px;
		appearance: none;
		outline: 0;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: -1px 2px 2px 1px var(--color-black-op);
    background-color: var(--color-grey);
    position: relative;
}
button:active {
    box-shadow: 0px 1px 2px 0px var(--color-black-op);
    top: 1px;
    left: -1px;
}
button:hover {
    background-color: var(--color-grey-op);
}
button.add, button.green {
  background-color: var(--color-green);
}
button.add:hover, button.green:hover{
    background-color: var(--color-green-op);
}
button.edit {
  background-color: var(--color-blue);
}
button.edit:hover {
    background-color: var(--color-blue-op);
}
button.delete, button.red {
  background-color: var(--color-red);
}
button.delete {
  width: 30px;
  height: 30px;
}
button.delete:hover, button.red:hover {
    background-color: var(--color-red-op);
}
</style>
