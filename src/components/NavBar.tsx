import { HStack, Show, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeToggle from "./ColorModeToggle";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack
      justifyContent="space-between"
      padding="10px"
      margin={2}
      spacing={3}
    >
      <Link to="/">
        <Text as="b" whiteSpace="nowrap" fontSize="xl">
          G A M E s
        </Text>
      </Link>
      <Show above="sm">
        <SearchInput />
      </Show>
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
