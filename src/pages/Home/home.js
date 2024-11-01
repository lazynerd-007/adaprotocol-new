import "./home.scss";
import { useState, useEffect } from "react";
import Header from "../../components/header";

import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { ImageGrid } from "../../components/Data/data";
import Authenticate from "../../components/authenticate";

const Home = () => {

/**FOR POPUP MODAL */

  const { isOpen, onOpen, onClose } = useDisclosure();

/****************/

/**STATE FOR NAME OF WALLET ON MODAL */

  const [popUpContent, setPopUpContent] = useState([]);
  const changecontent = (ImageGrid) => {
    setPopUpContent([ImageGrid]);
  };

/**************************/

  return (
    <>
      <Header />
      <div className="home-main">
        <div className="home-head">
          <h1>Decentralised Wallet Applications</h1>
          <h3>
            Following decentralised finance and blockchain applications support
            Wallets Validation wallets.
          </h3>
        </div>

        <div className="image-grid">
          {ImageGrid.map((ImageGrid) => {
            return (
              <div
                key={ImageGrid.id}
                className="img-card-main"
                onClick={onOpen}
              >
                <div onClick={() => changecontent(ImageGrid)}>
                  <img src={ImageGrid.img} alt="img" />
                  <p>{ImageGrid.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="home-foot">
          <h4>
            Open a pull request on{" "}
            <span>
              <a>Github</a>
            </span>{" "}
            to add your app here.
          </h4>
        </div>
      </div>

      <footer className="home-footer-main">
        <div>
          <span className="foot-icon">
            <FaDiscord className />
          </span>
          Discord
        </div>
        <div>
          <span className="foot-icon">
            {" "}
            <FaTwitter />
          </span>
          Twitter
        </div>
        <div>
          <span className="foot-icon">
            <FaGithub />
          </span>
          Github
        </div>
      </footer>

      {/*****************POP UP MODAL CONTENT*******/}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{""}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Authenticate />

            <div className="popup-wallet-name">
              {popUpContent.map((pop) => {
                return (
                  <div>
                    <p className="wallet-name1">{pop.desc}</p>
                    <p className="wallet-name2">
                      Connect to <span>{pop.desc}</span> and more
                    </p>
                  </div>
                );
              })}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      
       {/***********************************/}
    </>
  );
};

export default Home;
