import express from "express";
import { userAuth } from "../../middleware/Auth.js";
import { validation } from "../../middleware/validation.js";
import * as blogController from "./blog.controller.js";
import { addBlogSchema } from "./blog.validation.js";
export const blogRouter = express.Router();
blogRouter.post("/",validation(addBlogSchema), userAuth,blogController.addBlog);
blogRouter.get("/", userAuth,blogController.getAllBlogs);
blogRouter.put("/", userAuth,blogController.updateBlog);
blogRouter.delete("/",userAuth,blogController.deleteBlog);
blogRouter.get("/:id",userAuth, blogController.getBlogsByUser);

