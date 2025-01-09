import { ReactNode } from "react";

type tt = {
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  children: React.ReactNode;
};
const Loadding = ({ loading, error, children }: tt) => {
  console.log(loading);

  if (loading === "pending") {
    console.log("dfsa");

    return <div className="text-8xl"> wait </div>;
  }
  if (loading === "failed") {
    return <div> {error} </div>;
  }

  return <div>{children}</div>;
};

export default Loadding;
