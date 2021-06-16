const Router = require('express')
const router = new Router()
const AuthController = require('../controllers/authController')
const authMiddleware = require('../middleware/auth.middleware')


router.post('/login', AuthController.login)
router.post('/registration', AuthController.registration)
router.get('/', authMiddleware, AuthController.auth)



module.exports = router