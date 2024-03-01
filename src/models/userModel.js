import pool from "../../config/db/PoolDb.js";
import bcrypt from "bcryptjs";

const createUser = async ({ email, password, rol, lenguage }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = {
    text: `INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *`,
    values: [email, hashedPassword, rol, lenguage],
  };
  const { rows } = await pool.query(query);
  return rows;
};

const byEmail = async ({ email }) => {
  const query = {
    text: `SELECT * FROM usuarios WHERE email = $1`,
    values: [email],
  };
  const response = await pool.query(query);
  return response.rows[0];
};

export { createUser, byEmail };
