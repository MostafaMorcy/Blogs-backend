import { blogModel } from "../../../database/models/user/blog/blog.model.js";
import { catchAsyncError } from "../../utils/catchAsyncError.js";

const addBlog =catchAsyncError( async (req, res) => {
  const { title, description } = req.body;
  await blogModel.insertMany({ title, description, createdBy:req.userId });
  res.json({ message: "success" });
})
const getAllBlogs = async (req, res) => {
      console.log(decoded);
      let blogs = await blogModel.find().populate("createdBy", "name-_id");
      res.json({ message: "success", blogs });
    
};
const updateBlog = async (req, res) => {
    const { title, description, _id } = req.body
    let blog = await blogModel.findByIdAndUpdate(_id, { title, description })
    if (blog) {
        res.json({ message: "success", blog })
    } else {
        res.json({ message: "blog not found" })
    }
};
const deleteBlog = async (req, res) => {
  const { _id } = req.body
  let blog = await blogModel.findByIdAndDelete({ _id })
  if (blog) {
      res.json({ message: "success", blog })
  } else {
      res.json({ message: "blog not found" })
  }
}
const getBlogsByUser = async (req, res) => {
  const {id}=req.params
  let blog = await blogModel.find({createdBy:id}).populate('createdBy','name-_id')
  res.json({ message: "success", blog })
};



export { addBlog, getAllBlogs, updateBlog,deleteBlog,getBlogsByUser };
