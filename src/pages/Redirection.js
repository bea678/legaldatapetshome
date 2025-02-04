import { useEffect } from "react";

const Redirection = () => {
  useEffect(() => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.petshome";
  }, []);

  return <>Redirigiendo...</>;
};

export default Redirection;
