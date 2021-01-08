import { Store } from '@/store/Store';

export interface readData {
    book: string;
    date: Date;
    time?: string | null;
    notes?: string | null;
    minutes?: number | null;
    pageFrom?: number | null;
    pageTo?: number | null;
}

export interface ReadState extends Object {
    readDatas: readData[];
}

class ReadStore extends Store<ReadState> {
    protected data(): ReadState {
        return {
            readDatas: [
                {
                    book: 'Test',
                    date: new Date()
                },
                {
                    book: 'Test',
                    date: new Date('1/1/2021')
                }
            ]
        }
    }

    add(payload: readData) {
        console.log(payload)
        this.state.readDatas.push(payload);
    }

    get readList() {
        return this.state.readDatas.sort((a: readData, b: readData) => a.date.getTime() - b.date.getTime());
    }
}

export const readStore: ReadStore = new ReadStore();