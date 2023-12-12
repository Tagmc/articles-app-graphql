import express, { Express, Response, Request} from "express";



const app: Express = express();
const port: number | string = process.env.PORT || 3000;

//REST API
app.get("/articles", (req: Request, res: Response) => {
    res.json({
        articles: []
    });
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});