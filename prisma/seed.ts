import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient, Role } from "@/prisma/generated/client";
import bcrypt from "bcryptjs";

const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  connectionLimit: 5,
  user: "root",
  password: "",
  database: "brain_vibes_db",
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding initial admin user...");

  const existingAdmin = await prisma.user.findUnique({
    where: { email: 'tentor@brainvibes.com' }
  })

  if (existingAdmin) {
    console.log('Admin user already exists.')
    return
  }

  const hashedPassword = await bcrypt.hash('password', 10)

  await prisma.user.create({
    data: {
      email: 'tentor@brainvibes.com',
      passwordHash: hashedPassword,
      name: 'Parent',
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
