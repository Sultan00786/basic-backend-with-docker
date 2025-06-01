import express from "express";
import { PrismaClient } from "./generated/prisma";
const app = express();

const prisma = new PrismaClient();

app.get("/", async (_req, res) => {
  const users = await prisma.user.findMany();

  res.status(201).json({
    messae: "Data fetched successfully",
    data: users,
  });
});

app.post("/", async (_req, res) => {
  const user = await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  res.status(201).json({
    messae: "User created successfully",
    data: user,
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
