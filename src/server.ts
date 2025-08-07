import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
