import contact from "../models/contactformSchema.js";

const addContactForm = async (req, res) => {
  try {
    const { name, email, country, city, whatsapp, happylife } = req.body;
    const nameExist = await contact.findOne({ whatsapp });
    if (nameExist) {
      return res.status(200).send({
        message: "Data already exists.we will get back to you shortly.",
        success: true,
        exists: true,
      });
    }
    const finalResult = await new contact({
      name,
      email,
      country,
      city,
      whatsapp,
      happylife,
    }).save();
    return res.status(200).send({
      message:
        "we have recieved your contact details.Our member will contact you shortly.",
      success: true,
      exists: false,
    });
  } catch (err) {
    return res.status(400).send({
      message: "Please fill all the required fields.",
      success: false,
    });
  }
};

export { addContactForm };
