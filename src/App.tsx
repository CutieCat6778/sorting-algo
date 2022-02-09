import '@fontsource/open-sans/400.css'
import '@fontsource/space-mono/400.css'
import '@fontsource/archivo-black/400.css'

import {
  ChakraProvider, CSSReset,
} from "@chakra-ui/react"
import { Main } from "./page/Main"

export const App = () => (
  <ChakraProvider>
    <CSSReset/>
    <Main/>
  </ChakraProvider>
)
