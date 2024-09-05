import pg from 'pg';
import 'dotenv/config.js';
const { Pool } = pg;
export const pool = new Pool({
    user: process.env['DB_USER'] || 'postgres',
    password: process.env['DB_PASSWORD'],
    port: +process.env['DB_PORT'],
    database: process.env['DB_NAME'],
    host: process.env['DB_HOST'],
    max: +(process.env['DB_POOL_MAX_CONNECTIONS'] ?? 10)
});
export async function ping() {
    const connection = await pool.connect();
    connection.release();
}
//# sourceMappingURL=database.config.js.map