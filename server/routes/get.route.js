const Router = require('express')
const getController = require('../controllers/getController')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')



router.get('/', authMiddleware, getController.getAll)
router.post('/work', authMiddleware, getController.createWork)




module.exports = router