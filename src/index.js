const express = require('express');
const productosRouter = require('./routes/productos.routes');
const db = require('./db/index');

const PORT = 8000;
const app = express();
app.use(express.json());

app.get("/productos", (req, res) => {
    res.send([]);
})

app.post("/productos", (req, res) => {
    res.send('Producto agregado');
})


app.listen(PORT, () => {
    db.authenticate().then(() =>
        console.log("Conexión a la base de datos exitosa!")
    );
    console.log(`Listening on port ${PORT}`);
})