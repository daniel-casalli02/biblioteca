import { Router } from "express";
import * as bibliotecaController from './../controllers/bibliotecaController.js'
const router = Router();

router.get("/", bibliotecaController.listarTodos);
router.get("/id/:id", bibliotecaController.listarUm);
router.get("/categoria/:categoria", bibliotecaController.categoria);
router.get("/autor/:autor", bibliotecaController.autor);
router.get("/anoPublicacao/:anoPublicacao", bibliotecaController.anoPublicacao);
router.get("/disponivel/:disponivel", bibliotecaController.disponivel);
router.post("/", bibliotecaController.criar);
router.delete("/:id", bibliotecaController.deletar);
router.put("/:id", bibliotecaController.atualizar);

export default router;