import React from "react";

function StripesDesktop() {
  return (
    <div className="fixed top-[-250px] left-0 right-0 bottom-0 h-full w-full skew-y-[-12deg] -z-50">
      <div className="h-[1698px] absolute top-[-1000px] -z-10 left-0 right-0 bg-[rgb(247,250,252)]"></div>

      <div className="h-[40px] -z-10 absolute top-[668px] left-[calc(50%-700px)] right-[calc(50%+540px)] bg-keel-cyan"></div>
      <div className="h-[40px] bg-keel-paleBlurple z-10 absolute top-[698px] left-[-10px] right-[calc(50%+405px)]"></div>
      <div className="h-[10px] bg-keel-cobalt z-10 absolute top-[698px] left-[calc(50%-700px)] right-[calc(50%+540px)]"></div>

      <div className="h-[40px] bg-keel-paleBlurple z-10 absolute top-[658px] left-[calc(50%+430px)] right-[-10px]"></div>

      {/* LINES */}

      <div className="fixed top-[-100vh] bottom-[-100vh] left-[calc(50%-540px)] w-[1px] bg-[#eceef4] -z-10"></div>
      <div className="fixed top-[-100vh] bottom-[-100vh] left-[calc(50%+540px)] w-[1px] bg-[#eceef4] -z-10"></div>

      <div
        className="fixed top-[-100vh] bottom-[-100vh] left-[calc(50%-270px)] w-[1px] bg-stripe-line -z-10"
        style={{ backgroundSize: "1px 8px" }}
      ></div>
      <div
        className="fixed top-[-100vh] bottom-[-100vh] left-[calc(50%+270px)] w-[1px] bg-stripe-line -z-10"
        style={{ backgroundSize: "1px 8px" }}
      ></div>
      <div
        className="fixed top-[-100vh] bottom-[-100vh] left-[50%] -translate-x-1/2 w-[1px] bg-stripe-line -z-10"
        style={{ backgroundSize: "1px 8px" }}
      ></div>
    </div>
  );
}

export default StripesDesktop;
