import { Button, HStack, Icon, Link, useColorMode } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Button colorScheme="blue" variant="ghost" onClick={toggleColorMode}>
        <Icon boxSize="25px" as={colorMode == "light" ? FiMoon : FiSun} />
      </Button>
      <Link target="_blank" href="https://github.com/lqfeng2022/game-display">
        <Button colorScheme="blue" variant="ghost">
          <Icon boxSize="25px" as={FaGithub} />
        </Button>
      </Link>
    </HStack>
  );
};

export default ColorModeToggle;
