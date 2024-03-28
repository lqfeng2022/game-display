import { HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import ColorModeToggle from "./ColorModeToggle";

const NavBar = () => {
  return (
    <HStack padding="10px" margin={2} spacing={4}>
      <Link to="/">
        <Text as="b" whiteSpace="nowrap" fontSize="xl">
          G A M E s
        </Text>
      </Link>
      <SearchInput />
      <ColorModeToggle />
    </HStack>
  );
}; 

export default NavBar;
