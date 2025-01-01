import { Skeleton } from "@/components/ui/skeleton";
import { StudentContext } from "@/context/sudent-context";
import { fetchStudentViewCoursesDetailsService } from "@/services";
import { Globe } from "lucide-react";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function StudentViewCourseDetailsPage() {
  const {
    studentViewCourseDetails,
    setStudentViewCourseDetails,
    currentCourseDetailsId,
    setCurrentCourseDetailsId,
    loadingState,
    setLoadingState,
  } = useContext(StudentContext);

  const { id } = useParams();

  async function fetchStudentViewCoursesDetails() {
    const response = await fetchStudentViewCoursesDetailsService(
      currentCourseDetailsId
    );

    if (response.success) {
      setStudentViewCourseDetails(response.data);
      setLoadingState(false);
    } else {
      setStudentViewCourseDetails(null);
      setLoadingState(false);
    }
  }

  useEffect(() => {
    if (currentCourseDetailsId !== null) {
      fetchStudentViewCoursesDetails();
    }
  }, [currentCourseDetailsId]);

  useEffect(() => {
    if (id) {
      setCurrentCourseDetailsId(id);
    }
  }, [id]);

  if (loadingState) {
    return <Skeleton />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-800 text-white p-8 rounded-t-lg">
        <h1 className="text-3xl font-bold mb-4">
          {studentViewCourseDetails.title}
        </h1>
        <p className="text-xl mb-4">{studentViewCourseDetails.subtitle}</p>
        <div className="flex items-center space-x-4 mt-2 text-sm">
          <span>Created By {studentViewCourseDetails.instructorName}</span>
          <span>Created On {studentViewCourseDetails.date.split("T")[0]}</span>
          <span className="flex items-center">
            <Globe className="mr-1 h-4 w-4" />
            {studentViewCourseDetails.primaryLanguage}
          </span>
          <span>
            {studentViewCourseDetails.students.length}{" "}
            {studentViewCourseDetails.students.length > 1
              ? "Students"
              : "Student"}
          </span>
        </div>
      </div>
    </div>
  );
}
