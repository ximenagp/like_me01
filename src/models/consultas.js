import pool from "../../db/conectionDb.js"

const verPosts = async () => {
    const SQLquery = { text: "SELECT * FROM post" }
    try {
        const response = await pool.query(SQLquery)
        return response.rows;
    } catch (error) {
        console.log(error);
    }
}
const agregarPost = async ({ titulo, img, descripcion }) => {
    const SQLquery = {
        text: "INSERT INTO post (titulo, img, descripcion, likes) VALUES ($1,$2,$3,$4) RETURNING *",
        values: [titulo, img, descripcion, 0],
    }
    try {
        const response = await pool.query(SQLquery)
        return response.rows
    } catch (error) {
        console.log(error)
    }
}
export { verPosts, agregarPost }