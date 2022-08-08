const express = require('express');
const router = express.Router();
const { getAllPicturies } = require('../repository');
const { check, validationResult } = require('express-validator');

router.get('/', async (req, res) => {
  // res.send('users');
  try {
    let allPicturies = await getAllPicturies();
    res.send(allPicturies);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

// router.post('/', [check('fullName', 'Введено слишком мало символов').isLength({ min: 4 }), check('phone', 'Номер телефона введен некорректтно').isLength({ min: 11 })], async (req, res) => {
//   const errors = validationResult(req);
//   let patientName = req.body.fullName;
//   let patientPhone = req.body.phone;

//   if (!errors.isEmpty()) {
//     return res.status(400).json({
//       errors: errors.array(),
//       message: 'Некорректный данные при регистрации',
//     });
//   }

//   const candidate = await Patient.findOne({ phone: patientPhone });

//   if (candidate) {
//     return res.status(400).json({ message: 'Такой пациент уже существует' });
//   }

//   let response = await addPatient(patientName, patientPhone);
//   res.status(201).json({ message: 'Пациент добавлен в базу' });
// });

module.exports = router;
