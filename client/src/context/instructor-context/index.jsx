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
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
}
