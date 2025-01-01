import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import VideoPlayer from "@/components/video-player";
import { StudentContext } from "@/context/sudent-context";
import { fetchStudentViewCoursesDetailsService } from "@/services";
import { CheckCircle, Globe, Lock, PlayCircle } from "lucide-react";
import React, { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

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
  const location = useLocation();

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

  useEffect(() => {
    if (!location.pathname.includes("course/details")) {
      setStudentViewCourseDetails(null);
      currentCourseDetailsId(null);
    }
  }, [location.pathname]);

  if (loadingState) {
    return <Skeleton />;
  }

  const getIndexOfFreePreviewUrl =
    studentViewCourseDetails !== null
      ? studentViewCourseDetails.curriculum.findIndex(
          (item) => item.freePreview
        )
      : -1;

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
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <main className="flex-grow">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What you'll learn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {studentViewCourseDetails.objectives
                  .split(",")
                  .map((objective, index) => (
                    <li className="flex items-start" key={index}>
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{objective}</span>
                    </li>
                  ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Course Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
              {studentViewCourseDetails.curriculum.map(
                (curriculumItem, index) => (
                  <li
                    className={`${
                      curriculumItem?.freePreview
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    } flex items-center mb-4`}
                  >
                    {curriculumItem.freePreview ? (
                      <PlayCircle className="mr-2 h-4 w-4" />
                    ) : (
                      <Lock className="mr-2 h-4 w-4" />
                    )}
                    <span>{curriculumItem.title}</span>
                  </li>
                )
              )}
            </CardContent>
          </Card>
        </main>
        <aside className="w-full md:w-[500px]">
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <div className="aspect-video mb-4 rounded-lg flex items-center justify-center">
                <VideoPlayer
                  url={
                    getIndexOfFreePreviewUrl !== -1
                      ? studentViewCourseDetails.curriculum[
                          getIndexOfFreePreviewUrl
                        ].videoUrl
                      : ""
                  }
                  width="450px"
                  height="250px"
                />
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold">
                  ${studentViewCourseDetails.pricing}
                </span>
              </div>
              <Button className='w-full'>Buy Now</Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
