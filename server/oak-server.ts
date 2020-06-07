import { Application, send, Context } from "https://deno.land/x/oak/mod.ts";
import { SendOptions } from "https://deno.land/x/oak/send.ts";

const port: number = 8000;

const staticFilePath: string = `${Deno.cwd()}/public/static`;
const sendOptions: SendOptions = { root: staticFilePath, index: "index.html" };

const files = async (context: Context<Record<string, any>>): Promise<void> => {
    await send(context, context.request.url.pathname, sendOptions);
};

const app = new Application();
app.use(files);
console.log(`Server running on http://localhost:${port}`);
await app.listen({ port });