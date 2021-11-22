import express, {Request, Response} from "express";

const userRouter = express.Router();

userRouter
    .route('/')
    .get((req: Request, res:Response) => {
        return res.status(200).json({message: 'Root of /user'})
    })

userRouter
    .route('/login')

userRouter
    .route('/logout')

userRouter
    .route('/register')




export default userRouter