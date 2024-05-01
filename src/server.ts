import fastify from "fastify";
import { linkRoutes } from "./routes/link";

const app = fastify()

app.register(linkRoutes, {})

app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP Server Running!")
})