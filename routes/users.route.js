import express from 'express';
import { register, login, logout, getMe, deleteUser, updateDetails, updatePassword } from '../controllers/usersController.js';
import { authorize } from '../controllers/middleware/authorize.js';
import { registerRequirements, loginRequirements, updateDetailsRequirements, updatePasswordRequirements } from '../controllers/middleware/validate.js';
import { validateResult } from '../controllers/middleware/validationResults.js';

const router = express.Router();

router.post('/register', registerRequirements, validateResult, register);
router.post("/login", loginRequirements, validateResult, login);

router.get("/logout", authorize, logout);
router.get("/me", authorize, getMe);
router.put('/updatedetails', authorize, updateDetailsRequirements, validateResult, updateDetails);
router.put("/updatepassword", authorize, updatePasswordRequirements, validateResult, updatePassword);

// router.delete("/delete", authorize, deleteUser);
router.delete("/delete", deleteUser);


export default router