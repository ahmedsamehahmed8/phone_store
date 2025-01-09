import { Outlet } from "react-router-dom";
import { Header, Footer, Nav } from "../compontes/common";

function Mainlayout() {
  return (
    <>
      <div className="container mx-auto ">
        <Header />
        <div className="sticky top-0">
          <Nav />
        </div>
        <div className=" w-auto gap-10 flex flex-wrap h-auto">
          <Outlet />
        </div>
        <div className="bottom-0 ">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Mainlayout;
