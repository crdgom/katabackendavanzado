import User from '../models/User';


export const loginCookie = async (req, res) => {
    const {userMail, userPassword} = req.body;
    try{
        const userFound = await User.findOne({userMail: userMail});
        if(!userFound) return res.status(400).json({message: 'User not found'});
        const matchPassword = await User.comparePassword(userPassword, userFound.userPassword);
        if(!matchPassword) return res.status(401).json({token: null, message: 'Invalid password'});

        // crear una sesión y una cookie

        req.session.loggedIn = true;
        res.cookie('user', userFound._id)

        res.render('index');

    }catch(e){
        res.status(404).json({message: e.message});
    }
};

export const logoutCookie = async (req, res) => {

    // destruir la sesión y la cookie
    req.session.destroy();

    res.clearCookie('user');
    res.redirect('/');
}