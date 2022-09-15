import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  const date = new Date();
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px">
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}>
        &copy; {date.getFullYear()}, <Text as="span">Made By </Text>
        <Link color="teal.400" href="https://dantelentsoe.com" target="_blank">
          Dante Lentsoe
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
