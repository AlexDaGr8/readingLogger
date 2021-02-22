<template>
    <div class="modal">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">Timer</div>
                <div class="modal-body">
                    {{ timeObj.toString() }}
                </div>
                <div v-if="!paused" class="modal-footer">
                    <button @click="pause" class="red">Stop</button>
                </div>
                <div v-else class="modal-footer">
                    <button @click="restartTimer" class="green">Start</button>
                    <button @click="stopTime">Complete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { timerStore } from '@/store/TimerStore';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'TimerModal',
  setup() {
      const testmsg: string = 'hi';
      const stopTime = () => {
          timerStore.endTime();
      }
      const pause = () => {
          timerStore.pauseTimer();
      }
      const restartTimer = () => {
          timerStore.restartTimer();
      }
      const timeObj = computed(() => timerStore.timeObj);
      const paused = computed(() => timerStore.getState().paused);
      return {
          testmsg,
          stopTime,
          pause,
          paused,
          restartTimer,
          timeObj
      }
  }
});
</script>

<style scoped>
.modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}
.modal .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
.modal .modal-wrapper .modal-container {
    width: 80%;
    margin: 0 auto;
    padding: 1em 2em;
    background: white;
}
.modal .modal-wrapper .modal-container div {
    padding: .5em;
}
.modal .modal-wrapper .modal-container .modal-header {
    font-size: 1.5em;
    font-weight: bold;
}
.modal .modal-wrapper .modal-container .modal-body {
    font-size: 1.25em;
}
.modal .modal-wrapper .modal-container .modal-footer button {
    font-size: 1.25em;
    padding: 1em;
}
</style>