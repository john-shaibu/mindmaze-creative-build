import { useRef, useState } from "react";
import confetti from "canvas-confetti";
import * as icons from "react-icons/gi";
import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Text,
  Grid,
} from "@chakra-ui/react";

import { Tile } from "./Tile";
import {
  RankingIcon,
  Logo,
  PlayIcon,
  SettingsIcon,
  BgRibbonIcon,
} from "./icons";
import { useGlobalState } from "./state/useGlobalState";

export const possibleTileContents = [
  icons.GiHearts,
  icons.GiWaterDrop,
  icons.GiDiceSixFacesFive,
  icons.GiUmbrella,
  icons.GiCube,
  icons.GiBeachBall,
  icons.GiDragonfly,
  icons.GiHummingbird,
  icons.GiFlowerEmblem,
  icons.GiOpenBook,
];

export function StartScreen({ start }) {
  const { globalState, showModal, hideModal, setSound, setSfx } = useGlobalState();
  const { show: isModalOpen, modal: modalId } = globalState;

  return (
    <>
      <Grid
        placeContent="center"
        minHeight="100vh"
        bgImage="background.svg"
        position="relative"
        fontFamily="quicksand"
        gap={"4rem"}
      >
        <Container
          maxW="400px"
          minH="400px"
          bg="primary.100.20"
          outline="8px solid white"
          borderRadius="16px"
          backdropFilter="blur(20px)"
          boxShadow="bg"
          position="relative"
          display="flex"
          alignItems="center"
          flexDirection="column"
          p="2em"
          gap="2em"
        >
          <Box
            w="100%"
            position="absolute"
            top={0}
            left="10%"
            width="max-content"
          >
            <BgRibbonIcon />
          </Box>

          <Logo />
          <Text color="#03045E" fontSize="18px" fontWeight="500">
            Flip over tiles looking for pairs
          </Text>

          <Text
            textAlign="center"
            color="#023E8A"
            fontSize="12px"
            fontWeight="500"
            lineHeight="20px"
            maxW="40ch"
          >
            Welcome to Mind Maze! Sharpen your mind with thrilling flips and
            challenges. Let’s embark on this adventure together.
          </Text>
          <Button
            rounded={"full"}
            bgGradient={"linear(to-r, #0096C7, #023E8A)"}
            color={"white"}
            boxShadow={"cta"}
            position={"relative"}
            display={"flex"}
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
            gap="16px"
            h="48px"
            w="120px"
            onClick={start}
          >
            <PlayIcon />
            <Text>Play</Text>
          </Button>
        </Container>

        <Flex gap={8} justifyContent={"center"}>
          <Button
            rounded={"full"}
            bgGradient={"linear(to-r, #0096C7, #023E8A)"}
            color={"white"}
            boxShadow={"cta"}
            position={"relative"}
            h="72px"
            w="72px"
            _hover={{
              'scaleX': 1.1,
              'scaleY': 1.1,
              transition: 'transform .3s ease-in-out'
            }}
            _before={{
              mixBlendMode: "lighten",
              boxShadow: "cta-inner",
              content: '""',
              inset: 0,
              rounded: "full",
              w: "100%",
              pos: "absolute",
            }}
            onClick={() => showModal("leaderboard")}
          >
            <Icon as={RankingIcon} h="32px" w="32px" />
          </Button>
          <Flex>
            <Button
              rounded={"full"}
              bgGradient={"linear(to-r, #0096C7, #023E8A)"}
              color={"white"}
              boxShadow={"cta"}
              position={"relative"}
              w={"72px"}
              h={"72px"}
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
              onClick={() => showModal("settings")}
            >
              <SettingsIcon></SettingsIcon>
            </Button>
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}

export function PlayScreen({ end }) {
  const startTime = useRef(new Date())
  const [tiles, setTiles] = useState(null);
  const [tryCount, setTryCount] = useState(0);
  const { globalState, showModal, hideModal, setSound, setSfx } = useGlobalState();
  const { show: isModalOpen, modal: modalId } = globalState;

  const getTiles = (tileCount) => {
    // Throw error if count is not even.
    if (tileCount % 2 !== 0) {
      throw new Error("The number of tiles must be even.");
    }

    // Use the existing list if it exists.
    if (tiles) return tiles;

    const pairCount = tileCount / 2;

    // Take only the items we need from the list of possibilities.
    const usedTileContents = possibleTileContents.slice(0, pairCount);

    // Double the array and shuffle it.
    const shuffledContents = usedTileContents
      .concat(usedTileContents)
      .sort(() => Math.random() - 0.5)
      .map((content) => ({ content, state: "start" }));

    console.log(shuffledContents.map((i, index) => `${index + 1} ${i.content.name}`).join(', \n'));
    setTiles(shuffledContents);
    return shuffledContents;
  };

  const flip = (i) => {
    // Is the tile already flipped? We don’t allow flipping it back.
    if (tiles[i].state === "flipped" || tiles[i].state === "matched") return;

    // How many tiles are currently flipped?
    const flippedTiles = tiles.filter((tile) => tile.state === "flipped");
    const flippedCount = flippedTiles.length;

    // Don't allow more than 2 tiles to be flipped at once.
    if (flippedCount === 2) return;

    // On the second flip, check if the tiles match.
    if (flippedCount === 1) {
      setTryCount((c) => c + 1);

      const alreadyFlippedTile = flippedTiles[0];
      const justFlippedTile = tiles[i];

      let newState = "start";

      if (alreadyFlippedTile.content === justFlippedTile.content) {
        confetti();
        newState = "matched";
      }

      // After a delay, either flip the tiles back or mark them as matched.
      setTimeout(() => {
        setTiles((prevTiles) => {
          const newTiles = prevTiles.map((tile) => ({
            ...tile,
            state: tile.state === "flipped" ? newState : tile.state,
          }));

          // If all tiles are matched, the game is over.
          if (newTiles.every((tile) => tile.state === "matched")) {
            setTimeout(() => end({ tryCount, timeSpent: new Date() - startTime.current }), 0);
          }

          return newTiles;
        });
      }, 1000);
    }

    setTiles((prevTiles) => {
      return prevTiles.map((tile, index) => ({
        ...tile,
        state: i === index ? "flipped" : tile.state,
      }));
    });
  };

  return (
    <>
      <Grid
        placeContent="center"
        minHeight="100vh"
        bgImage="background.svg"
        position="relative"
        fontFamily="quicksand"
        gap={"4rem"}
      >
        <Box w="max-content" mx={"auto"}>
          <Logo />
        </Box>

        <Flex w="100%" direction="column" align="center" gap="2em">
          <Button
            rounded={"full"}
            bgGradient={"linear(to-r, #0096C7, #023E8A)"}
            color={"white"}
            boxShadow={"cta"}
            position={"relative"}
            display="flex"
            gap={2}
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
            fontFamily="brush"
            letterSpacing="3%"
          >
            <Text letterSpacing="3%">Tries:</Text>
            <Text>{tryCount}</Text>
          </Button>

          <Container
            maxW="400px"
            minH="400px"
            bg="primary.100.20"
            outline="8px solid white"
            borderRadius="16px"
            backdropFilter="blur(20px)"
            boxShadow="bg"
            position="relative"
            p="24px"
            w={"400px"}
            h={"400px"}
          >
            <Grid
              templateColumns="repeat(4, 1fr)"
              gap={3}
              h={"100%"}
              justifyContent="center"
              justifyItems="center"
              alignItems="center"
              templateRows="repeat(4, 1fr)"
            >
              {getTiles(16).map((tile, i) => (
                <>
                  <Tile flip={() => flip(i)} {...tile} />
                </>
              ))}
            </Grid>
          </Container>
        </Flex>

        <Flex gap={8} justifyContent={"center"}>
          <Button
            rounded={"full"}
            bgGradient={"linear(to-r, #0096C7, #023E8A)"}
            color={"white"}
            boxShadow={"cta"}
            position={"relative"}
            w="72px"
            h="72px"
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
            onClick={() => showModal("settings")}
          >
            <SettingsIcon />
          </Button>
        </Flex>
      </Grid>
    </>
  );
}
