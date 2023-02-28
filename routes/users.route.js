import express from 'express';
import { register, login, logout, getMe, deleteUser, updateDetails, updatePassword } from '../controllers/usersController.js';
import { authorize } from '../controllers/middleware/authorize.js';

const router = express.Router();

router.post('/register', register);
router.post("/login", login);

router.get("/logout", authorize, logout);
router.get("/me", authorize, getMe);
router.put('/updatedetails', authorize, updateDetails);
router.put("/updatepassword", authorize, updatePassword);

router.delete("/delete", authorize, deleteUser);

export default router