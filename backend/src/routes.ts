import { Router } from "express";
import multer from 'multer';
import uploadConfig from './config/upload';
import OrphanagesController from "./controllers/OrphanagesController";

const routes = Router();
const upload = multer(uploadConfig);

//PARAMETROS

// Query params: enviados na propria rota. ex: http://localhost:3333/users?search=well&page1

// Route params: enviados na rota ex: http://localhost:3333/users1  (identificar um recurso), como se fosse para
// EDITAR ou DELETAR

// Body: corpo da requisição ex: http://localhost:3333/users  informações complexas e completas

// Utilizando Type ORM  sqlite 3

routes.get('/orphanages', OrphanagesController.index);

routes.get('/orphanages/:id', OrphanagesController.show);

routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;