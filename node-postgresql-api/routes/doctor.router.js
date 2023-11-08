
const express = require('express');
const router = express.Router();
const Doctor_Controller = require('../controllers/doctor.controller');


router.get('/get_doc_registration',Doctor_Controller.get_Doctor_Register)
router.get('/get_doc_details',Doctor_Controller.get_Doctor_Details)

router.get('/get_doc_reg_by_id/:id',Doctor_Controller.get_Doctor_Register_By_Id)
router.get('/get_doc_details_by_id/:id',Doctor_Controller.get_Doctor_Details_By_Id)

router.post('/post_doc_registration',Doctor_Controller.insert_Doctor_Registration)
router.post('/post_doc_details',Doctor_Controller.insert_Doctor_Details)



module.exports = router;