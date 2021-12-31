const {Router} = require('express')
const {Validator} = require('express-json-validator-middleware')
const {validate} = new Validator()
const statHero = require("../validators/heroStats")
const router =  Router()

router.post('/', validate({body: statHero}), (req,res) => {

  const success = {
    status: 200,
    message: "Stats is setup",
    date: req.body
  }
  res.send(success)
})




module.exports = router