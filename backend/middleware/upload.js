import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const time = Date.now();
    cb(null, `${time}_${file.originalname}`);
  },
});

const upload = multer({ storage });

export default upload;
