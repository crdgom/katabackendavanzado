import userController from '../controllers/userController';

export const getUsers = async (req, res) => {
    try{
        const users = await userController.find();
        res.status(200).json(users);
    }
    catch(e){
        res.status(404).json({message: e.message});
    }
};

export const getUser = async (req, res) => {
    const { id } = req.params;
    try{
        const user = await userController.findById(id);
        res.status(200).json(user);
    }
    catch(e){
        res.status(404).json({message: e.message});
    }
};

export const createUser = async (req, res) => {
    const {userAlias, userName, userLastName, userAge, userMail, userPassword, userPhone, userAddress, userType, userStatus, userImage} = req.body;
    try{
        const newUser = new userController({userAlias, userName, userLastName, userAge, userMail, userPassword, userPhone, userAddress, userType, userStatus, userImage});
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch(e){
        res.status(404).json({message: e.message});
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const {userAlias, userName, userLastName, userAge, userMail, userPassword, userPhone, userAddress, userType, userStatus, userImage} = req.body;
    try{
        const updatedUser = await userController.findByIdAndUpdate(id, {userAlias, userName, userLastName, userAge, userMail, userPassword, userPhone, userAddress, userType, userStatus, userImage}, {new: true});
        res.status(200).json(updatedUser);
    }
    catch(e){
        res.status(404).json({message: e.message});
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try{
        await userController.findByIdAndDelete(id);
        res.status(200).json({message: 'User deleted successfully'});
    }
    catch(e){}
};