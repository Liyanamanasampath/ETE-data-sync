import { Queue } from "bullmq";
import { bullmqConfig } from "../config/bullmq.config.js";

export const orderQueue = new Queue('orderQueue',bullmqConfig)