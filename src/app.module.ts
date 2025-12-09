import cors from 'cors';
import express, { Router } from 'express';
import http from 'http';
import { RedisConfig } from './config/redis.config';
import { SyncModule } from './sync/sync.module';
import { ExpressAdapter } from "@bull-board/express";
import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { orderQueue } from './queue/queue.provider';
import { QueueModule } from './queue/queue.module';

export class AppModule {
    app = express();
    server = http.createServer(this.app);
    router = Router();

    constructor() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use('', this.router)
    }


    public async initialize() {
        const serverAdapter = new ExpressAdapter();
        serverAdapter.setBasePath("/admin/queues");
        createBullBoard({
            queues: [new BullMQAdapter(orderQueue)],
            serverAdapter,
        });
        this.app.use("/admin/queues", serverAdapter.getRouter());

        await RedisConfig.redisConnect();
        new SyncModule(this.router);
        new QueueModule();

        const PORT = process.env.PORT || 4000;
        this.server.listen(PORT, () =>
            console.log("🚀 Server running on PORT " + PORT)
        );
    }
}
