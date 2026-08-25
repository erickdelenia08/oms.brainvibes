import bcrypt from "bcryptjs";
import { LoginInput } from "./auth.schema";
import { prisma } from "@/lib/db"

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
