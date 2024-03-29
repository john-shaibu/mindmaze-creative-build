import {
  Modal,
  ModalOverlay,
  ModalContent,
  Grid,
  Box,
  Container,
  Button,
  Text,
  Flex,
  VStack,
  Switch,
  HStack,
} from "@chakra-ui/react";

import { useGlobalState } from "./state/useGlobalState";
import {
  Logo,
  RankingLeaderBoard,
  LeaderboardRibbon,
  PlayIcon,
  CloseIcon,
  SettingsModalHeader,
  GameAnalysisRibbon,
  RankingIcon,
  SoundText,
  SoundEffectText,
} from "./icons";
import { formattime } from "./utils";

const Modals = ({ children }) => {
  const { globalState, showModal, hideModal, toggleSound, toggleSfx, setGameState } = useGlobalState();
  const { show: isOpen, modal: modalId, tryCount, timeSpent, streak, sound, sfx } = globalState;

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        blockScrollOnMount={false}
        isOpen={isOpen && modalId == "leaderboard"}
        onClose={hideModal}
        boxShadow="unset"
        isCentered={false}
      >
        <ModalOverlay
          backdropFilter={"blur(50px)"}
          bg={"hsla(213, 1005, 100%, .5)"}
        />

        <ModalContent sx={{ all: "unset" }}>
          <Grid
            placeContent="center"
            minHeight="100vh"
            position="relative"
            fontFamily="quicksand"
            gap={"12rem"}
            padding={"1em"}
          >
            <Box w="168px" mx="auto">
              <Logo />
            </Box>
            <Container
              maxW="415px"
              minW={"415px"}
              minH="415px"
              bg="primary.100.20"
              outline="8px solid white"
              borderRadius="16px"
              backdropFilter="blur(20px)"
              boxShadow="bg"
              position="relative"
              p="2em"
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"3em"}
            >
              <Box
                w="max-content"
                position={"absolute"}
                top={"-31%"}
                left={"0"}
                right={"0"}
                margin={"auto"}
              >
                <LeaderboardRibbon />
              </Box>

              <Box w="max-content">
                <RankingLeaderBoard></RankingLeaderBoard>
              </Box>

              <Text
                color={"#124DAC"}
                fontWeight={"700"}
                fontSize={"17px"}
                maxW={"17ch"}
                textAlign={"center"}
              >
                Oh, nothing yet. Check back later!!
              </Text>

              <Button
                rounded={"full"}
                bgGradient={"linear(to-r, #0096C7, #023E8A)"}
                color={"white"}
                boxShadow={"cta"}
                position={"relative"}
                _hover={{
                  'scaleX': 1.1,
                  'scaleY': 1.1,
                  transition: 'transform .3s ease-in-out'
                }}
                _before={{
                  bgBlendMode: "lighten",
                  boxShadow: "cta-inner",
                  content: '""',
                  inset: 0,
                  rounded: "full",
                  w: "100%",
                  pos: "absolute",
                }}
                height={"48px"}
                width={"170px"}
                display={"flex"}
                alignItems={"center"}
                gap={"16px"}
                padding={"8px 16px"}
                onClick={() => setGameState('start')}
              >
                <PlayIcon />
                Play game
              </Button>
            </Container>
            <Button
              rounded={"full"}
              bgGradient={"linear(to-r, #0096C7, #023E8A)"}
              color={"white"}
              boxShadow={"cta"}
              position={"relative"}
              _hover={{
                'scaleX': 1.1,
                'scaleY': 1.1,
                transition: 'transform .3s ease-in-out'
              }}
              _before={{
                bgBlendMode: "lighten",
                boxShadow: "cta-inner",
                content: '""',
                inset: 0,
                rounded: "full",
                w: "100%",
                pos: "absolute",
              }}
              width={"72px"}
              height={"72px"}
              marginTop={"-48px"}
              mx={"auto"}
              onClick={hideModal}
            >
              <CloseIcon />
            </Button>
          </Grid>
        </ModalContent>

      </Modal>
      <Modal
        closeOnOverlayClick={false}
        blockScrollOnMount={false}
        isOpen={isOpen && modalId == "settings"}
        onClose={hideModal}
      >
        <ModalOverlay
          backdropFilter={"blur(50px)"}
          bg={"hsla(213, 1005, 100%, .5)"}
        />

        <ModalContent sx={{ all: "unset" }}>
          <Grid
            placeContent="center"
            minHeight="100vh"
            position="relative"
            fontFamily="quicksand"
            gap={"6rem"}
            padding={"1em"}
          >
            <Box w="168px" mx="auto">
              <Logo />
            </Box>
            <Container
              maxW="380px"
              minW={"380px"}
              minH="380px"
              bg="primary.100.20"
              outline="8px solid white"
              borderRadius="16px"
              backdropFilter="blur(20px)"
              boxShadow="bg"
              position="relative"
              p="2em"
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              gap={"3em"}
            >
              <Box w="max-content" mx="auto">
                <SettingsModalHeader />
              </Box>
              <VStack spacing="24px" w="80%" mx="auto" alignItems='flex-start'>
                <HStack
                  spacing="24px"
                  justifyContent="space-between"
                  alignItems="center"
                  w="100%"
                >
                  <Box w="100%">
                    <SoundText />
                  </Box>
                  <Box>
                    <Box><Switch isChecked={sound} onChange={toggleSound}></Switch></Box>
                  </Box>
                </HStack>
                <HStack
                  spacing="24px"
                  justifyContent="space-between"
                  alignItems="center"
                  w={'100%'}
                >
                  <Box w="100%">
                    <SoundEffectText />
                  </Box>
                  <Box>
                    <Box><Switch isChecked={sfx} onChange={toggleSfx}></Switch></Box>
                  </Box>
                </HStack>
              </VStack>
              <VStack spacing="24px" display="none">
                <HStack
                  spacing="24px"
                  justifyContent="space-between"
                  alignItems="center"
                  w={'100%'}
                >
                  <Box w="100%">
                    <SoundEffectText />
                  </Box>
                  <Box>
                    <Box><Switch isChecked={sfx} onChange={toggleSfx}></Switch></Box>
                  </Box>
                </HStack>
              </VStack>
            </Container>
            <Button
              rounded={"full"}
              bgGradient={"linear(to-r, #0096C7, #023E8A)"}
              color={"white"}
              boxShadow={"cta"}
              position={"relative"}
              _hover={{
                'scaleX': 1.1,
                'scaleY': 1.1,
                transition: 'transform .3s ease-in-out'
              }}
              _before={{
                bgBlendMode: "lighten",
                boxShadow: "cta-inner",
                content: '""',
                inset: 0,
                rounded: "full",
                w: "100%",
                pos: "absolute",
              }}
              width={"72px"}
              height={"72px"}
              mx={"auto"}
              onClick={hideModal}
            >
              <CloseIcon />
            </Button>
          </Grid>
        </ModalContent>
      </Modal>
      <Modal
        closeOnOverlayClick={false}
        blockScrollOnMount={false}
        isOpen={isOpen && modalId == "gameanalysis"}
        onClose={hideModal}
        boxShadow="unset"
        isCentered={false}
      >
        <ModalOverlay
          backdropFilter={"blur(50px)"}
          bg={"hsla(213, 1005, 100%, .5)"}
        />

        <ModalContent sx={{ all: "unset" }}>
          <Grid
            placeContent="center"
            minHeight="100vh"
            position="relative"
            fontFamily="quicksand"
            gap={"12rem"}
            padding={"1em"}
          >
            <Box w="168px" mx="auto">
              <Logo />
            </Box>
            <Container
              maxW="415px"
              minW={"415px"}
              minH="415px"
              bg="primary.100.20"
              outline="8px solid white"
              borderRadius="16px"
              backdropFilter="blur(20px)"
              boxShadow="bg"
              position="relative"
              p="2em"
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"2em"}
            >
              <Box
                w="max-content"
                position={"absolute"}
                top={"-30%"}
                left={"0"}
                right={"0"}
                margin={"auto"}
              >
                <GameAnalysisRibbon />
              </Box>

              <Flex
                width={"100%"}
                fontFamily={"quicksand"}
                fontSize={"18px"}
                letterSpacing={"1px"}
                lineHeight={"40px"}
                fontWeight={"bold"}
                color={"#023E8A"}
                flexDirection={"column"}
                gap={"0.8em"}
              >
                <Box
                  w="100%"
                  h="55px"
                  padding="0px 1em"
                  border="4px solid #023E8A"
                  bg="white"
                  boxShadow="inset 0px 0px 24px rgba(2, 62, 138, 0.25)"
                  minW={"100%"}
                  borderRadius="8px"
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Total time spent</Text>
                  <Text>{formattime(timeSpent)}</Text>
                </Box>
                <Box
                  w="100%"
                  h="55px"
                  padding="0px 1em"
                  border="4px solid #023E8A"
                  bg="white"
                  boxShadow="inset 0px 0px 24px rgba(2, 62, 138, 0.25)"
                  minW={"100%"}
                  borderRadius="8px"
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Tries</Text>
                  <Text>{tryCount}</Text>
                </Box>
                <Box
                  w="100%"
                  h="55px"
                  padding="0px 1em"
                  border="4px solid #023E8A"
                  bg="white"
                  boxShadow="inset 0px 0px 24px rgba(2, 62, 138, 0.25)"
                  minW={"100%"}
                  borderRadius="8px"
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Longest Streak</Text>
                  <Text>{ streak }</Text>
                </Box>
              </Flex>

              <Flex align="center" gap="2em" w="100%">
                <Button
                  rounded={"full"}
                  bgGradient={"linear(to-r, #0096C7, #023E8A)"}
                  color={"white"}
                  boxShadow={"cta"}
                  position={"relative"}
                  _hover={{
                    'scaleX': 1.1,
                    'scaleY': 1.1,
                    transition: 'transform .3s ease-in-out'
                  }}
                  _before={{
                    bgBlendMode: "lighten",
                    boxShadow: "cta-inner",
                    content: '""',
                    inset: 0,
                    rounded: "full",
                    w: "100%",
                    pos: "absolute",
                  }}
                  height={"56px"}
                  width={"56px"}
                  display={"flex"}
                  alignItems={"center"}
                  padding={"8px 16px"}
                  minW={"56px"}
                  minH={"56px"}
                  onClick={() => showModal('leaderboard')}
                >
                  <RankingIcon />
                </Button>
                <Button
                  rounded={"full"}
                  bgGradient={"linear(to-r, #0096C7, #023E8A)"}
                  color={"white"}
                  boxShadow={"cta"}
                  position={"relative"}
                  _hover={{
                    'scaleX': 1.1,
                    'scaleY': 1.1,
                    transition: 'transform .3s ease-in-out'
                  }}
                  _before={{
                    bgBlendMode: "lighten",
                    boxShadow: "cta-inner",
                    content: '""',
                    inset: 0,
                    rounded: "full",
                    w: "100%",
                    pos: "absolute",
                  }}
                  height="56px"
                  width="100%"
                  display={"flex"}
                  alignItems={"center"}
                  gap={"16px"}
                  padding={"8px 16px"}
                  fontSize="19px"
                  onClick={() => setGameState('start')}
                >
                  <PlayIcon />
                  Play again
                </Button>
              </Flex>
            </Container>
          </Grid>
        </ModalContent>
      </Modal>
      {children}
    </>
  );
};

export default Modals;
