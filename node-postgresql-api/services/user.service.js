
const User_Model = require('../models/user.model');

class UserService {
  async get_User_Register() {
    return User_Model.get_User_Register();
  }

   async insert_into_User_Register(user_reg_first,user_reg_last,user_reg_email,user_reg_password,user_reg_phone,user_reg_gender,user_reg_code) {
    return User_Model.insert_into_User_Register(user_reg_first,user_reg_last,user_reg_email,user_reg_password,user_reg_phone,user_reg_gender,user_reg_code);
  }


}

module.exports = new UserService();
