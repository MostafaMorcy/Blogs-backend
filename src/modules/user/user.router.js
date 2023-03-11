import express from 'express';
import { validation } from '../../middleware/validation.js';
import * as userController from './user.controller.js'
import { signInSchema, signUpSchema } from './user.validation.js';
export const userRouter= express.Router();
userRouter.post('/signup',validation(signUpSchema),userController.signUp)
userRouter.post('/signin',validation(signInSchema),userController.signIn)