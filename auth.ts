import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { loginSchema } from "@/lib/services/auth.schema";
import { AuthService } from "@/lib/services/auth.service";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          console.log("[AUTH] Starting login");

          const { email, password } =
            await loginSchema.parseAsync(credentials);

          console.log("[AUTH] Schema valid:", email);

          const user = await AuthService.verifyCredentials({
            email,
            password,
          });

          console.log("[AUTH] Verify result:", {
            found: !!user,
            userId: user?.id,
          });

          if (!user) {
            console.log("[AUTH] Invalid email or password");
            return null;
          }

          console.log("[AUTH] Login successful:", user.email);

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        } catch (error) {
          console.error("[AUTH] ERROR:", error);

          return null;
        }
      },
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role as string;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
