const fs = require('fs')
const path  = require('path')
const multer = require('multer')
const uploadImages = require('../middleware/uploadImage')
const upload = uploadImages.single('image')

///////////////////////////////////////////////////////////


const getHeroImageController = (req,res) => {
  fs.readdir(path.join(('../hero/img')),(err, file) => {
    if(err) throw err
    const lastImg = file[file.length-1]
    res.setHeader("Content-Type", "image/jpeg")
    res.sendFile(lastImg, {root: path.join(('../hero/img'))})
  })
}

const postUploadHeroImage = (req,res) => {
  upload(req, res, (err) => {
    if(err instanceof multer.MulterError){
      const errorUpload = {
        message: "Image upload error",
        body: err.code
       }
       
       res.json(errorUpload)
    }else if(req.file){
      const resultUpload = {
        message: "Image upload success",
        name: req.file.filename,
       }
       
       res.json(resultUpload)
    }else{
       res.json({message: "Image upload error. Check your file"})
    }
  })
}

module.exports = {getHeroImageController, postUploadHeroImage}