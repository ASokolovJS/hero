const {Router} = require('express')
const router =  Router()
const multer = require('multer')
const uploadImage = multer({dest: "img/", limits: {fileSize: 1048576}}).single('image')
const uploadImages = require('../middleware/uploadImage')

router.post('/',  uploadImages.single('image'),(req,res) => {
  console.log("sadsa");
  uploadImage(req, res, err => {
   if(err instanceof multer.MulterError){
    const error = {
     message: err.message,
     info: err.code
    }
    res.json(error)
   }else{
    if(err) throw err
   }

   const resultUpload = {
    message: "Image upload success",
    name: req.file.filename,
   }
   res.json(resultUpload)

  })
})

module.exports = router
