import { useAppSelector } from "src/store/hook/hook";
import { Navigate } from "react-router-dom";
import Toster from "@compontes/feedback/Toster";

function Protected_route({ children }: { children: React.ReactNode }) {
  const { accessToken } = useAppSelector((state) => state.authslice);

  if (!accessToken) {
    return (
      <>
        <Toster name="signin" />;
        <Navigate to="/signin?message=login_required" />
      </>
    );
  }

  return <>{children}</>;
}

export default Protected_route;
