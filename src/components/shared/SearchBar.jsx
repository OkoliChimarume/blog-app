import { InputGroup, InputLeftElement, Input } from "@chakra-ui/input";
import { FiSearch } from "react-icons/fi";
import { Box } from "@chakra-ui/react";

const SearchBar = ({ value, onChange, placeholder = "Search posts..." }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <Box mx="auto" px={4} width={!isMobile ? "50%" : "400px"}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          pl={4}
          color="gray.400"
          height="100%"
          display="flex"
          alignItems="center"
        >
          <FiSearch size={24} />
        </InputLeftElement>
        <Input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          width="100%"
          pl="60px"
          py={10}
          cursor="pointer"
          borderRadius="20px"
          border="0.4px solid"
          borderColor="gray.600" //not applying, inherited behaviour (applying in normal state))
          bg="transparent"
          fontSize="lg"
          color="inherit"
          _placeholder={{ color: "gray.500" }}
          _focus={{
            borderColor: "teal.400",
            boxShadow: "0 0 0 3px rgba(56, 178, 172, 0.5)",
            bg: "transparent",
          }}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
