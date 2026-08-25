
import { Role } from "@/prisma/generated/client";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db"


async function main() {
  console.log("Seeding initial admin user...");

  const existingAdmin = await prisma.user.findUnique({
    where: { email: 'tutor@brainvibes.com' }
  })

  if (existingAdmin) {
    console.log('Admin user already exists.')
    return
  }

  const hashedPassword = await bcrypt.hash('password', 10)

  await prisma.user.create({
    data: {
      email: 'tutor@brainvibes.com',
      passwordHash: hashedPassword,
      name: 'nama tutor',
      role: Role.TUTOR,
      isActive: true,
    }
  })

  console.log('Admin user created (admin@brainvibes.com / password)')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
