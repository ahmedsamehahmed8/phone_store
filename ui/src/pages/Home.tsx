import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook/hook";
import productapi from "../store/products/act/actproductsslice";

import Categores from "@compontes/e-com/Categores";
import Toster from "@compontes/feedback/Toster";
import { reset_complete_from_user_checkoutslice } from "src/store/user_checkout/user_checkoutslice";
import Lottie from "lottie-react";
import loading_animation from "../../lottiefiles/loading.json";

function Home() {
  const dispatch = useAppDispatch();

  const { loading, product } = useAppSelector((state) => state.Product);
  console.log(loading);

  useEffect(() => {
    dispatch(productapi());
    dispatch(reset_complete_from_user_checkoutslice());
  }, [dispatch]);

  const l = product.map((e) => {
    return <Categores key={e.id} {...e} />;
  });

  return (
    <>
      {loading === "pending" ? (
        <div className="w-screen flex justify-center bg-slate-500 ">
          <Lottie animationData={loading_animation} />
        </div>
      ) : (
        <>
          <div className=" text-white bg-slate-500 flex justify-center flex-wrap gap-14 p-5">
            {l}
          </div>
          <Toster name="order" />
        </>
      )}
    </>
  );
}

export default Home;
