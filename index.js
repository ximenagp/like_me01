import express from 'express'
import cors from 'cors'
import { agregarPost, verPosts } from './database/consultas.js'

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("servidor levantado en el puerto:" + PORT);
});

app.get('/posts', async (req, res) => {
    try {
        const result = await verPosts();
        return res.status(200).json({ ok: true, message: 'Posts registradosPost agrgado', result });
    } catch (error) {
        console.log(error)
    }
});

app.post('/posts', async (req, res) => {
    const post = {
        titulo: req.body.titulo,
        img: req.body.url,
        descripcion: req.body.descripcion
    };
    try {
        const result = await agregarPost(post);
        return res.status(201).json({ ok: true, message: 'Post agregado con exito', result });
    } catch (error) {
        console.log(error)
    }
});
