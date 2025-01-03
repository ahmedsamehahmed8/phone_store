import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook/hook";
import productapi from "../store/products/act/actproductsslice";

import Categores from "@compontes/e-com/Categores";
import Toster from "@compontes/feedback/Toster";
import { reset_complete_from_user_checkoutslice } from "src/store/user_checkout/user_checkoutslice";

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
    // <Loadding loading={loading} error={error}>
    <>
      <div className="flex flex-wrap gap-14 p-5">{l}</div>
      <Toster name="order" />
    </>
    // </Loadding>
  );
}

export default Home;
