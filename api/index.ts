import { Request, Response } from 'express';
const express = require('express');

const app = express();

app.get("/", (req: Request, res:Response) => res.send("Express on Vercel"));

app.listen(3001, () => console.log("Server ready on port 3000."));

module.exports = app;
