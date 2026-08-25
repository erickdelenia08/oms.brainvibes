export async function GET() {
    return Response.json({
        // Aman ditampilkan
        DB_HOST: process.env.DB_HOST,
        DB_PORT: process.env.DB_PORT,
        DB_USER: process.env.DB_USER,
        DB_NAME: process.env.DB_NAME,

        // Jangan tampilkan secret utuh
        DB_PASSWORD: process.env.DB_PASSWORD,

        DATABASE_URL: process.env.DATABASE_URL,

        AUTH_SECRET: process.env.AUTH_SECRET,
        // Environment Vercel
    });
}