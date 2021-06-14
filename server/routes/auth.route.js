const Router = require('express')
const router = new Router()
const AuthController = require('../controllers/authController')



router.post('/login', AuthController.login)
router.post('/registration', AuthController.registration)



module.exports = router