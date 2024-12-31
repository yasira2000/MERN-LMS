const Course = require("../../models/Course");

const getAllStudentViewCourses = async (req, res) => {
  try {
    const coursesList = await Course.find({});

    if (coursesList.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No course found",
        data: [],
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Courses retrieved successfully!",
        data: coursesList,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getStudentViewCourseDetails = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};
