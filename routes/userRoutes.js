import express from 'express';

import { formularioLogin, formularioRegistro, formularioOlvidePassword } from '../controllers/userController.js';

const router = express.Router();

router.get('/login', formularioLogin);
router.get('/registro', formularioRegistro);
router.get('/olvide-password', formularioOlvidePassword);

router.get('/nosotros', function(req, res){
  res.send('About Us');
});

export default router;
