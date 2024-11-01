import "./authenticate.scss";
import FormModal from "./Form/formModal";
import { useState, useEffect } from "react";

import { Spinner } from "@chakra-ui/react";

const Authenticate = () => {
  const [loading, setLoading] = useState(false);


/*************TIME OUT FOR SPINNER************/

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

/***************************/

  return (
    <>
      <div>
        {loading === false ? (
          <div className="popup-wallet-initialize">
            <p>Initializing...</p>
            <Spinner className="btn-load" />
          </div>
        ) : (
          <div className="popup-wallet-error">
            <p> Error connecting </p>
            <FormModal />
          </div>
        )}
      </div>
    </>
  );
};

export default Authenticate;
