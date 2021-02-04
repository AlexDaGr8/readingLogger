<template>
    <div class="full-calendar">
        <div class="grid-cal month">
            <button @click="prevYear" :disabled="noPrevYear">Next</button>
            <div>
                <span :class="{ hidden: editYear }" @click="editYear = true">{{ yearId }}</span>
                <input :class="{ hidden: !editYear }" type="number" v-model="yearId" @keyup.enter="editYear = false" @blur="editYear = false">
            </div>
            <button @click="nextYear" :disabled="noNextYear">Next</button>
        </div>
        <div class="grid-cal month">
            <button @click="prevMonth" :disabled="noPrevMonth">Prev</button>
            {{ month.name }}
            <button @click="nextMonth" :disabled="noNextMonth">Prev</button>
        </div>
        <div class="grid-cal calendar">
            <div class="day title weekend">Sun</div>
            <div class="day title">Mon</div>
            <div class="day title">Tue</div>
            <div class="day title">Wed</div>
            <div class="day title">Thu</div>
            <div class="day title">Fri</div>
            <div class="day title weekend">Sat</div>
            <div class="day" :class="{ weekend: i === 0}" v-for="(i,e) in emptySlots" :key="e"></div>
            <div 
                class="day" 
                :class="{ 
                    weekend: day.getDay() === 0 || day.getDay() === 6, 
                    thisMonth: isThisMonth(day),
                    today: isToday(day),
                    hasLog: findByDay(day)
                }" 
                v-for="day in month.days" :key="day"
            >
                {{ day.getDate() }}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { yearComp, year, month } from '@/global/utils';
import { readStore } from '@/store/ReadStore';
import { defineComponent, reactive, ref, toRefs, computed, watch } from 'vue';

export default defineComponent({
    setup() {
        const { years, getYearId, yearItem } = reactive(yearComp());
        const isThisMonth = (date: Date): Boolean => {
            return monthId.value === date.getMonth();
        }
        const isToday = (day: Date): boolean => {
            return day.toLocaleDateString('en-US') === today.value.toLocaleDateString('en-US');
        }
        const today = ref(new Date());

        const state = reactive({
            yearId: today.value.getFullYear()
        });
        watch(
            () => state.yearId,
            (newVal, oldVal) => {
                state.yearId = +newVal;
            }
        );

        const year = computed<year>(() => yearItem(state.yearId));
        const yearCtrls = reactive({
            noPrevYear: computed(() => state.yearId === Math.min(...years.map((y: year) => y.name))),
            noNextYear: computed(() => state.yearId === Math.max(...years.map((y: year) => y.name))),
            prevYear: () => {
                if (state.yearId > 1700) state.yearId--;
            },
            nextYear: () => {
                console.log('yearId', state.yearId);
                if (state.yearId < 4000) state.yearId++;
            },
            editYear: false
        });

        const monthId = ref<number>(today.value.getMonth());
        const month = computed<month>(() => year.value.months[monthId.value]);
        const monthCtrls = reactive({
            noPrevMonth: computed(() => monthId.value === 0 && state.yearId === Math.min(...years.map((y: year) => y.name))),
            noNextMonth: computed(() => (monthId.value === 11 && state.yearId === Math.max(...years.map((y: year) => y.name)))),
            prevMonth: () => {
                if (monthId.value > 0) monthId.value--;
                else {
                    if (state.yearId > (Math.min(...years.map((y: year) => y.name)) - 1)) {
                        state.yearId--;
                        monthId.value = 11;
                    }
                }
            },
            nextMonth: () => {
                if (monthId.value < 11) monthId.value++;
                else {
                    if (state.yearId < (Math.max(...years.map((y: year) => y.name)) + 1)) {
                        state.yearId++;
                        monthId.value = 0;
                    }
                }
            },
        });

        const emptySlots = computed(() => Array.from(Array(month.value.days[0].getDay()).keys()));

        let findByDay = (day: Date) => {
            return readStore.findByDay(day.toLocaleString());
        }

        return {
            isThisMonth,
            isToday,
            today,
            month,
            emptySlots,
            findByDay,
            ...toRefs(state),
            ...toRefs(monthCtrls),
            ...toRefs(yearCtrls)
        }
    }
})
</script>
<style scoped>
.hidden {
  display: none;
}
.full-calendar {
    width: 95%;
    margin: 5px auto;
    height: 50%;
}
.grid-cal {
  display: grid;
  margin: 2%;
}
.grid-cal.calendar {
  grid-template-columns: repeat(7, minmax(40px, 1fr));
  gap: 5px;
  margin: 4% 2%;
}
.grid-cal.calendar .day {
  border: 0.5px solid grey;
  border-top-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
  border-bottom-color: grey;
  border-radius: 3px;
  padding: 4px;
  position: relative;
}
.grid-cal.calendar .day.hasLog::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 5px;
    width: 5px;
    height: 5px;
    background: var(--color-red);
    border-radius: 50%;
}
.grid-cal.calendar .day.title {
  border: none;
  padding: 2px;
}
.grid-cal.calendar .day.weekend {
  border-bottom-color: var(--color-blue);
  background: var(--color-blue-op-more);
}
.grid-cal.calendar .day:not(.thisMonth):not(.title) {
  color: #ddd;
}
.grid-cal.calendar .day.today {
  color: var(--color-red);
  border-top-color: var(--color-red);
  border-left-color: var(--color-red);
  border-right-color: var(--color-red);
  background-color: var(--color-red-op-more);
}
.grid-cal.month {
  grid-template-columns: .25fr 1fr .25fr;
  gap: 5px;
}
</style>