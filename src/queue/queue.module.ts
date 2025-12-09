import { processor } from "./queue.processor.js";

export class QueueModule {
    constructor(){
        processor.createWorker();
    }
}