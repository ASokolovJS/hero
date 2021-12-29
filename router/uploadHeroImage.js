const {Router} = require('express')
const router =  Router()

router.get('/', (req,res) => {
  res.send('You find uploadHeroImage page')
})

module.exports = router