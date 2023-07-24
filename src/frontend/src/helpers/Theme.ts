// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

const colors = {
  YaleBlue: "#134074",
  BerkeleyBlue: "#13315c",
  OxfordBlue: "#0b2545",
  PowderBlue: "#8da9c4",
  MintCream: "#eef4ed",
};

// 2. Define the new text styles
export const theme = extendTheme({
  colors,
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    body: {
      fontSize: ["18px", "22px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  },
});
