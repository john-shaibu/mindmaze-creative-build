import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Stack,
  Text,
  VStack,
  Spacer,
  Container,
  Grid,
  SimpleGrid,
  AspectRatio,
  Wrap,
  Input,
  NumberInput,
  RadioGroup,
  Select,
  Textarea,
  Link,
  Radio,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  WrapItem,
  Switch,
} from "@chakra-ui/react";

export function _AspectRatio() {
  return (
    <AspectRatio maxW="400px" ratio={4 / 3}>
      <Image src="https://picsum.photos/300/200" alt="Sample Image" />
    </AspectRatio>
  );
}

export function _Box() {
  return <Box w="100%" />;
}

export function _Button() {
  return <Button variant="primary">Button</Button>;
}

export function _Center() {
  return <Center />;
}

export function _Container() {
  return <Container maxW="2xl" bg="blue.600" centerContent />;
}

export function _Divider() {
  return <Divider orientation="horizontal" />;
}

export function _Flex() {
  return <Flex />;
}

export function _Grid() {
  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    />
  );
}

export function _Heading() {
  return <Heading>Heading</Heading>;
}

export function _HStack() {
  return <HStack spacing="24px" />;
}

export function _Icon() {
  return <Icon></Icon>;
}

export function _Image() {
  return <Image src="https://picsum.photos/300/200" alt="Sample Image" />;
}

export function _Input() {
  return <Input placeholder="Basic usage" />;
}

export function _Link() {
  return (
    <Link href="https://chakra-ui.com" isExternal>
      Chakra Design system
    </Link>
  );
}

export function _NumberInput() {
  return (
    <NumberInput defaultValue={15} min={10} max={20}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}

export function _Radio() {
  return <Radio value="1" isDisabled />;
}

export function _RadioGroup() {
  return (
    <RadioGroup defaultValue="1">
      <Radio value="1" isDisabled />
    </RadioGroup>
  );
}

export function _Select() {
  return (
    <Select placeholder="Select option">
      <option value="option1">Option 1</option>
    </Select>
  );
}

export function _SimpleGrid() {
  return <SimpleGrid columns={[2, null, 3]} spacing="40px" />;
}

export function _Spacer() {
  return <Spacer />;
}

export function _Stack() {
  return <Stack direction={["column", "row"]} spacing="24px" />;
}

export function _Switch() {
  return <Switch />;
}

export function _Textarea() {
  return <Textarea placeholder="Here is a sample placeholder" />;
}

export function _Text() {
  return <Text>Text</Text>;
}

export function _VStack() {
  return <VStack spacing="24px" />;
}

export function _Wrap() {
  return (
    <Wrap>
      <WrapItem></WrapItem>
    </Wrap>
  );
}

export function __WrapItem() {
  return (
    <Wrap>
      <WrapItem></WrapItem>
    </Wrap>
  );
}

export function __CtaButton() {
  return (
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
    >
      Gradient Button
    </Button>
  );
}

export function __GameContainer() {
  return (
    <Container
      maxW="400px"
      minW={"348px"}
      minH="400px"
      bg="primary.100.20"
      outline="8px solid white"
      borderRadius="16px"
      backdropFilter="blur(20px)"
      boxShadow="bg"
      position="relative"
      p="2em"
    >
      Game Container
    </Container>
  );
}

export function __BodyContainer() {
  return (
    <Grid
      placeContent="center"
      minHeight="100vh"
      bgImage="background.svg"
      position="relative"
      fontFamily="quicksand"
      gap={"4rem"}
    >
      Body container
    </Grid>
  );
}

export function __IconsContainer() {
  return (
    <Flex gap={8} justifyContent={"center"}>
      Body container
    </Flex>
  );
}

export function __TileButton() {
  return (
    <Button
      display="inline-block"
      width={"100%"}
      height={"100%"}
      textAlign="center"
      position={"relative"}
      mx={"3px"}
      mb={"1px"}
      mt={"3px"}
      bg={'white'}
      className="tile-button"
      _before={{
        "--_colors": "#CAF0F8, #ADE8F4, #CAF0F8, #ADE8F4",
        content: '""',
        position: "absolute",
        "z-index": -1,
        inset: "-3px -3px 1px -3px",
        width: "calc(100% + 6px)",
        height: "calc(100% + 4px)",
        background:
          "conic-gradient(from var(--gradient-angle), var(--_pseudo-grad-colors))",
        "border-radius": "inherit",
      }}
    ></Button>
  );
}

export function __Modal() {
  return <Modal></Modal>;
}

export function __ModalOverlay() {
  return <ModalOverlay></ModalOverlay>;
}

export function __ModalHeader() {
  return <ModalHeader></ModalHeader>;
}

export function __ModalContent() {
  return <ModalContent></ModalContent>;
}

export function __ModalBody() {
  return <ModalBody></ModalBody>;
}

export function __ModalFooter() {
  return <ModalFooter></ModalFooter>;
}

return function __ToggleButton() {
  return <Switch isChecked={true} onChange={(e) => console.log(e)}></Switch>
}