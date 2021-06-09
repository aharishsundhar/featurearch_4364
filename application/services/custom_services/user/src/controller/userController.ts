import { Request, Response } from 'express';
import { userService } from '../service/userService';
import { CustomLogger } from '../config/Logger'
let user = new userService();

export class userController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
user.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into userController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from userController.ts: GpCreate');
    })}


}