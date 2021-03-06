import { extendTheme, theme as DefaultTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: '30em',
  '2sm': '44em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

DefaultTheme.breakpoints = {
  "base": "0em",
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

export const theme = extendTheme(DefaultTheme, {
  colors: {
    main: {
      blue: "#2e1284",
      cyan: "#58c6b5",
      yellow: "#f6d244",
      pink: "#f4b8be",
      red: "#ed695f",
      gray: "#e3e1e4"
    }
  },
  fonts: {
    heading: "Open Sans",
    mono: "Space Mono"
  },
  breakpoints: breakpoints,
})