import { createClient, type RedisClientType } from "redis";

export class RedisConfig {
    private static client: RedisClientType | null = null;
    public static async redisConnect() {
        if (!RedisConfig.client) {
            RedisConfig.client = createClient({
                url: process.env.REDIS_URL || "redis://127.0.0.1:6379",
            })
            RedisConfig.client.on("error", (err) => {
                console.error("Redis error:", err);
            });

            await RedisConfig.client.connect();
            console.log("✅ Redis connected");
        }
        return RedisConfig.client;
    }
}