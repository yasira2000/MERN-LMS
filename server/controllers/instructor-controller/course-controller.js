const Course = require("../../models/Course");

const addNewCourse = async (req, res) => {
  try {
    const courseDetails = req.body;
    const newlyCreatedCourse = new Course(courseDetails);
    const saveCourse = await newlyCreatedCourse.save();

    if (saveCourse) {
      res.status(201).json({
        success: true,
        message: "Course created successfully",
        data: saveCourse,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};
const getAllCourses = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};
const getCourseDetails = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};
const updateCourseById = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

module.exports = {
  addNewCourse,
  getAllCourses,
  getCourseDetails,
  updateCourseById,
};
