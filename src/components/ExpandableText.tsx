import { Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <>
      <Heading fontSize="2xl" color="gray.500" marginBottom={3}>
        Description
      </Heading>
      <Text fontSize="lg">
        {summary}
        <Button
          size="sm"
          marginLeft={1}
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
