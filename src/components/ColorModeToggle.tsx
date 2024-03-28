import { Button, Icon, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button colorScheme="blue" variant="ghost" onClick={toggleColorMode}>
      <Icon boxSize="25px" as={colorMode == "light" ? FiMoon : FiSun} />
    </Button>
  );
};

export default ColorModeToggle;
