import 'dotenv/config'
import pg from 'pg'

const pool =new pg.Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.NAME_DATABASE,
    allowExitOnIdle:true
})

export default pool;
