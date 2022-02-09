import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Item, SectionState } from "../interface/state";

export const Section: FC<SectionState> = ({ array }) => {
  let position = 0;

  function ResolveSeleted(selected: number) {
    switch(selected){
      case 0:
        return "gray.700"
      case 1:
        return "green.600"
      case 2:
        return "red.600"
      case 3: 
        return "yellow.600"
    }
  }

  return (
    <Flex justifyContent={"center"} mt="50px">
      {array ?  array.map((value: Item): any => {
        position++;
        return (
          <Box backgroundColor={ResolveSeleted(value.selected)} width={array.length + "%"} height={value.length * 2 + "px"} key={position} />
        );
      }) : null}
    </Flex>
  );
};
