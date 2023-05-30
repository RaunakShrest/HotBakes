const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/productAvatar');
  },
  filename: function (req, file, cb) {
    const imageName =  file.originalname;
    cb(null, imageName);
  },
});

const upload = multer({ storage: storage }).single('productAvatar');

module.exports = upload;