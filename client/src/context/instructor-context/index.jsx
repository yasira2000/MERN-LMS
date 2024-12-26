import { courseLandingInitialFormData } from "@/config";
import { createContext, useState } from "react";

export const InstructorContext = createContext(null);

export default function InstructorProvider({ children }) {
  const [CourseLandingFormData, setCourseLandingFormData] = useState(
    courseLandingInitialFormData
  );

  return (
    <InstructorContext.Provider
      value={{ CourseLandingFormData, setCourseLandingFormData }}
    >
      {children}
    </InstructorContext.Provider>
  );
}
