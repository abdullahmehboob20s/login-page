import React from "react";
import Stripes from "../components/Stripes";
import FormPageWrapper from "../layouts/FormPageWrapper";

function FormPage() {
  return (
    <div className="pt-7 lg:pt-14 px-4">
      <Stripes />
      <FormPageWrapper />
    </div>
  );
}

export default FormPage;
