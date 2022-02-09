import {
  Box,
  //Button,
  Flex,
  Heading,
  Image,
  Text,
  //Menu, MenuButton, MenuItem, MenuList, Text
} from "@chakra-ui/react";
import * as Chakra from "@chakra-ui/react";
import React from "react";
// import {
//   //ChevronDownIcon,
//   HamburgerIcon,
// } from "@chakra-ui/icons";

const Navigation: React.FC = () => {
  return (
    <Flex flexDir={"row"} justifyContent={"space-between"} alignItems={"center"}>
      <Box width={"118px"}>
        <Chakra.Link href="https://txzje.xyz">
          <Image
            src="https://cutiecat6778.github.io/cdn/logo/logo_118.png"
            alt="Logo"
          />
        </Chakra.Link>
      </Box>
      <Heading fontSize={"3xl"}>
        Sorting algorithm
      </Heading>
      <Text
        href="https://cv.txzje.xyz"
        _focus={{
          boxShadow: "none",
        }}
        _hover={{
          textDecoration: "underline",
        }}
        fontWeight={"600"}
        fontFamily={"Open Sans"}
      >
        Portfolio
      </Text>
      {/* <Menu autoSelect={false} isLazy>
        <MenuButton as={Button} _hover={{
          backgroundColor: "none"
        }} _focus={{boxShadow: "none"}} variant="ghost" rightIcon={<ChevronDownIcon />} d={{ base: "none", md: "flex" }} textAlign="center">
          Categories
        </MenuButton>
        <MenuList p={0}>
          <MenuItem>
            <Text width="100%">CV</Text>
          </MenuItem>
          <MenuItem>
            <Text width="100%">Sort</Text>
          </MenuItem>
          <MenuItem>
            <Text width="100%">Education</Text>
          </MenuItem>
          <MenuItem>
            <Text width="100%">Contact</Text>
          </MenuItem>
        </MenuList>
      </Menu> */}
      {/* <Menu autoSelect={false} isLazy>
        <MenuButton as={HamburgerIcon} 
          //d={{ base: "block", md: "none" }} 
          boxSize={"30px"} />
        <MenuList p={0} maxW="200px">
          <MenuItem>
            <Text fontSize="2xl" width={"100%"}>
              About
            </Text>
          </MenuItem>
          <MenuItem>
            <Text fontSize="2xl" width={"100%"}>
              Skills
            </Text>
          </MenuItem>
          <MenuItem>
            <Text fontSize="2xl" width={"100%"}>
              Education
            </Text>
          </MenuItem>
          <MenuItem>
            <Text fontSize="2xl" width={"100%"}>
              Contact
            </Text>
          </MenuItem>
          <MenuItem>
            <Text fontSize="2xl" width={"100%"}>
              Projects
            </Text>
          </MenuItem>
        </MenuList>
      </Menu> */}
    </Flex>
  );
};

export default Navigation;
