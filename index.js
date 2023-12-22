const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Hello World!!!")
})

app.post('/webhook', (req, res) => {
    // Maneja la lógica del webhook aquí
    console.log('Webhook recibido:', req.body);
    console.log(req.body)
    res.status(200).send('Webhook recibido con éxito');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});