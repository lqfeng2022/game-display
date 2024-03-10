import { HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      {/* 1.1)add 'Link' component here */}
      <Link to="/">
        {/* 2.2)'objectFit': fix issue(image gets a little bit squash) */}
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <Text color="gray.300" whiteSpace="nowrap" fontSize="md" as="i">
        LI QIUFENG
      </Text>
    </HStack>
  );
};

export default NavBar;
