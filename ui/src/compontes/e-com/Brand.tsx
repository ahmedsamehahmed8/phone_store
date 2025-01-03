import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook/hook";
import brandsapi from "../../store/brands/act/actbrandsslice";
import Lottie from "lottie-react";
import loadingg from "../../../lottiefiles/loading.json";
import actgetonebrand from "src/store/brands/act/actgetonebrand";
import { useNavigate } from "react-router-dom";
import { reset_brand } from "src/store/brands/brandsslice";

function Brand() {
  type TT = {
    id: number;
    name: string;
    photo: string;
  };

  const nav = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(brandsapi());
  }, [dispatch]);

  const handlebrandname = (brandname) => {
    dispatch(reset_brand());
    dispatch(actgetonebrand(brandname));
    nav(`${brandname}`);
  };
  const ss = useAppSelector((state) => state.brand.brand);
  console.log(ss);

  const { brands, loading } = useAppSelector((state) => state.brand);
  const s = () => {
    if (loading === "pending") {
      return <Lottie animationData={loadingg} />;
    } else {
      return null;
    }
  };
  return (
    <>
      {brands.map((e: TT) => {
        return (
          <>
            {s}
            <button
              onClick={() => handlebrandname(e.name)}
              className=" flex flex-col items-center m-10"
            >
              <img src={e.photo} alt="sa" className="w-28 h-28" />
              <div key={e.id}>{e.name}</div>
            </button>
          </>
        );
      })}
    </>
  );
}

export default Brand;
