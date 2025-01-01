import { Skeleton } from "@/components/ui/skeleton";
import { StudentContext } from "@/context/sudent-context";
import { fetchStudentViewCoursesDetailsService } from "@/services";
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

  const { params } = useParams();

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

  return <div>StudentViewCourseDetailsPage</div>;
}
