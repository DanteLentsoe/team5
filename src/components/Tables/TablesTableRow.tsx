import { Badge, Flex, Td, Text, Tr, useColorModeValue } from "@chakra-ui/react";

type TableTypes = {
  videoTitle: string;
  dislilkes: string | null;
  views: string | null;
  comments: string | null;
};
const TablesTableRow = ({
  videoTitle,
  dislilkes,
  views,
  comments,
}: TableTypes) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%">
              {videoTitle}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Badge
          bg={"green.400"}
          color={"white"}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px">
          {views?.length ? views : "No Views"}
        </Badge>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {dislilkes}
          </Text>
        </Flex>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {comments}
        </Text>
      </Td>
    </Tr>
  );
};

export default TablesTableRow;
