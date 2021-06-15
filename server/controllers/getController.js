const Work = require('../models/workModel')
const Shopping = require('../models/shoppingModel')
const User = require('../models/userModel')


class Get {
    async getAll(req,res){
        try{
            const user = await User.findById(req.user.id)
            let workList = [];
            let shoppingList =[]
            if (user.sharedUsers){
                for (let i = 0; i<user.sharedUsers; i++){
                    const k = await Work.find({user: user.sharedUsers[i]})
                    const j = await Shopping.find({user: user.sharedUsers[i]})
                    workList = workList.concat(k)
                    shoppingList = shoppingList.concat(j)
                }
            }
        const workLists = await Work.find({user: req.user.id})
        workList = workList.concat(workLists)
        const shoppingLists = await Shopping.find({user: req.user.id})
        shoppingList.concat(shoppingLists)
            // NEED SORT
        res.json({workList, shoppingList})
    }
        catch(e){
            console.log(e)
            res.status(500).json({message:"Ошибка запроса"})
        }
    }
    async createWork(req,res){
        try {
            const {name, description, urgently} = req.body
            if (name.length === 0){
                return res.status(400).json({message:"Введите название работы"})
            }
            const work = new Work({
                name,
                description,
                urgently,
                user: req.user.id
            })
            work.save()
            return res.status(200).json(work)
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"Ошибка создания"})
        }
    }
    async createShopping(req,res){
        try {
            const {name, urgently} = req.body
            if (name.length === 0){
                return res.status(400).json({message:"Введите название покупки"})
            }
            const shopping = new Shopping({
                name, 
                urgently,
                user: req.user.id
            })
            shopping.save()
            return res.status(200).json(shopping)
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"Ошибка создания"})
        }
    }
    async deleteWork(req,res){
        try {
            if (!req.body.id){
                return res.status(400).json({message:"Не найдена работа"})

            }
            const work = await Work.findOne({_id:req.body.id})
            if (!work){
                return res.status(404).json({message:"Не найдено дело"})
            }
            work.remove();
            return res.status(200).json({message:"Удаление прошло успешно"})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message:"Ошибка удаления"})
        }
    }
    async deleteShopping(req,res){
        try {
            if (!req.body.id){
                return res.status(400).json({message:"Не найдена покупка"})

            }
            const shopping = await Shopping.findOne({_id:req.body.id})
            if (!shopping){
                return res.status(404).json({message:"Не найдена покупка"})
            }
            shopping.remove();
            return res.status(200).json({message:"Удаление прошло успешно"})

        } catch (error) {
            console.log(error)
            return res.status(500).json({message:"Ошибка удаления"})
        }
    }
    async changeWork (req,res){
        try{
            const {id,name,description,urgently,done} = req.body
            if (!id){
                return res.status(400).json({message:"Не найдена работа"})
            }
            const work = await Work.findOne({_id:id})
            if (name){
                work.name = name
            }
            if (description){
                work.description = description
            }
            if (urgently){
                work.urgently = urgently
            }
            if (done){
                work.done = done
            }
            work.save()
            return res.status(200).json(work)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({message:"Ошибка редактирования"})
        }
    }
    async changeShopping (req,res){
        try{
            const {id,name,urgently,done} = req.body
            if (!id){
                return res.status(400).json({message:"Не найдена работа"})
            }
            const shopping = await Shopping.findOne({_id: id})
            if (name){
                shopping.name = name
            }
            if (urgently){
                shopping.urgently = urgently
            }
            if (done){
                shopping.done = done
            }
            shopping.save()
            return res.status(200).json(shopping)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({message:"Ошибка редактирования"})
        }
    }
    
}
module.exports = new Get()