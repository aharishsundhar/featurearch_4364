import * as mongoose from 'mongoose';
import userModel from '../models/user';
import { CustomLogger } from '../config/Logger'


export class userDao {
    private user = userModel;
    constructor() { }
public GpCreate(userData, callback){
new CustomLogger().showLogger('info', 'Enter into userDao.ts: GpCreate')
let temp = new userModel(userData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from userDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}