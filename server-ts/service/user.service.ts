import {UserDTO} from "../dtos/user.dto";
import {UserInterface} from "../interfaces/user.interface";
import User  from '../schema/user.schema'


export const UserLogin = async (UserData: UserDTO): Promise<UserInterface> => {
    let findUser: UserInterface = await User.findOne({email: UserData.email})
    if(!findUser){
        throw new Error('No user found')
    }
    return findUser
}