import mariadb from "mariadb";

export async function GET() {
    let connection;

    try {
        const pool = mariadb.createPool({
            host: process.env.DB_HOST!,
            port: Number(process.env.DB_PORT!),
            user: process.env.DB_USER!,
            password: process.env.DB_PASSWORD!,
            database: process.env.DB_NAME!,
            connectionLimit: 1,
        });

        connection = await pool.getConnection();

        const result = await connection.query("SELECT 1");

        await connection.release();
        await pool.end();

        return Response.json({
            success: true,
            result,
        });
    } catch (error) {
        console.error("[MYSQL TEST ERROR]", error);

        return Response.json(
            {
                success: false,
                error: String(error),
            },
            { status: 500 }
        );
    }
}