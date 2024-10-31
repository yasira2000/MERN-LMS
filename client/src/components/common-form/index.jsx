import { useState } from "react";
import { Button } from "../ui/button";
import FormControls from "./form-controls";

function CommonForm({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  isButtonDiabled = false,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      <Button className="mt-5 w-full" disabled={isButtonDiabled} type="submit">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
