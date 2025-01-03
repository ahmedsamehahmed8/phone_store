import React, { useEffect, useState } from "react";
import axios from "axios";

const useUsernameaval = () => {
  const [username, setUsername] = useState("");
  const [isaval, setIsaval] = useState("");

  const checkEmailAvailability = async (name_of_user: string) => {
    try {
      setUsername(name_of_user);
      const respons = await axios.get(
        `http://localhost:3000/users?email=${name_of_user}`
      );
      if (respons.data.length > 0) {
        setIsaval("notavilable");
      } else {
        setIsaval("avilable");
      }
    } catch (error) {
      setIsaval("معلش في ابيرور");
    }
  };
  return { username, isaval, checkEmailAvailability };
};
export default useUsernameaval;

// import { useState } from "react";
// import axios from "axios";

// type TStatus = "idle" | "checking" | "available" | "notAvailable" | "failed";

// const useCheckEmailAvailability = () => {
//   const [emailAvailabilityStatus, setEmailAvailabilityStatus] =
//     useState<TStatus>("idle");

//   const [enteredEmail, setEnteredEmail] = useState<null | string>(null);

//   const checkEmailAvailability = async (email: string) => {
//     setEnteredEmail(email);
//     setEmailAvailabilityStatus("checking");
//     try {
//       const response = await axios.get(`/users?email=${email}`);
//       if (!response.data.length) {
//         setEmailAvailabilityStatus("available");
//       } else {
//         setEmailAvailabilityStatus("notAvailable");
//       }
//     } catch (error) {
//       setEmailAvailabilityStatus("failed");
//     }
//   };

//   const resetCheckEmailAvailability = () => {
//     setEmailAvailabilityStatus("idle");
//     setEnteredEmail(null);
//   };

//   return {
//     emailAvailabilityStatus,
//     enteredEmail,
//     checkEmailAvailability,
//     resetCheckEmailAvailability,
//   };
// };
// export default useCheckEmailAvailability;
