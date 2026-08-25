import { PrismaClient } from "@/prisma/generated/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

// Menyiapkan variabel global agar koneksi tidak terbuat berulang kali saat Fast Refresh/Hot Reload
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

// Inisialisasi adapter dengan konfigurasi database kamu
const adapter = new PrismaMariaDb({
    host: process.env.DB_HOST || "oms-brainvibes-oms-brainvibes.b.aivencloud.com",
    port: Number(process.env.DB_PORT) || 20898,
    connectionLimit: 5,
    user: process.env.DB_USER || "avnadmin",
    password: process.env.DB_PASSWORD, // Disarankan diambil dari .env
    database: process.env.DB_NAME || "defaultdb",
    ssl: { rejectUnauthorized: false } // Wajib untuk MySQL Aiven
});

// Gunakan instansi yang sudah ada jika tersedia, atau buat baru
export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}