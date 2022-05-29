const router = require("express").Router();
const nodemailer = require("nodemailer");
const multer = require("multer");
const { checkToken } = require("../../auth/token_validation");
const pool = require("../../config/database");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser,
} = require("./user.controller");
router.get("/", checkToken, getUsers);
router.post("/", createUser);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

//To store user data
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./public/images/upload_images"); // './public/images/upload_images' directory name where save the file
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({
  storage: storage,
});

router.post("/userData", upload.single("image"), (req, res) => {
  if (!req.file) {
    console.log("No file upload");
  } else {
    console.log(req.file.filename);
    var imgsrc =
      "http://localhost:3000/pubic/images/upload_images" + req.file.filename;
    var insertData =
      "INSERT INTO userdata(FirstName,LastName,Email,Address,PAN_Number,PAN_Image,Aadhar_Number,Aadhar_Image,Form16_Image, Bank_Statement_Image, Investment_Image,Insurance_Image)VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
    pool.query(insertData, [FirstName, imgsrc], (err, result) => {
      if (err) {
        console.log(err);
      } else console.log(result);
    });
  }
});
const sendEmail = async (Email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:"kushwahd007@gmail.com",
        pass:"scmdqxsizowmipsl"
      
      },
    });
    await transporter.sendMail({
      from: "root",
      to: Email,
      subject: subject,
      text: text,
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.log(error, "Email not sent");
  }
};

module.exports = router;
module.exports = sendEmail