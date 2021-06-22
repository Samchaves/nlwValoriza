import "reflect-metadata";
import express, { request, response } from "express";
import "./database";
import { router } from "./services/routes";


// @types/expless
const app = express();

app.use(express.json());

app.use(router);

// http: //localhost: 3000
app.listen(3000, () => console.log("Server is running"));

