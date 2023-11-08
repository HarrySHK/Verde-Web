const User_Service = require('../services/user.service');

class DoctorController {
   
  async get_User_Register(req, res) {
      try {
        const user_data = await User_Service.get_User_Register();
        res.json({ msg: 'OK', data: user_data });
      } catch (error){
        res.json({ msg: error.message });
      }
    }


    async insert_User_Register(req, res) {
        try {
          const {
            user_reg_first,
            user_reg_last,
            user_reg_email,
            user_reg_password,
            user_reg_phone,
            user_reg_gender,
            user_reg_code
          } = req.body;
      
          const result = await User_Service.insert_into_User_Register(
            user_reg_first,
            user_reg_last,
            user_reg_email,
            user_reg_password,
            user_reg_phone,
            user_reg_gender,
            user_reg_code
          );
      
          if (result) {
            res.status(201).json({ msg: 'User registration data inserted successfully', data: result });
          } else {
            res.status(500).json({ msg: 'Failed to insert user registration data' });
          }
        } catch (error) {
          res.status(500).json({ msg: error.message });
        }
      }









  }
  
  module.exports = new DoctorController();
  