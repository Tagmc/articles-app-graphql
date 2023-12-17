import express, { Express, Response, Request } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";

import { typeDefs } from "./typeDefs/index.typeDefs";
import { resolvers } from "./resolvers/index.resolver";
import { requireAuth } from "./middlewares/auth.middleware";

const startServer = async () => {
    dotenv.config();
    database.connect();


    const app: Express = express();
    const port: number | string = process.env.PORT || 3000;

    //REST API
    // app.get("/articles", async (req: Request, res: Response) => {
    //     const articles = await Article.find({
    //         deleted: false
    //     });
    //     res.json({
    //         articles: articles
    //     });
    // });


    //GraphQL
    app.use("/graphql", requireAuth);

    const apolloServer = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers,
        introspection: true,
        context: ({ req }) => {
            return req;
        },
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({
        app: app,
        path: "/graphql"
    });

    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });
};

startServer();
