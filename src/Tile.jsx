import { Box, Button } from "@chakra-ui/react";

export function Tile({ content: Content, flip, state }) {
  return (
    <>
      <Button
        display="inline-block"
        width={"100%"}
        height={"100%"}
        textAlign="center"
        position={"relative"}
        mx={"3px"}
        mb={"1px"}
        mt={"3px"}
        className="tile-button"
        _before={{
          "--_colors": "#CAF0F8, #ADE8F4, #CAF0F8, #ADE8F4",
          content: '""',
          position: "absolute",
          "z-index": -1,
          inset: "-3px -3px 1px -3px",
          width: "calc(100% + 6px)",
          height: "calc(100% + 4px)",
          "border-radius": "inherit",
        }}
        bgGradient={"var(--_bg-colors)"}
        data-state={state}
        key={Content}
        onClick={flip}
      >
        {state !== "start" ? (
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
            }}
          />
        ) : null}
      </Button>
    </>
  );
}
