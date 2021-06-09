import { Request, Response } from 'express';
import {userDao} from '../dao/userDao';
import { CustomLogger } from '../config/Logger'
let user = new userDao();

export class userService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into userService.ts: GpCreate')
     const  userData = req.body;
     user.GpCreate(userData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from userService.ts: GpCreate')
         callback(response);
         });
    }


}