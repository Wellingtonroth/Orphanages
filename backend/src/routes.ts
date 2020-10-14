import { Router } from "express";
import OrphanagesController from "./controllers/OrphanagesController";

const routes = Router();

//PARAMETROS

// Query params: enviados na propria rota. ex: http://localhost:3333/users?search=well&page1

// Route params: enviados na rota ex: http://localhost:3333/users1  (identificar um recurso), como se fosse para
// EDITAR ou DELETAR

// Body: corpo da requisição ex: http://localhost:3333/users  informações complexas e completas

// Utilizando Type ORM  sqlite 3

routes.get('/orphanages', OrphanagesController.index);

routes.get('/orphanages/:id', OrphanagesController.show);

routes.post('/orphanages', OrphanagesController.create);

export default routes;