import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  
  message:{
    type : String,
    required : true
  },

  status : {
    type : String,
    enum : ["read","unread"],
    default : "unread"
  }
});

const ContactUsModel = mongoose.model("ContactUs", contactUsSchema);

export default ContactUsModel;
