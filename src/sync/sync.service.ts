import type { Request } from "express";
import { orderQueue } from "../queue/queue.provider.js";

export async function handleSyncData(req: Request) {
    const payload = req.body;
    await orderQueue.add("syncOrder", payload, {
        attempts: 5,
        backoff: { type: "exponential", delay: 3000 }
      });
    return {
        success: true,
        message: "Sync data received",
        data: payload,
    };
}
