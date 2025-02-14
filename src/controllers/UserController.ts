import { Request, Response } from "express";
import { prisma } from "../database";

async function createUser(req: Request, res: Response) {
  try {
    const { name, email } = req.body;
    const userExist = await prisma.user.findUnique({
      where: { email },
    });

    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await prisma.user.create({
      data: { name, email },
    });

    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return res.status(500).json({ message: errorMessage });
  }
}

export { createUser };
