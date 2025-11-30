import { Router } from "express";
import * as bibliotecaController from '../controllers/bibliotecaController.js'

const router = Router();

router.get("/", bibliotecaController.listarTodos);
router.get("/:id", bibliotecaController.listarUm);
router.get("/:categoria", bibliotecaController.categoria)
router.get("/:autor", bibliotecaController.autor)
router.get("/:anoPublicacao", bibliotecaController.anoPublicacao)
router.post("/", bibliotecaController.criar);
router.delete("/:id", bibliotecaController.deletar);
router.put("/:id", bibliotecaController.atualizar);

export default router;