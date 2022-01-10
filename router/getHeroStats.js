const {Router} = require('express')
const router =  Router()
const { getHeroStats } = require('../controllers/heroStas-controller')


router.get('/', getHeroStats)

module.exports = router