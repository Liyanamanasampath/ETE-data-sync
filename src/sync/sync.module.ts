
import { Router, type Application } from "express";
import { syncData } from "./sync.controller";

export class SyncModule {
    constructor(router:any){
        router.post('/sync-data',syncData)
        // router.post('/dashboard',syncData)
    }
}