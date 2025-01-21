const express = require("express");

const {
  getCurrentCourseProgress,
  markCurrentLectureAsViewed,
  resetCurrentCourseProgress,
} = require("../../controllers/student-controller/course-progress-controller");

const router = express.Router();

router.get("/get/:userId/:courseId", getCurrentCourseProgress);
router.post("/mark-lecture-viewed", markCurrentLectureAsViewed)

module.exports = router;
