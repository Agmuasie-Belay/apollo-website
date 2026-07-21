import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({

  colors:{
    brand:{
      500:"#2337A4",
      600:"#5B7CFF"
    }
  },

  config:{
    initialColorMode:"dark",
    useSystemColorMode:false
  },

  // fonts:{
  //   heading:"Inter",
  //   body:"Inter"
  // }

});


export default theme;