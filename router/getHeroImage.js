const {Router} = require('express')
const { getHeroImageController } = require('../controllers/heroImage-controller')
const router =  Router()


router.get('/', getHeroImageController)

module.exports = router