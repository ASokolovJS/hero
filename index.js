const express =  require('express')
const path = require("path");
const app = express()

///////////////////////////////////////////////////////

app.use(express.static(path.join(__dirname, "public")));
app.use('/img', express.static(path.join(__dirname, "img")));
app.use(express.urlencoded({extended: true}));

///////////////////////////////////////////////////////

const home = require('./router/home')
const getHeroStats = require('./router/getHeroStats')
const setHeroStats = require('./router/setHeroStats')
const uploadHeroImage = require('./router/uploadHeroImage')
const getHeroImage = require('./router/getHeroImage')

///////////////////////////////////////////////////////

app.use('/', home)
app.use('/getHeroStats', getHeroStats)
app.use('/setHeroStats', setHeroStats)
app.use('/uploadHeroImage', uploadHeroImage)
app.use('/getHeroImage', getHeroImage)

app.listen(3000, () => {
  console.log("Server started")
})

