const Doctor_Service = require('../services/doctor.service');

class DoctorController {
   
  async get_Doctor_Register(req, res) {
      try {
        const doc_reg_data = await Doctor_Service.get_Doctor_Register();
        res.json({ msg: 'OK', data: doc_reg_data });
      } catch (error){
        res.json({ msg: error.message });
      }
    }


    async get_Doctor_Details(req, res) {
      try {
        const doc_detail_data = await Doctor_Service.get_Doctor_Details();
        res.json({ msg: 'OK', data:doc_detail_data });
      } catch (error){
        res.json({ msg: error.message });
      }
    }


    async get_Doctor_Register_By_Id(req, res) {
      try {
        const doc_reg_id = req.params.id;
        const doc_reg = await Doctor_Service.get_Doctor_Register_By_Id(doc_reg_id);
        if (doc_reg) {
          res.json({ msg: 'OK', data: doc_reg });
        } else {
          res.status(404).json({ msg: 'Not found' });
        }
      } catch (error) {
        res.json({ msg: error.message });
      }
    }


    async get_Doctor_Details_By_Id(req, res) {
      try {
        const doc_d_id = req.params.id;
        const doc_detail = await BookService.get_Doctor_Details_By_Id(doc_d_id);
        if (book) {
          res.json({ msg: 'OK', data: doc_detail });
        } else {
          res.status(404).json({ msg: 'Not found' });
        }
      } catch (error) {
        res.json({ msg: error.message });
      }
    }



    async insert_Doctor_Registration(req, res) {
      try {
        const {
          doc_reg_first,
          doc_reg_last,
          doc_reg_email,
          doc_reg_phone,
          doc_reg_password,
          doc_reg_code,
          doc_reg_gender
        } = req.body;
    
        const result = await Doctor_Service.insert_into_Doctor_Registration(
          doc_reg_first,
          doc_reg_last,
          doc_reg_email,
          doc_reg_phone,
          doc_reg_password,
          doc_reg_code,
          doc_reg_gender
        );
    
        if (result) {
          res.status(201).json({ msg: 'Doctor registration data inserted successfully', data: result });
        } else {
          res.status(500).json({ msg: 'Failed to insert doctor registration data' });
        }
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
    }
    
    async insert_Doctor_Details(req, res) {
      try {
        const {
          doc_d_complete_name,
          doc_d_gender,
          doc_d_phone,
          doc_d_city,
          doc_d_country,
          doc_d_department,
          doc_d_experience,
          doc_d_registration,
          doc_d_qualification,
          doc_consultation_mode,
          doc_d_regular_fee,
          doc_d_disc_fee,
          doc_d_booking_gender,
          doc_d_payout_mode,
          doc_d_payment_password,
          doc_d_add1,
          doc_d_add2,
          doc_d_postal_code,
          doc_d_services,
          doc_d_specialization,
          doc_d_bio,
          doc_d_email
        } = req.body;
    
        const result = await Doctor_Service.insert_into_Doctor_Details(
          doc_d_complete_name,
          doc_d_gender,
          doc_d_phone,
          doc_d_city,
          doc_d_country,
          doc_d_department,
          doc_d_experience,
          doc_d_registration,
          doc_d_qualification,
          doc_consultation_mode,
          doc_d_regular_fee,
          doc_d_disc_fee,
          doc_d_booking_gender,
          doc_d_payout_mode,
          doc_d_payment_password,
          doc_d_add1,
          doc_d_add2,
          doc_d_postal_code,
          doc_d_services,
          doc_d_specialization,
          doc_d_bio,
          doc_d_email
        );
    
        if (result) {
          res.status(201).json({ msg: 'Doctor details data inserted successfully', data: result });
        } else {
          res.status(500).json({ msg: 'Failed to insert doctor details data' });
        }
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
    }


  



  }
  
  module.exports = new DoctorController();
  