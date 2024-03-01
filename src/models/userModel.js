import pool from "../../config/db/PoolDb";
import bcrypt from "bcrypt";

const createUser = async({email, password,role,lenguaje}) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = {
        text: `INSERT INTO users (email, password, role, lenguaje) VALUES ($1, $2, $3, $4) RETURNING *`,
        values: [email, hashedPassword, role, lenguaje]
    };
    const { rows } = await pool.query(query);
    return rows;
}

const byEmail = async({email}) => {
    const query = {
        text: `SELECT * FROM users WHERE email = $1`,
        values: [email]
    };
    const response = await pool.query(query);
    return response.rows[0];
}
export {createUser, byEmail}