import therapistmodel from "../models/therapistSchema.js";

const addTherapist = async (req, res) => {
  try {
    if (!req.isadminOrnot) {
      return res.status(400).send({
        message: "Only admin can add Therapist",
        success: false,
      });
    }
    const {
      name,
      description,
      location,
      number,
      languages,
      price,
      experience,
    } = req.body;
    console.log(JSON.parse(languages));

    const { filename } = req.file;
    console.log(filename);
    const nameExist = await therapistmodel.findOne({ name });
    console.log(nameExist);
    if (nameExist) {
      return res
        .status(400)
        .send({ message: "data already exists", success: false });
    }

    const finalResult = await new therapistmodel({
      name,
      description,
      location,
      number,
      languages: JSON.parse(languages),
      price,
      experience,
      image: filename,
    }).save();
    return res.status(200).send({
      message: "Added data successfully",
      success: true,
    });
    console.log(finalResult);
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

// getAllTherapists

const getAllTherapists = async (req, res) => {
  try {
    const allTherapist = await therapistmodel.find();
    res.status(200).send({
      messaage: "data fetched successfully",
      success: true,
      allTherapist,
    });
  } catch (e) {
    res.status(200).send({
      messaage: "something went wrong",
      success: false,
    });
  }
};

//get IndividualTherapist

const getIndividualTherapist = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await therapistmodel.findById(id);
    return res.status(200).send({
      success: true,
      message: "data fetched successfully",
      result,
    });
  } catch (e) {
    return res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
};
// get therapist based on condtion

const getBasedOnCondition = async (req, res) => {
  const { language, category, experience } = req.query;
  console.log(language, category, experience);

  if (language === "" && category === "" && experience === "zero") {
    const allTherapist = await therapistmodel.find();
    return res.status(200).send({
      messaage: "data fetched successfully",
      success: true,
      allTherapist,
    });
  }

  const query_language = language || "english";
  const query_category = category || "";
  const query_experience = experience || "0";

  const query = {
    languages: query_language,
  };

  try {
    const result = await therapistmodel.find(query);
    return res.status(200).send({
      success: true,
      message: "Data fetched successfully",
      result,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).send({
      success: false,
      message: err.message,
    });
  }
};

export {
  addTherapist,
  getAllTherapists,
  getIndividualTherapist,
  getBasedOnCondition,
};
