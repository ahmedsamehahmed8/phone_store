import React from "react";
import Lottie from "lottie-react";
import error from "../../../../lottiefiles/error.json";
function Error({ message }: string) {
  return (
    <div className="w-screen h-[1000px] flex flex-col justify-center items-center">
      <Lottie className="w-80 h-80" animationData={error} />
      <div>{message}</div>
    </div>
  );
}

export default Error;
