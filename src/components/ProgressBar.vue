<template>
    <div>
        {{ streakLength }}
    </div>
</template>

<script lang="ts">
import { readStore } from '@/store/ReadStore'
import { computed, defineComponent } from 'vue'
export default defineComponent({
    setup() {
        let streakLength = computed(() => readStore.streakLength );

        return {
            streakLength
        }
    }
})
</script>