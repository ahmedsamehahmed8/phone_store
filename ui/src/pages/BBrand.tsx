import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "src/store/hook/hook";
import productapi from "src/store/products/act/actproductsslice";
import { reset_complete_from_user_checkoutslice } from "src/store/user_checkout/user_checkoutslice";
import Categores from "@compontes/e-com/Categores";
import Lottie from "lottie-react";
import loading_animation from "../../lottiefiles/loading.json";
function BBrand() {
  const dispatch = useAppDispatch();

  const { brand, loading } = useAppSelector((state) => state.brand);
  console.log(loading);

  useEffect(() => {
    dispatch(productapi());
    dispatch(reset_complete_from_user_checkoutslice());
  }, [dispatch]);

  const l = brand.map((e) => {
    return <Categores key={e.id} {...e} />;
  });

  return (
    <div className=" w-full bg-slate-500 flex flex-wrap justify-center">
      {loading === "pending" ? (
        <div className="">
          <Lottie animationData={loading_animation} />
        </div>
      ) : (
        <div className="flex justify-center flex-wrap gap-14 p-5 text-white">
          {l}
        </div>
      )}
    </div>
  );
}

export default BBrand;
