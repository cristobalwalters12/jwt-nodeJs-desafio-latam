import "dotenv/config";
import pg from "pg";

const pool = new pg.Pool({
  user: process.env.USER_DB,
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
  allowExitOnIdle: true,
});
export default pool;
