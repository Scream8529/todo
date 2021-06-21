const Router = require('express')
const getController = require('../controllers/getController')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')



router.get('/', authMiddleware, getController.getItems)
router.get('/item', authMiddleware, getController.getOneItem)
router.post('/', authMiddleware, getController.createItem)
router.delete('/', authMiddleware, getController.deleteItem)
router.post('/item', authMiddleware, getController.changeItem)




module.exports = router