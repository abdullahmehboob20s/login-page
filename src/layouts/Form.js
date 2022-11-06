import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import LabelAndInput from "../components/LabelAndInput";
import Link from "../components/Link";

function Form() {
  return (
    <form className="form py-8 lg:py-14 px-5 lg:px-16 rounded bg-white w-full">
      <h2 className="text-[rgb(60,66,87)] text-2xl font-semibold mb-7">
        Sign in to your account
      </h2>
      <div className="space-y-8">
        <LabelAndInput label="Email" id="email" placeholder="" />
        <LabelAndInput
          label="Password"
          id="Password"
          placeholder=""
          type="password"
          LabelRightComponent={() => <Link label="Forgot your password?" />}
        />
      </div>
      <div className="mt-10 mb-8">
        <Checkbox
          title="Stay signed in for a week"
          id="week"
          defaultChecked={true}
        />
      </div>

      <Button label="Continue" />

      <div className="text-center mt-7">
        <Link to="/" label="Use single sign-on (SSO) instead" />
      </div>
    </form>
  );
}

export default Form;
