import { Router } from "express";
import * as bibliotecaController from '../controllers/bibliotecaController.js'

const router = Router();

router.get("/", bibliotecaController.listarTodos);
router.get("/:id", bibliotecaController.listarUm);
router.post("/", bibliotecaController.criar);
router.delete("/:id", bibliotecaController.deletar);
router.put("/:id", bibliotecaController.atualizar);

export default router;