// "use client";

// import { useState } from "react";
// import { loginUser } from "./actions";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// export default function LoginPage() {
//   const [error, setError] = useState<string | null>(null);
//   const [isPending, setIsPending] = useState(false);

//   async function onSubmit(formData: FormData) {
//     setIsPending(true);
//     setError(null);

//     const result = await loginUser(formData);

//     if (result?.error) {
//       setError(result.error);
//       setIsPending(false);
//     } else {
//       // successful login redirects or reloads
//       window.location.href = "/";
//     }
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-[#f9f9ff]">
//       <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
//         <div className="mb-8 text-center">
//           <h1 className="text-3xl font-bold text-[#111c2d] font-[Plus_Jakarta_Sans]">
//             BrainVibes OMS
//           </h1>
//           <p className="mt-2 text-sm text-[#47464f]">
//             Sign in to access your dashboard
//           </p>
//         </div>

//         {error && (
//           <div className="mb-4 rounded-lg bg-[#ffdad6] p-4 text-sm text-[#93000a]">
//             {error}
//           </div>
//         )}

//         <form action={onSubmit} className="space-y-6">
//           <div className="space-y-2">
//             <Label htmlFor="email" className="text-[#111c2d]">
//               Email Address
//             </Label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               required
//               placeholder="name@example.com"
//               className="focus-visible:ring-[#070235]"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="password" className="text-[#111c2d]">
//               Password
//             </Label>
//             <Input
//               id="password"
//               name="password"
//               type="password"
//               required
//               className="focus-visible:ring-[#070235]"
//             />
//           </div>

//           <Button 
//             type="submit" 
//             className="w-full bg-[#070235] hover:bg-[#1e1b4b] text-white rounded-lg h-11"
//             disabled={isPending}
//           >
//             {isPending ? "Signing in..." : "Sign in"}
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { loginUser } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

// Daftar akun dummy untuk quick login
const DUMMY_ACCOUNTS = [
  { role: "Admin", email: "admin@brainvibes.com", password: "password" },
  { role: "Tutor", email: "tutor@brainvibes.com", password: "password" },
  { role: "Parent", email: "parent@brainvibes.com", password: "password" },
];

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleLogin = async (loginEmail: string, loginPass: string) => {
    setIsPending(true);
    setError(null);

    const formData = new FormData();
    formData.append("email", loginEmail);
    formData.append("password", loginPass);

    const result = await loginUser(formData);

    if (result?.error) {
      setError(result.error);
      setIsPending(false);
    } else {
      router.replace("/")
    }
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await handleLogin(email, password);
  }

  const handleQuickLogin = (accEmail: string, accPass: string) => {
    setEmail(accEmail);
    setPassword(accPass);
    handleLogin(accEmail, accPass);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f9f9ff]">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#111c2d] font-[Plus_Jakarta_Sans]">
            BrainVibes OMS
          </h1>
          <p className="mt-2 text-sm text-[#47464f]">
            Sign in to access your dashboard
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-[#ffdad6] p-4 text-sm text-[#93000a]">
            {error}
          </div>
        )}

        {/* Quick Login Section (Dev/Temporary) */}
        <div className="mb-6 rounded-xl bg-slate-50 p-4 border border-slate-100">
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500 text-center">
            Quick Demo Login
          </p>
          <div className="grid grid-cols-3 gap-2">
            {DUMMY_ACCOUNTS.map((acc) => (
              <Button
                key={acc.role}
                type="button"
                variant="outline"
                disabled={isPending}
                onClick={() => handleQuickLogin(acc.email, acc.password)}
                className="h-9 text-xs font-medium hover:bg-white hover:border-slate-300"
              >
                {acc.role}
              </Button>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#111c2d]">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="focus-visible:ring-[#070235]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#111c2d]">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus-visible:ring-[#070235]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#070235] hover:bg-[#1e1b4b] text-white rounded-lg h-11"
            disabled={isPending}
          >
            {isPending ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
}