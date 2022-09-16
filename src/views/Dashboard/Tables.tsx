import {
  Box,
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import TablesTableRow from "../../components/Tables/TablesTableRow";
import { useRecoilValue } from "recoil";
import { searchTextTableData, VideoAnalyticsType } from "../../store/atom";
import TABLE_DATA from "../../data/table.json";
import Fuse from "fuse.js";
import NoResults from "../../assets/svg/SVG";

const Tables = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const query = useRecoilValue(searchTextTableData);

  const options = {
    includeScore: true,
    keys: ["videoTitle", "views"],
  };

  const fuse = new Fuse(TABLE_DATA as VideoAnalyticsType[], options);

  //query results
  const results = fuse.search(query as string);

  const videoPerformanceResults: VideoAnalyticsType[] = query
    ? results.map((clients) => clients.item)
    : (TABLE_DATA as VideoAnalyticsType[]);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Video Performance Data
          </Text>
        </CardHeader>
        <CardBody>
          {videoPerformanceResults?.length > 0 ? (
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th pl="0px" color="gray.400">
                    Video Title
                  </Th>
                  <Th color="gray.400">Views</Th>
                  <Th color="gray.400">Dislikes</Th>
                  <Th color="gray.400">Comments</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {videoPerformanceResults?.map((row: VideoAnalyticsType) => {
                  return (
                    <TablesTableRow
                      videoTitle={row.videoTitle as string}
                      dislilkes={row.dislikes}
                      views={row.views}
                      comments={row.comments}
                    />
                  );
                })}
              </Tbody>
            </Table>
          ) : (
            <>
              <Text>
                No results found for <Text color={"#4FD1C5"}>{query}</Text>
              </Text>
              <Flex w={"full"} alignItems={"center"} justifyContent={"center"}>
                <Box
                  alignItems={"center"}
                  justifyContent={"center"}
                  height={{ sm: "24rem", lg: "28rem" }}
                  mt={{ base: 12, sm: 16 }}>
                  <NoResults />
                </Box>
              </Flex>
            </>
          )}
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Tables;
