import express, { Request, Response } from "express";

export const app = express();

app.get("/health", (_: Request, res: Response) => {
  res.status(200).json({ message: "Server is healthy!" });
});
