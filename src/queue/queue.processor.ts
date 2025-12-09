import { Job, Worker } from "bullmq"
import { bullmqConfig } from "../config/bullmq.config"
import { processOrderJob } from "../worker/worker.module"

export class processor {
    public static process: any | null = null
    public static createWorker() {
        if (!processor.process) {
            processor.process = new Worker("orderQueue", async (job) => processOrderJob(job), bullmqConfig);
        }
    }
}