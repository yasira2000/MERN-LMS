const express = require("express");

const {
  getStudentViewCourseDetails,
  getAllStudentViewCourses,
  checkCoursePurchasedInfo,
} = require("../../controllers/student-controller/course-controller");

const router = express.Router();

router.get("/get", getAllStudentViewCourses);
router.get("/get/details/:id", getStudentViewCourseDetails);
router.get("/purchase-info/:id/:studentId", checkCoursePurchasedInfo);

module.exports = router;
