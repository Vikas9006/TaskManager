import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API is running" });
});

const PORT: number = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});