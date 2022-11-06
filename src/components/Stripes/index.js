import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import StripesDesktop from "./StripesDesktop";
import StripesMobile from "./StripesMobile";

function Stripes() {
  const isAbove1024px = useMediaQuery("(min-width: 1024px)");

  return isAbove1024px ? <StripesDesktop /> : <StripesMobile />;
}

export default Stripes;
