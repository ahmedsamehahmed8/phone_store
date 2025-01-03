import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "src/store/hook/hook";
import Loading from "@compontes/common/ainmation/Loading";
import productapi from "src/store/products/act/actproductsslice";
import { reset_complete_from_user_checkoutslice } from "src/store/user_checkout/user_checkoutslice";
import Categores from "@compontes/e-com/Categores";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

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
    <>
      <div className="flex flex-wrap gap-14 p-5">{l}</div>
    </>
  );
}

export default BBrand;
