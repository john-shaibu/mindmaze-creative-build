import { Modal, ModalOverlay, ModalContent, Grid, Box } from "@chakra-ui/react";

import { useModal } from "./state/useModal";
import { Logo } from "./icons";

const Modals = ({ children }) => {
  const { state, showModal, hideModal } = useModal();
  const { show: isOpen, modal: modalId } = state;

  return (
    <>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen && modalId == "leaderboard"}
        onClose={hideModal}
        boxShadow = 'unset'
        isCentered={false}
      >
        <ModalOverlay
          backdropFilter={"blur(50px)"}
          bg={"hsla(213, 1005, 100%, .5)"}
        />

        <ModalContent sx={{ all: 'unset' }}>
          <Grid
            placeContent="center"
            minHeight="100vh"
            bgImage="background.svg"
            position="relative"
            fontFamily="quicksand"
            gap={"4rem"}
          >
            <Box w="100%">
              <Logo />
            </Box>
          </Grid>
        </ModalContent>
      </Modal>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen && modalId == "settings"}
        onClose={hideModal}
      >
        <ModalOverlay
          backdropFilter={"blur(50px)"}
          bg={"hsla(213, 1005, 100%, .5)"}
        />
        <ModalContent></ModalContent>
      </Modal>
      {children}
    </>
  );
};

export default Modals;
