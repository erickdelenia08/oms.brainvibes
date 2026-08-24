import bcrypt from "bcryptjs";
import { LoginInput } from "./auth.schema";
import { PrismaClient } from "@/prisma/generated/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  connectionLimit: 5,
  user: "root",
  password: "",
  database: "brain_vibes_db",
});

const prisma = new PrismaClient({ adapter });

export class AuthService {
  static async verifyCredentials(credentials: LoginInput) {
    const user = await prisma.user.findUnique({
      where: { email: credentials.email },
    });

    if (!user) {
      return null;
    }

    if (!user.isActive) {
      throw new Error("Account is inactive.");
    }

    const isValidPassword = await bcrypt.compare(
      credentials.password,
      user.passwordHash
    );

    if (!isValidPassword) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };
  }
}
