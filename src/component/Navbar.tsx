import { Button, Flex, Heading, Link, } from "@chakra-ui/react";
import { IoIosPhonePortrait } from "react-icons/io";

const Navbar = () => {
    // const countries = [
    //   {
    //     code: "us",
    //     name: "United States",
    //     flag: "https://flagcdn.com/w320/us.png",
    //   },
    //   {
    //     code: "gb",
    //     name: "United Kingdom",
    //     flag: "https://flagcdn.com/w320/gb.png",
    //   },
    //   { code: "fr", name: "France", flag: "https://flagcdn.com/w320/fr.png" },
    // ];
  return (
    <>
      <Flex
        width={"100%"}
        px={"60px"}
        py={"20px"}
        bgColor={"#473893"}
        justifyContent={"space-between"}
      >
        <Flex>
          <Heading
            fontFamily={"Oswald"}
            fontWeight={600}
            color={"white"}
            textTransform={"uppercase"}
          >
            fasepay
          </Heading>
        </Flex>
        <Flex gap={"60px"}>
          <Button
            as={Link}
            href="/contactUs"
            fontFamily={"Ubuntu"}
            fontSize={"20px"}
            color={"white"}
            border={"none"}
            borderRadius={0}
            textDecoration={"none"}
            variant={"outline"}
          >
            Contact Us
          </Button>

          {/* <Menu>
            <MenuButton>
              <MenuList>
                {countries.map((country) => (
                  <Flex key={country.code}>
                    <Box>
                      <Image
                        src={country.flag}
                        boxSize="24px"
                        alt={`${country.name} flag`}
                        mr="2"
                      />
                      {country.name}
                    </Box>
                  </Flex>
                ))}
              </MenuList>
            </MenuButton>
          </Menu> */}

          {/* <Select
            bg="white"
            color="white"
            _focus={{ bg: "black", color: "white" }}
            _hover={{ bg: "black", color: "white" }}
            _expanded={{ bg: "black", color: "white" }}
            sx={{
              option: {
                backgroundColor: "black",
                color: "white",
                _hover: {
                  backgroundColor: "gray.600",
                },
                _focus: {
                  backgroundColor: "gray.700",
                },
              },
            }}
          >
            <option value="">
              {countries.map((country) => (
                <Flex key={country.code} flexDirection={"row"}>
                  <Image
                    src={country.flag}
                    boxSize="24px"
                    alt={`${country.name} flag`}
                    mr="2"
                  />
                  {country.name}
                </Flex>
              ))}
            </option>
          </Select> */}

          <Button
            border={"1px solid white"}
            fontFamily={'Ubuntu'}
            fontSize={"16px"}
            bgColor={"#473893"}
            color={"white"}
            py={"15px"}
            px={"15px"}
            borderRadius={"50px"}
            textDecoration={"none"}
            variant={"outline"}
          >
            <Flex fontSize={'28px'} pr={"4px"} fontWeight={'bold'}>
              <IoIosPhonePortrait />
            </Flex>
            Download App- It's free
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;
