import { Store } from '@/store/Store';

export interface logItem {
    uuid?: string;
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
                readingLog: [] as logItem[]
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
        this.setLocalStorage(this.state);
    }
    async deleteItem(item: logItem) {
        return new Promise((res, rej) => {
            let foundId = this.state.readingLog.findIndex((d: logItem) => d.uuid === item.uuid);
            if (!foundId) { rej(`Item not found ${item}`)}
            this.state.readingLog.splice(foundId, 1);
            res('done');
        })
    } 

    get readList() {
        return this.state.readingLog.sort((a: logItem, b: logItem) => b.date.getTime() - a.date.getTime());
    }
    get streak() {
        let sorted = this.state.readingLog.sort((a: logItem, b: logItem) => a.date.getTime() - b.date.getTime());
        
        return this.state.readingLog;
    }
}

export const readStore: ReadStore = new ReadStore();