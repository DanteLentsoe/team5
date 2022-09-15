import { Flex, Grid, Text } from "@chakra-ui/react";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import LineChart from "../../components/Charts/LineChart";

const Dashboard = () => {
  const textColor = "gray.700";

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }} mb={"20px"}>
      <Grid mt={50} gap="24px" mb={{ lg: "26px" }}>
        <Card p="28px 10px 16px 0px" mb={{ sm: "26px", lg: "0px" }}>
          <CardHeader mb="20px" pl="22px">
            <Flex direction="column" alignSelf="flex-start">
              <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
                Population Overview
              </Text>
            </Flex>
          </CardHeader>
          <LineChart />
        </Card>
      </Grid>
    </Flex>
  );
};
export default Dashboard;
