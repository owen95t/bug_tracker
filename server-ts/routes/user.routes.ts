import express, {Request, Response} from "express";
import * as UserController from "../controllers/user.controller"
const userRouter = express.Router();

userRouter
    .route('/')
    .get((req: Request, res: Response) => {
        return res.status(200).json({message: 'Root of /user'})
    })

userRouter
    .route('/login')
    .post(UserController.login)

userRouter
    .route('/logout')
    .get(UserController.logout)

userRouter
    .route('/register')
    .post(UserController.register)



export default userRouter