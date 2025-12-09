import { AppModule } from "./app.module.js";

async function boot() {
    const app = new AppModule();
    app.initialize();
}
boot();