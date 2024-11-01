import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
 
} from "@chakra-ui/react";


import './formModal.scss'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Phrase from "./phrase";
import Keystore from "./keystore";
import Privatekey from "./privatekey";

const FormModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  return (
    <>
      <Button onClick={onOpen}>connect manually</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{""}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs>
              <TabList>
                <Tab>Phrase</Tab>
                <Tab>Keystore JSON</Tab>
                <Tab>Private Key</Tab>
              </TabList>

              <TabPanels>
                {/** Form for phrase */}
                <TabPanel>
               <Phrase/>
                </TabPanel>
                {/*****************************/}

                {/** Form for Keystore JSON */""}
                <TabPanel>
               <Keystore/>
                </TabPanel>
                {/****************************/}

                {/** Form for Private Key */}
                <TabPanel>
                <Privatekey/>
                </TabPanel>
                {/******************************/}

              </TabPanels>
            </Tabs>
          </ModalBody>


        </ModalContent>
      </Modal>
    </>
  );
};

export default FormModal;
