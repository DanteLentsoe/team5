import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SidebarResponsive } from "../Sidebar/Sidebar";
import PropTypes from "prop-types";
import routes from "../../routes";
import { SetStateAction } from "react";
import { useRecoilState } from "recoil";
import { searchVideoAnalyticsVideo } from "../../store/atom";

const HeaderLinks = (props: {
  [x: string]: any;
  logoText?: any;
  secondary: any;
  variant?: any;
  children?: any;
  fixed?: any;
  onOpen?: any;
}) => {
  const { variant, children, fixed, secondary, onOpen, ...rest } = props;
  const [query, setQuery] = useRecoilState(searchVideoAnalyticsVideo);

  // Chakra Color Mode
  let mainTeal = useColorModeValue("teal.300", "teal.300");
  let inputBg = useColorModeValue("white", "gray.800");
  let mainText = useColorModeValue("gray.700", "gray.200");
  let searchIcon = useColorModeValue("gray.700", "gray.200");

  if (secondary) {
    mainText = "white";
  }

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value as string);
  };

  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row">
      <InputGroup
        cursor="pointer"
        bg={inputBg}
        borderRadius="15px"
        w={{
          sm: "128px",
          md: "200px",
        }}
        me={{ sm: "auto", md: "20px" }}
        _focus={{
          borderColor: { mainTeal },
        }}
        _active={{
          borderColor: { mainTeal },
        }}>
        <InputLeftElement
          children={
            <IconButton
              bg="inherit"
              borderRadius="inherit"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
              icon={<SearchIcon color={searchIcon} w="15px" h="15px" />}
              aria-label={""}></IconButton>
          }
        />
        <Input
          fontSize="xs"
          py="11px"
          color={mainText}
          onChange={handleChange}
          value={query as string}
          placeholder="Type here..."
          borderRadius="inherit"
        />
      </InputGroup>

      <SidebarResponsive
        logoText={props.logoText}
        // @ts-ignore
        secondary={props.secondary}
        routes={routes}
        // logo={logo}
        {...rest}
      />
    </Flex>
  );
};

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};

export default HeaderLinks;
