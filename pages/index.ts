import { useEffect } from "react";
import { useRouter } from "next/router";

// route to '/'
export const GateWay = () => {
  const router = useRouter();

  useEffect(() => {
    // const isLogin = window.localStorage.getItem("isLogin");
    // if (isLogin) {
    //   router.push("/Home");
    // } else {
    //   router.push("/Login");
    // }
    router.push("/login");
  });

  return null;
};

export default GateWay;
