import { Router } from "express"
import Notification from './controllers/notification.js'
import Pay from './controllers/pay.js'
import Search from './controllers/search.js'



const routes = Router();

routes.get("/", new Search().handle);
routes.post("/pagar", new Pay().handle);
routes.post("/not", new Notification().handle);

export default routes;
