import { processor } from "./queue.processor";

export class QueueModule {
    constructor(){
        processor.createWorker();
    }
}