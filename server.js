import express from "express";
import dotenv from "dotenv";
import bibliotecaRoute from '../prova/src/routes/bibliotecaRoutes.js'

const app = express();

app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send("servidor aberto...");
});

app.use('/livros', bibliotecaRoute);

app.listen(serverPort, () => {
  console.log(` Servidor Biblioteca foi iniciado em: http://localhost:${serverPort}`);
});