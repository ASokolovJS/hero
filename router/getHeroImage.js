const {Router} = require('express')
const router =  Router()
const fs = require('fs')
const path  = require('path')

router.get('/', (req,res) => {
  fs.readdir(path.join(('../hero/img')),(err, file) => {
    if(err) throw err
    const lastImg = file[file.length-1]
    res.setHeader("Content-Type", "image/jpeg")
    res.sendFile(lastImg, {root: path.join(('../hero/img'))})
  })
})

module.exports = router