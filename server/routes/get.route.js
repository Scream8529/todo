const Router = require('express')
const getController = require('../controllers/getController')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')



router.get('/', authMiddleware, getController.getItems)
router.get('/item', authMiddleware, getController.getOneItem)
router.post('/work', authMiddleware, getController.createWork)
router.post('/shopping', authMiddleware, getController.createShopping)
router.delete('/work', authMiddleware, getController.deleteWork)
router.delete('/shopping', authMiddleware, getController.deleteShopping)
router.put('/work', authMiddleware, getController.changeWork)
router.put('/shopping', authMiddleware, getController.changeShopping)




module.exports = router