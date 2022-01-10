const express =  require('express')
const path = require("path");
const app = express()
const { ValidationError } = require("express-json-validator-middleware")


///////////////////////////////////////////////////////

app.use('/img', express.static(path.join(__dirname, "img")));
app.use(express.json());


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

///////////////////////////////////////////////////////

app.use((error, request, response, next) => {
  if (error instanceof ValidationError) {
    console.log(error)
    response.status(400).send(error.validationErrors.body);
    next();
  } else {
    next(error);
  }
});


app.listen(3000, () => {
  console.log("Server has been started")
})

