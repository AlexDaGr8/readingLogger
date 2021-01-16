import { Store } from '@/store/Store';

export interface logItem {
    uuid?: string | null;
    book: string;
    date: Date;
    time?: string | null;
    notes?: string | null;
    minutes?: number | null;
    pageFrom?: number | null;
    pageTo?: number | null;
    dateStr?: string | null;
}

export interface ReadState extends Object {
    readingLog: logItem[];
    editItem: logItem | undefined;
}

const STORAGE_NAME = 'readingLog';

class ReadStore extends Store<ReadState> {
    private _data: ReadState | null = null;

     constructor() {
        super();
    }
    protected setLocalStorage(val: ReadState) {
        localStorage.setItem(STORAGE_NAME, JSON.stringify(val))
    }
    protected uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }

    protected data(): ReadState {
        if (!localStorage[STORAGE_NAME]) {
            let readState: ReadState = {
                readingLog: [] as logItem[],
                editItem: undefined
            };
            this.setLocalStorage(readState);
        }
        this._data = JSON.parse(localStorage[STORAGE_NAME] as string);
        (this._data as ReadState).readingLog.forEach(d => d.date = new Date(d.date));
        return this._data as ReadState;
    }

    add(payload: logItem) {
        payload.uuid = this.uuidv4();
        this.state.readingLog.push(payload);
        this.state.editItem = undefined;
        this.setLocalStorage(this.state);
    }
    async deleteItem(item: logItem) {
        return new Promise((res, rej) => {
            let foundId = this.state.readingLog.findIndex((d: logItem) => d.uuid === item.uuid);
            if (foundId < 0) { rej(`Item not found ${item}`)}
            this.state.readingLog.splice(foundId, 1);
            this.setLocalStorage(this.state);
            res('done');
        })
    } 
    setEditItem(item: logItem) {
        this.state.editItem = item;
    }
    async updateItem(item: logItem) {
        return new Promise((res, rej) => {
            let foundId = this.state.readingLog.findIndex((d: logItem) => d.uuid === item.uuid);
            if (foundId < 0) { rej(`Item not found ${item}`)}
            this.state.readingLog.splice(foundId, 1, item);
            this.state.editItem = undefined;
            this.setLocalStorage(this.state);
            res('updated');
        })
    }

    findByDay(dateStr: string) {
        let hasLog =this.state.readingLog.filter((d: logItem) => d.date.toLocaleString() === dateStr) 
        return hasLog.length > 0;
    }
    get editItem(): logItem {
        return this.state.editItem as logItem;
    }
    get readList() {
        return this.state.readingLog.sort((a: logItem, b: logItem) => b.date.getTime() - a.date.getTime());
    }
    get streaks() {
        let sorted = this.readList.map(d => d.date.toLocaleString());
        let sortedUnique = sorted.filter((value, index: number, self) => {
            return self.indexOf(value) === index;
        }).map(d => new Date(d));

        let streaks = [[sortedUnique[0]]];
        let streakId = 0;
        let currentDayCount = 1;
        let firstDayId = 0;
        for (let i = 1; i < sortedUnique.length; i++) {
            let el = sortedUnique[i];
            let firstUtc = new Date(sortedUnique[firstDayId]).setUTCHours(0,0,0,0);
            let currentUtc = new Date(el).setUTCHours(0,0,0,0);
            let dayMultiple = currentDayCount++ * 86400000;
            if ((firstUtc - currentUtc) === dayMultiple) {
                streaks[streakId].push(el);
            } else if (i < sortedUnique.length - 1) {
                streakId++;
                streaks[streakId] = [el];
                currentDayCount = 1;
                firstDayId = i;
            }
        }

        let lengths = streaks.map(d => d.length);
        let longestStreakId = lengths.indexOf(Math.max(...lengths))
        let longestStreak = streaks[longestStreakId];
        return {
            streaks,
            currentStreak: streaks[0],
            longestStreak
        };
    }
}

export const readStore: ReadStore = new ReadStore();