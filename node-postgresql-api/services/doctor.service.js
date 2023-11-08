
const Doc_Model = require('../models/doctor.model');

class DoctorService {
  async get_Doctor_Register() {
    return Doc_Model.get_Doctor_Register();
  }

   async get_Doctor_Details() {
    return Doc_Model.get_Doctor_Details();
  }

  async get_Doctor_Register_By_Id(doc_reg_id) {
    return Doc_Model.get_Doctor_Register_By_Id(doc_reg_id);
  }

  async get_Doctor_Details_By_Id(doc_d_id) {
    return Doc_Model.get_Doctor_Details_By_Id(doc_d_id);
  }

  async insert_into_Doctor_Registration(doc_reg_first,doc_reg_last,doc_reg_email,doc_reg_phone,doc_reg_password,doc_reg_code,doc_reg_gender) {
    return Doc_Model.insert_into_Doctor_Registration(doc_reg_first,doc_reg_last,doc_reg_email,doc_reg_phone,doc_reg_password,doc_reg_code,doc_reg_gender);
  }

  async insert_into_Doctor_Details(doc_d_complete_name, doc_d_gender, doc_d_phone, doc_d_city, doc_d_country, doc_d_department, doc_d_experience, doc_d_registration, doc_d_qualification,doc_consultation_mode,doc_d_regular_fee,doc_d_disc_fee,doc_d_booking_gender,doc_d_payout_mode,doc_d_payment_password,doc_d_add1,doc_d_add2,doc_d_postal_code,doc_d_services,doc_d_specialization,doc_d_bio,doc_d_email) {
    return Doc_Model.insert_into_Doctor_Details(doc_d_complete_name, doc_d_gender, doc_d_phone, doc_d_city, doc_d_country, doc_d_department, doc_d_experience, doc_d_registration, doc_d_qualification,doc_consultation_mode,doc_d_regular_fee,doc_d_disc_fee,doc_d_booking_gender,doc_d_payout_mode,doc_d_payment_password,doc_d_add1,doc_d_add2,doc_d_postal_code,doc_d_services,doc_d_specialization,doc_d_bio,doc_d_email);
  }
}

module.exports = new DoctorService();
