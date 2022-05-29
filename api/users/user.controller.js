const {
  create,
  getUserByUserEmail,
  getUserByUserId,
  getUsers,
  updateUser,
  deleteUser,
  getUserByEmail,
  
} = require("./user.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: async (req, res) => {
    const body = req.body;
    //   const salt = genSaltSync(10);
    //   body.password = hashSync(body.password, salt);
    //   create(body, (err, results) => {
    //     if (err) {
    //       console.log(err);
    //       return res.status(500).json({
    //         success: 0,
    //         message: "Database connection errror"
    //       });
    //     }
    //     return res.status(200).json({
    //       success: 1,
    //       data: results
    //     });
    //   });
    getUserByEmail(body.Email, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }
      console.log(result)
      if (result) {
        return res.status(500).json({
          success: false,
          message: "Account already exists",
        });
      } else {
        const salt = genSaltSync(10);
        body.Password = hashSync(body.Password, salt);
        body.ConfirmPassword = hashSync(body.ConfirmPassword,salt)
        create(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: false,
              message: err.message,
            });
          }
          //   return res.status(200).json({
          //     success: 1,
          //     data: results
          //   })
          getUserByUserEmail(body.Email, (err, results) => {
            if (err) {
              console.log(err);
              return;
            }
            if (!results) {
              return res.json({
                success: false,
                message: "Record not found",
              });
            }
            results.Password = undefined;
            const jsontoken = sign({ result: results }, "qwe1234", {
              expiresIn: "1h",
            });
            return res.json({
              success: true,
              message: "Signup successful",
              token: jsontoken,
            });
          });
        });
      }
    });
  },

  login: (req, res) => {
    const body = req.body;
    getUserByEmail(body.Email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: false,
          message: "Invalid email or password",
        });
      }
      const result = compareSync(body.Password, results.Password);
      
      if (result) {
        results.Password = undefined;
        const jsontoken = sign({ result: results }, "qwe1234", {
          expiresIn: "1h",
        });
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken,
         
        });
       } else {
        return res.json({
          success: 0,
          data: "Invalid email or password",
        });
      }
    });
  },

  getUserByUserId: (req, res) => {
    const id = req.params.id;
    getUserByUserId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      results.password = undefined;
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateUsers: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found",
        });
      }
      return res.json({
        success: 1,
        message: "user deleted successfully",
      });
    });
  },
  // index : function(req, res){
  //   message = '';
  //  if(req.method == "POST"){
  //     var post  = req.body;
  //     var FirstName= post.FirstName;
  //     var LastName= post.LastName;
  //     var Email= post.Email;
  //     var Phone= post.Phone;
  //     var Address= post.Address
  //     var PAN_Number= post.PAN_Number;
  //     var 
      
      
      
      
  //     if (!req.files)
  //               return res.status(400).send('No files were uploaded.');
  //       var file = req.files.uploaded_image;
  //       var img_name=file.name;
  //        if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                                
  //             file.mv('public/images/uploaded_images/'+file.name, function(err) {
                            
  //                 if (err)
  //                   return res.status(500).send(err);
  //                       var sql = "INSERT INTO `userdata`(`FirstName`,`LastName`,`Email`,`Phone`, `PAN_Number` ,`PAN_Image`) VALUES ('" + FirstName + "','" + LastName + "','" + Email + "','" + Phone + "','" + Address + "','"+ PAN_Number +"','" + PAN_Image + "')";
  //                           var query = pool.query(sql, function(err, result) {
  //                                res.redirect('gstform/'+result.insertId);
  //                           });
  //                      });
  //         } else {
  //           message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
  //           res.render('gstform.jsx',{message: message});
  //         }
  //  }}
}