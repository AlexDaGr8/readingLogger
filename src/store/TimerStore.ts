import { Store } from '@/store/Store';

export interface TimeObj extends Object {
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    toString: () => string;
    getTotalMinutes: () => number;
}

export interface TimerState extends Object  {
    showModal: boolean;
    time: number;
    interval: number;
    timer: any | undefined;
    timeStr: TimeObj;
    paused: boolean;
}

class TimerStore extends Store<TimerState> {

     constructor() {
        super();
        console.log('this', this.state.showModal)
    }

    protected data(): TimerState {
        const data: TimerState = {
            showModal: false,
            time: 0,
            interval: 10,
            timer: undefined,
            timeStr: {
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0,
                toString: function(): string {
                    return `${this.hour.toString().padStart(2,'0')}:
                        ${this.minute.toString().padStart(2,'0')}:
                        ${this.second.toString().padStart(2,'0')}.
                        ${this.millisecond.toString().padStart(2,'0')}`;
                },
                getTotalMinutes: function(): number {
                  let total: number = (+this.hour * 60) + +this.minute + (+this.second / 60);
                  return +total.toFixed(2);
                }
            },
            paused: false
        }
        return data;
    }


    private convertTime(): void {
        this.state.timeStr.millisecond = Math.floor(((this.state.time / 100) % 1) * 100);
        this.state.timeStr.second = Math.floor((this.state.time % 6000) / 100);
        this.state.timeStr.minute = Math.floor((this.state.time / 6000) % 60);
        this.state.timeStr.hour = Math.floor(this.state.time / (6000 * 60));
    }
    get timeObj(): TimeObj {
        return this.state.timeStr;
    }

    get showModal(): boolean {
        return this.state.showModal;
    }
    set showModal(val: boolean) {
        this.state.showModal = val;
    }

    startTimer() {
        this.state.showModal = true;
        this.restartTimer();
    }
    pauseTimer() {
        this.state.paused = true;
        clearInterval(this.state.timer);
        this.state.timer = null
    }
    restartTimer() {
        this.state.paused = false;
        this.state.timer = setInterval(() => {
            this.state.time += 1;
            this.convertTime();
        }, this.state.interval)
    }
    endTime() {
        this.state.showModal = false;
        this.pauseTimer();
        this.state.time = 0;
    }
}

export const timerStore: TimerStore = new TimerStore();