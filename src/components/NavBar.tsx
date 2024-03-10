import { HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px" margin={2}>
      <Link to="/">
        <Text as="i" whiteSpace="nowrap" fontSize="lg">
          GAME HUB
        </Text>
      </Link>
      <SearchInput />
      <Text color="gray.300" whiteSpace="nowrap" fontSize="md" as="i">
        LI QIUFENG
      </Text>
    </HStack>
  );
};

export default NavBar;
