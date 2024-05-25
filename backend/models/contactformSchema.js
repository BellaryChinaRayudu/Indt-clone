import mongoose from "mongoose";

const contatctFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    whatsapp: {
      type: String,
      required: true,
    },
    happylife: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const contact = mongoose.model("contactform", contatctFormSchema);

export default contact;
