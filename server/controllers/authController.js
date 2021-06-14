const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const config = require('../config/config')
const jwt = require('jsonwebtoken')



class AuthController {
     async registration(req,res){
        
        try {
            const {login, password} = req.body
            const candidate = await User.findOne({login})
            if (candidate) {
                return res.status(400).json({message:"Пользователь с данным логином уже существует"})
            }
            const hashedPass = await bcrypt.hash(password, 3)
            const user = new User({login, password:hashedPass})
            await user.save()
            return res.status(200).json({message:'Пользователь создан'})

        } catch (error) {
            console.log(error)
        }

    }
    async login(req,res){
        try {
            const {login, password} = req.body
            const user = await User.findOne({login})
            if (!user){
                return res.status(404).json({message:"Данного пользователя не существует"})
            }
            const isValidPass = bcrypt.compareSync(password, user.password)
            if (!isValidPass){
                return res.status(400).json({message:"Неверный пароль"})
            }
            const token = jwt.sign({id: user._id}, config.secretKey, {expiresIn: '1h'})
            res.status(200).json({
                token, 
                user:{
                    id: user._id,
                    name: user.name,
                    avatar: user.avatar,
                    shared: user.sharedUser
                }
            })

        } catch (error) {
            console.log(error)
        }

    }
    
}


module.exports = new AuthController()