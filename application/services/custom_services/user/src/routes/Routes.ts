import { Request, Response, NextFunction } from "express";
import { userController } from '../controller/userController';


export class Routes {
    private user: userController = new userController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/user').post(this.user.GpCreate);
     }

}