import React from "react";
import Link from "../components/Link";
import Form from "./Form";

function FormPageWrapper() {
  return (
    <div className="max-w-382px lg:max-w-540px mx-auto relative z-50">
      <div className="mb-6 lg:mb-10 px-5">
        <img src="images/stripe-logo.svg" alt="" />
      </div>

      <div className="mb-8 flex justify-center">
        <Form />
      </div>

      <div className="px-6">
        <p className="text-sm text-gray-600">
          Don't have an account? <Link label="Sign up" weight="500" />
        </p>

        <div className="py-6 flex space-x-2 items-center">
          <Link label="© Stripe" variant={1} weight="bold" />
          <span>.</span>
          <Link label="Contact" variant={1} weight="bold" />
          <span>.</span>
          <Link label="Privacy & terms" variant={1} weight="bold" />
        </div>
      </div>
    </div>
  );
}

export default FormPageWrapper;
