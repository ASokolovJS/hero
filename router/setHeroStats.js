const {Router} = require('express')
const fs = require('fs')
const path = require('path')
const {Validator} = require('express-json-validator-middleware')
const {validate} = new Validator()
const statHero = require("../validators/heroStats")
const router =  Router()

router.post('/', validate({body: statHero}), (req,res) => {
  const data = JSON.stringify(req.body)
  fs.access((path.join('../hero/', "db")), (err) => {
    if(err){
      fs.mkdir(path.join('../hero/', "db"), err => {
          if(err) throw err
        })
    }else{
      fs.writeFile(path.join("../hero/", "db", 'stats.txt'), data, err => {
        if(err) throw err
      })
    }
  })
  
  const success = {
    status: 200,
    message: "The parameters have been set",
    date: req.body
  }
  res.json(success)
})




module.exports = router