const {Router} = require('express')
const {Validator} = require('express-json-validator-middleware')
const { postHeroStats } = require('../controllers/heroStas-controller')
const {validate} = new Validator()
const statHero = require("../validators/heroStats")
const router =  Router()

router.post('/', validate({body: statHero}), postHeroStats)




module.exports = router