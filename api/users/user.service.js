const pool = require("../../config/database");

module.exports = {
   
    getUserByEmail: (Email, callBack) => {
        console.log(Email);
        pool.query(
          `select * from users where Email = ?`,
          [Email],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
     

  
    create: (data, callBack) => {
    pool.query(
      `insert into users(FullName, Email, Password, ConfirmPassword) 
                values(?,?,?,?)`,
      [
        data.FullName,
        data.Email,
        data.Password,
        data.ConfirmPassword,
       
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (Email, callBack) => {
    pool.query(
      `select * from users where Email = ?`,
      [Email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,FullName,Email,Password,ConfirmPassword from users where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select id,FullName,Email,Password,ConfirmPassword from users`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update users set FullName=?, Email=?, Password=?, ConfirmPassword=? where id = ?`,
      [
        data.FullName,
        data.Email,
        data.Password,
        data.ConfirmPassword,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from users where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  
  
};

