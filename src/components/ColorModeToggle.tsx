import { Button, useColorMode } from "@chakra-ui/react";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Be {colorMode == "light" ? "Dark" : "Light"}
    </Button>
  );
};

export default ColorModeToggle;
