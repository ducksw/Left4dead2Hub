import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const PostSchema = new Schema({
  title: { type: String },
  text: { type: String },
  imageLink: { type: String },
})

export default model('PostSchema', PostSchema);  
