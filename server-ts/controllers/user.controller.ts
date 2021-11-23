import {Request, Response} from "express-serve-static-core";
import {UserDTO} from "../dtos/user.dto";
import * as UserService from '../service/user.service'
//import {UserInterface} from "../interfaces/user.interface";

export const login = (req: Request, res: Response): Response => {
    console.log(req.body);
    const UserData: UserDTO = req.body;
    try{
        let findUser = UserService.UserLogin(UserData)
        return res.status(200).json({message: 'success', user: findUser})
    }catch (e) {
        return res.status(404).json({message: 'Error finding user! Error: ' + e})
    }
}

export const logout = async (req: Request, res: Response) => {

}
export const register = async (req: Request, res: Response) => {
    const UserData: UserDTO = req.body;

}

