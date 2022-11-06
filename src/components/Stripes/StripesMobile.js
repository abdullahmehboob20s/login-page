import React from "react";

function StripesMobile() {
  return (
    <div className="fixed top-0 left-0 w-full h-full min-w-full -z-20 skew-y-[-12deg]">
      <div className="bg-[rgb(247,250,252)] h-[480px] -z-20 top-[-300px] absolute right-0 left-0"></div>

      <div className="h-[40px] w-[72px] 430px:w-[calc(50%-191px)] -z-10 absolute top-[180px] left-0 bg-keel-paleBlurple"></div>

      <div className="absolute w-[126px] -z-10 top-[50px] bg-keel-cyan left-[calc(50%+103px)] h-[40px]"></div>
      <div className="absolute w-[800px] -z-10 top-[80px] bg-keel-paleBlurple left-[calc(50%+67px)] h-[40px]"></div>
      <div className="absolute w-[126px] -z-10 top-[80px] bg-keel-cobalt left-[calc(50%+103px)] h-[10px]"></div>

      <div className="fixed top-[-100vh] bottom-[-100vh] left-4 430px:left-[calc(50%-190px)] w-[1px] bg-[#eceef4] -z-20"></div>
      <div className="fixed top-[-100vh] bottom-[-100vh] right-4 430px:left-[calc(50%+190px)] w-[1px] bg-[#eceef4] -z-20"></div>
    </div>
  );
}

export default StripesMobile;
