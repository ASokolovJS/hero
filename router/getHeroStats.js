const {Router} = require('express')
const router =  Router()

router.get('/', (req,res) => {
  res.send('You find getHeroStats page')
})

module.exports = router