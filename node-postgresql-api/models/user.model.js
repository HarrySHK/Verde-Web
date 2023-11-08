// models/book.model.js
const postgre = require('../database');

class User_Module {
  
  async get_User_Register() {
    const { rows } = await postgre.query('SELECT * FROM user_register');
    return rows;
  }
  

  async insert_into_User_Register(user_reg_first,user_reg_last,user_reg_email,user_reg_password,user_reg_phone,user_reg_gender,user_reg_code) {
    const sql = 'INSERT INTO user_register (user_reg_first, user_reg_last,user_reg_email,user_reg_password ,user_reg_phone,user_reg_gender,user_reg_code) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING  *';
    const { rows } = await postgre.query(sql, [user_reg_first,user_reg_last,user_reg_email,user_reg_password,user_reg_phone,user_reg_gender,user_reg_code]);
    return rows[0];
  }

 
}

module.exports = new User_Module();
