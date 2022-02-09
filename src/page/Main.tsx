import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Header } from "../components/header.main";
import Navigation from "../components/navigation.main";
import { Section } from "../components/section.main";
import { Item } from "../interface/state";
import { Generate } from "../utils/tools.utils";

export function Main() {
  const [array, setArray] = useState<Item[]>(Generate(50));

  return (
    <Flex paddingX={{ base: "5vw", sm: "10vw", lg: "18vw", xl: "25vw", "2xl": "30vw" }} paddingY="20px" flexDir={"column"} justifyContent={"center"}>
      <Navigation/>
      <Header array={array} setArray={setArray}/>
      <Section array={array}/>
    </Flex>
  )
}