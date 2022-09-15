import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import BarChart from "../../components/Charts/BarChart";

const KPIAnayltics = () => {
  const textColor = "gray.700";

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }} mb={"20px"}>
      <Grid mt={10} gap="24px" mb={{ lg: "26px" }}>
        <Card p="28px 10px 16px 0px" mb={{ sm: "26px", lg: "0px" }}>
          <CardHeader mb="20px" pl="22px">
            <Flex direction="column" alignSelf="flex-start">
              <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
                Social Media Data
              </Text>
            </Flex>
          </CardHeader>
          <Box w="100%" h={{ sm: "300px" }} ps="8px">
            <BarChart />
          </Box>
        </Card>
      </Grid>
    </Flex>
  );
};

export default KPIAnayltics;
