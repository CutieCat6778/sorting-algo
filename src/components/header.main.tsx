import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { ArrayState } from "../interface/state";
import { bubble, Select, Quick } from "../utils/sorting";
import { Generate } from "../utils/tools.utils";

export const Header: FC<ArrayState> = ({ array, setArray }) => {
  const [size, setSize] = useState<number>(array.length);

  function GenerateNewArray() {
    const newArray = Generate(size);
    setArray(newArray);
  }

  function ChangeSize(e: React.ChangeEvent<HTMLInputElement>) {
    setSize(parseInt(e.currentTarget.value));
  }

  async function runBubble() {
    await bubble(array, setArray);
  }

  return (
    <Flex mt="50px" width={"100%"} flexDir={"column"} justifyContent={"center"}>
      <Box width={"100%"}>
        <Heading>
          Configurations
        </Heading>
        <Divider marginBottom="30px" marginTop="10px"/>
        <Flex justifyContent={"space-around"} alignItems={"center"}>
          <Button onClick={GenerateNewArray}>Generate new array</Button>
          <Box>
            <Text d="inline" textAlign={"center"} fontWeight={"600"}>
              Array size: {size}
            </Text>
            <Input
              type="range"
              min={10}
              max={100}
              p={"5px"}
              height={"15px"}
              maxWidth={"200px"}
              backgroundColor={"gray.400"}
              _focus={{
                boxShadow: "none",
              }}
              onChange={ChangeSize}
            />
          </Box>
        </Flex>
      </Box>
      <Box mt="50px">
        <Heading>
          Algorithms
        </Heading>
        <Divider marginBottom="30px" marginTop="10px"/>
        <Grid
          templateColumns={"repeat(3, 1fr)"}
          gap={4}
          textAlign={"center"}
          mt="30px"
        >
          <GridItem onClick={runBubble}>
            <Button>Bubble sort</Button>
          </GridItem>
          <GridItem onClick={() => {
            Select(array, setArray)
          }}>
            <Button>Select sort</Button>
          </GridItem>
          <GridItem onClick={() => {
            Quick(array, setArray)
          }}>
            <Button>Quick Sort</Button>
          </GridItem>
          <GridItem>
            <Button>Insertion Sort</Button>
          </GridItem>
          <GridItem>
            <Button>Heap Sort</Button>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};
