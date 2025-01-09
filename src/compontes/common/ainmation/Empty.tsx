import React from "react";
import Lottie from "lottie-react";
import empty from "../../../../lottiefiles/empty- 1733844202169.json";
function Empty({ message }: string) {
  return (
    <div className="w-full h-[300px] flex flex-col justify-center items-center">
      <Lottie className="w-80 h-80" animationData={empty} />
      <div className="text-white">{message}</div>
    </div>
  );
}

export default Empty;
