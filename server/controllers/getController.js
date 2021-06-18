const Work = require('../models/workModel')
const Shopping = require('../models/shoppingModel')
const User = require('../models/userModel')


class Get {
    async getItems(req, res) {
        try {
            const user = await User.findById(req.user.id)
            if (!user) {
                return res.status(400).json({ message: 'Некорекнтный запрос(Пользователь)' })
            }
            let list = [];
            const type = req.query.type
            if (type === '1') {

                if (user.sharedUsers) {
                    for (let i = 0; i < user.sharedUsers; i++) {
                        const k = await Work.find({ user: user.sharedUsers[i] })
                        list = list.concat(k)
                    }
                }
                const work = await Work.find({ user: req.user.id })
                list = list.concat(work)
            }
            if (type === '2') {

                if (user.sharedUsers) {
                    for (let i = 0; i < user.sharedUsers; i++) {
                        const j = await Shopping.find({ user: user.sharedUsers[i] })
                        list = list.concat(j)
                    }
                }

                const shopping = await Shopping.find({ user: req.user.id })
                list = list.concat(shopping)

            }
            if (!type === '1' && type === '2') {
                return res.status(400).json({ message: "Ошибка запроса", type: type })
            }

            res.status(200).json({ list })
        }
        catch (e) {
            console.log(e)
            res.status(500).json({ message: "Ошибка запроса..." })
        }
    }
    async getOneItem(req, res) {
        try {
            const user = await User.findById(req.user.id)
            if (!user) {
                return res.status(400).json({ message: 'Некорекнтный запрос(Пользователь)' })
            }
            const type = req.query.type
            const id = req.query.id
            let item;
            if (type === '1') {
                item = await Work.findOne({ _id: id })
            }
            if (type === '2') {
                item = await Shopping.findOne({ _id: id })
            }
            if (!type === '2' && type === '1') {
                return res.status(400).json({ message: "Ошибка запроса", type: type })
            }
            return res.status(200).json(item)

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Ошибка запроса..." })
        }
    }



    async createItem(req, res) {
        try {
            const { name, description, urgently } = req.body
            const type = String(req.body.type)
            if (name.length === 0) {
                return res.status(400).json({ message: "Введите название работы" })
            }
            let item;
            const i = {
                name,
                description,
                urgently,
                user: req.user.id
            }
            if (type === '1') {
                item = new Work(i)
            }
            if (type === '2') {
                item = new Shopping(i)
            }
            if (!type === '1' && type === '2') {
                res.status(500).json({ message: "Не верный тип" })
            }
            console.log(item)
            item.save()
            return res.status(200).json(item)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Ошибка создания" })
        }
    }
    async deleteItem(req, res) {
        try {
            const type = String(req.body.type)
            let item;

            if (!req.body.id) {
                return res.status(400).json({ message: "Не найдено" })

            }
            if (type === "1") {
                item = await Work.findOne({ _id: req.body.id })
            }
            if (type === '2'){
                item = await Shopping.findOne({ _id: req.body.id })
            }
            if (!type === '1' && type === '2') {
                res.status(500).json({ message: "Не верный тип" })
            }
            if (!item) {
                return res.status(404).json({ message: "Не найдено" })
            }

            item.remove();
            return res.status(200).json({ message: "Удаление прошло успешно" })


        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Ошибка удаления" })
        }
    }
    async changeItem(req, res) {
        try {
            const { id, name, description, urgently, done } = req.body
            const type = String(req.body.type)
            let item;
            if (!id) {
                return res.status(400).json({ message: "Не найдена работа" })
            }
            if (!req.body.id) {
                return res.status(400).json({ message: "Не найдено" })

            }
            if (type === "1") {
                item = await Work.findOne({ _id: req.body.id })
            }
            if (type === '2'){
                item = await Shopping.findOne({ _id: req.body.id })
            }
            if (!type === '1' && type === '2') {
                res.status(500).json({ message: "Не верный тип" })
            }
            if (!item) {
                return res.status(404).json({ message: "Не найдено" })
            }

            if (name) {
                item.name = name
            }
            if (description) {
                item.description = description
            }
            if (urgently) {
                item.urgently = urgently
            }
            if (done) {
                item.done = done
            }
            item.save()
            return res.status(200).json(item)
        }
        catch (e) {
            console.log(e)
            return res.status(500).json({ message: "Ошибка редактирования" })
        }
    }

}
module.exports = new Get()