import { type Request, type Response, type NextFunction } from "express";
import { handleSyncData } from "./sync.service.js";

export async function syncData(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await handleSyncData(req);
        return res.json(result);
    } catch (err) {
        next(err);
    }
}
