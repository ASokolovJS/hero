const multer = require('multer')


const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "img")
  },
  filename(req, file, callback) {
    callback(null, Date.now().toString() + '.jpeg')
  }

})

const allowedTypes = ['image/jpg', 'image/jpeg', 'image/png']

const fileFilter = (req, file, callback) => {
  if (allowedTypes.includes(file.mimetype)) {
    callback(null, true)
  } else {
    callback(null, false)
  }
}

module.exports = multer({
  fileFilter,
  storage,
})