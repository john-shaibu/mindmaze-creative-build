import { extendTheme, defineStyleConfig } from "@chakra-ui/react";
import { switchAnatomy } from '@chakra-ui/anatomy'

import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    // ...
  },
  thumb: {
    bg: 'red.500',
  },
  track: {
    bg: 'gray.100',
    _checked: {
      bg: 'gray.100',
    },
  },
})

export const switchTheme = defineMultiStyleConfig({ baseStyle })

const Button = defineStyleConfig({
  baseStyle: {
    transition: 'none',
    _hover: {
      'background': 'unset',
      'background-image': 'unset'
    }
  }
})

export default extendTheme({
  components: {
    Button,
    Switch: switchTheme
  },
  colors: {
    'primary': {
      100: 'hsl(190, 77%, 88%)',
      '100.20': 'hsla(190, 77%, 88%, 0.2)',
      '100.50': 'hsla(190, 77%, 88%, 0.5)',
      200: 'hsl(190, 76%, 82%)',
      300: 'hsl(189, 75%, 75%)',
      400: 'hsl(190, 74%, 59%)',
      500: 'hsl(190, 100%, 42%)',
      600: 'hsl(195, 100%, 39%)',
      700: 'hsl(201, 100%, 36%)',
      800: 'hsl(214, 97%, 27%)',
      900: 'hsl(239, 94%, 19%)'
    }
  },
  shadows: {
    'bg': 'inset 0px 0px 40px hsla(214, 97%, 27%, .25), 0px 4px 8px -4px hsla(210, 32%, 10%, .08), 0px 16px 24px hsla(210, 32%, 10%, .08)',
    'cta': '0px 4px 12px hsla(214, 97%, 27%, .25)',
    'cta-inner': 'inset 0 -4px 17px #48CAE4'
  },
  fonts: {
    'brush': 'Pacifico',
    'quicksand': 'Quicksand'
  }
})