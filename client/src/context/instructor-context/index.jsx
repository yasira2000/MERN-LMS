import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
import { createContext, useState } from "react";

export const InstructorContext = createContext(null);

export default function InstructorProvider({ children }) {
  const [CourseLandingFormData, setCourseLandingFormData] = useState(
    courseLandingInitialFormData
  );

  const [mediaUploadProgress, setMediaUploadProgress] = useState(false);
  const [mediaUploadProgressPercentage, setMediaUploadProgressPercentage] =
    useState(0);

  const [courseCurriculumFormData, setCoureseCurriculumFormData] = useState(
    courseCurriculumInitialFormData
  );

  return (
    <InstructorContext.Provider
      value={{
        CourseLandingFormData,
        setCourseLandingFormData,
        courseCurriculumFormData,
        setCoureseCurriculumFormData,
        mediaUploadProgress,
        setMediaUploadProgress,
        mediaUploadProgressPercentage,
        setMediaUploadProgressPercentage,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
}
