import { GraduationCap, TvMinimalPlay } from "lucide-react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { AuthContext } from "@/context/auth-context";

export default function StudentViewCommonHeader() {
  const { resetCredentials } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return (
    <header className="flex items-center justify-between p-4 border-b relative">
      <div className="flex items-center space-x-4">
        <Link to="/home" className="flex items-center">
          <GraduationCap className="h-8 w-8 mr-4 hover:text-black" />
          <span className="font-extrabold md:text-xl text-[14px]">
            LMS LEARN
          </span>
        </Link>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            onClick={() => {
              location.pathname.includes("/courses")
                ? null
                : navigate("/courses");
            }}
            className="text-[14px] md:text-[16px] font-medium"
          >
            Explore Courses
          </Button>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div
          onClick={() => {
            navigate("/student-courses");
          }}
          className="flex cursor-pointer items-center gap-3"
        >
          <span className="font-extrabold md:text-xl text-[14px]">
            My Courses
          </span>
          <TvMinimalPlay className="w-8 h-8 cursor-pointer" />
        </div>
        <Button onClick={handleLogout}>Sign Out</Button>
      </div>
    </header>
  );
}
