import Lottie from "lottie-react";
import Loadingg from "../../../../lottiefiles/loading.json";

function Loading() {
  return (
    <div className="w-full h-[300px]">
      <Lottie animationData={Loadingg} />
    </div>
  );
}

export default Loading;
