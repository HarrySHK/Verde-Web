
const postgre = require('../database');

class Doctor_Module {
  
  async get_Doctor_Register() {
    const { rows } = await postgre.query('SELECT * FROM doctor_register');
    return rows;
  }

  async get_Doctor_Details() {
    const { rows } = await postgre.query('SELECT * FROM doctor_details');
    return rows;
  }


  async get_Doctor_Register_By_Id(doc_reg_id) {
    const { rows } = await postgre.query('SELECT * FROM doctor_register WHERE doc_reg_id = $1', [doc_reg_id]);
    return rows[0];
  }


  async get_Doctor_Details_By_Id(doc_d_id) {
    const { rows } = await postgre.query('SELECT * FROM doctor_details WHERE doc_d_id = $1', [doc_d_id]);
    return rows[0];
  }


  async insert_into_Doctor_Registration(doc_reg_first,doc_reg_last,doc_reg_email,doc_reg_phone,doc_reg_password,doc_reg_code,doc_reg_gender) {
    const sql = 'INSERT INTO doctor_register (doc_reg_first, doc_reg_last,doc_reg_email,doc_reg_phone,doc_reg_password,doc_reg_code,doc_reg_gender ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const { rows } = await postgre.query(sql, [doc_reg_first,doc_reg_last,doc_reg_email,doc_reg_phone,doc_reg_password,doc_reg_code,doc_reg_gender]);
    return rows[0];
  }


  async insert_into_Doctor_Details(doc_d_complete_name, doc_d_gender, doc_d_phone, doc_d_city, doc_d_country, doc_d_department, doc_d_experience, doc_d_registration, doc_d_qualification,doc_consultation_mode,doc_d_regular_fee,doc_d_disc_fee,doc_d_booking_gender,doc_d_payout_mode,doc_d_payment_password,doc_d_add1,doc_d_add2,doc_d_postal_code,doc_d_services,doc_d_specialization,doc_d_bio,doc_d_email) {
    const sql = 'INSERT INTO doctor_details (doc_d_complete_name, doc_d_gender, doc_d_phone, doc_d_city, doc_d_country, doc_d_department, doc_d_experience, doc_d_registration, doc_d_qualification,doc_consultation_mode,doc_d_regular_fee,doc_d_disc_fee,doc_d_booking_gender,doc_d_payout_mode,doc_d_payment_password,doc_d_add1,doc_d_add2,doc_d_postal_code,doc_d_services,doc_d_specialization,doc_d_bio,doc_d_email ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 ,$11 , $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22 ) RETURNING *';
    const { rows } = await postgre.query(sql, [doc_d_complete_name, doc_d_gender, doc_d_phone, doc_d_city, doc_d_country, doc_d_department, doc_d_experience, doc_d_registration, doc_d_qualification,doc_consultation_mode,doc_d_regular_fee,doc_d_disc_fee,doc_d_booking_gender,doc_d_payout_mode,doc_d_payment_password,doc_d_add1,doc_d_add2,doc_d_postal_code,doc_d_services,doc_d_specialization,doc_d_bio,doc_d_email]);
    return rows[0];
  }






  // async updateById(id, name, price) {
  //   const sql = 'UPDATE books SET name = $1, price = $2 WHERE book_id = $3 RETURNING *';
  //   const { rows } = await postgre.query(sql, [name, price, id]);
  //   return rows[0];
  // }

  // async deleteById(id) {
  //   const sql = 'DELETE FROM books WHERE book_id = $1 RETURNING *';
  //   const { rows } = await postgre.query(sql, [id]);
  //   return rows[0];
  // }
}

module.exports = new Doctor_Module();
