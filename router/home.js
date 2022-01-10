const {Router} = require('express')
const router =  Router()
const path = require ('path')
const fs = require('fs')


router.get('/', (req,res) => {
  fs.readFile(path.join('../hero', 'index.html'),
    'utf-8',
    (err, data) => {
      if (err) throw err
      res.send(data)
    })
})

module.exports = router