import { AppModule } from "./app.module";


async function boot() {
    const app = new AppModule();
    app.initialize();
}
boot();