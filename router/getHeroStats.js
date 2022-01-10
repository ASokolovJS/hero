const {Router} = require('express')
const fs = require('fs')
const path = require('path')
const router =  Router()

router.get('/', (req,res) => {
  fs.readFile(path.join("../hero/", "db", 'stats.txt'),((err, data) => {
    if(err) {
      res.status(502)
      res.end("Данных нет")
    }else{
      const stats = JSON.parse(Buffer.from(data).toString())
      res.end(stats)
    }
  }))
})

module.exports = router