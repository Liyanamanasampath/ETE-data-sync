import { Queue } from "bullmq";
import { bullmqConfig } from "../config/bullmq.config";

export const orderQueue = new Queue('orderQueue',bullmqConfig)