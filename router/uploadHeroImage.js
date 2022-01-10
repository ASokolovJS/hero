const {Router} = require('express')
const { postUploadHeroImage } = require('../controllers/heroImage-controller')
const router =  Router()


router.post('/', postUploadHeroImage)


module.exports = router
