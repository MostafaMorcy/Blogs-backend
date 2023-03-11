import Joi from "joi";

 const addBlogSchema = Joi.object({
    name: Joi.string().min(3).max(80).required(),
    email: Joi.string().min(3).max(80).required(),
    createdBy:Joi.string().hex().length(24)
  });
  export{
    addBlogSchema
  }