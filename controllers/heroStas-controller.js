const fs = require('fs')
const path = require('path')

const getHeroStats = (req,res) => {
  fs.readFile(path.join("../hero/", "db", 'stats.txt'),((err, data) => {
    if(err) {
      res.status(502)
      res.end("Данных нет")
    }else{
      const stats = JSON.parse(Buffer.from(data).toString())
      res.json(stats)
    }
  }))
}

const postHeroStats = (req,res) => {
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
}

module.exports = {getHeroStats, postHeroStats}