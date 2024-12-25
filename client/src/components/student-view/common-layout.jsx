import React from "react";
import { Outlet } from "react-router-dom";

export default function StudentViewCommonLayout() {
  return (
    <div>
      Common content
      <Outlet />
    </div>
  );
}
