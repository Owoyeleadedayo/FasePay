import { Box, Flex, Grid,  Heading, Text } from "@chakra-ui/react";

const SecondSlide = () => {
    const card = [
      {
        title: "Effortless International payments",
        no: 1,
        desc: "Receive payments securely from customers worldwide using our unique PayCode system.",
      },
      {
        title: "Secure transaction processing",
        no: 2,
        desc: "FasePay employs fraud prevention measures to protect both you and your customer",
      },
      {
        title: "Settlement in your currency",
        no: 3,
        desc: "You receive your funds in your preferred currency in seconds",
      },
      {
        title: "Flexibility for your customers",
        no: 4,
        desc: "You can make faster and secure payments to merchants in Africa ",
      },
    ];
  return (
    <>
      <Flex
        bgColor={"#f1f2f3"}
        width={"100%"}
        height={"600px"}
        p={"40px"}
        flexDir={"column"}
        gap={"20px"}
      >
        <Heading fontFamily={"Ubuntu"} fontSize={"50px"} color={"black"}>
          Send without limit:
          <br /> get paid seamlessly
        </Heading>
        <Text fontFamily={"Ubuntu"} fontSize={"26px"} color={"blue"}>
          Checkout benefit for our customer
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={"50px"}>
          {card.map((item, index) => (
            <Box
              width="500px"
              height="250px"
              bgColor="#473893"
              px="20px"
              py="20px"
              borderRadius="8px 50px 8px 8px" // Apply border radius to each corner
              display="flex"
              flexDirection="column"
              borderBottom={"5px solid black"}
              gap="30px"
            >
              <Flex key={index} flexDirection="column" color="white">
                <Text fontFamily="Ubuntu" fontSize="28px" maxW={"300px"}>
                  {item.title}
                </Text>
                <Flex flexDirection="row" gap={"30px"}>
                  <Text
                    fontFamily="Ubuntu"
                    fontSize="80px"
                    fontWeight={800}
                    color="green"
                  >
                    {item.no}
                  </Text>
                  <Text
                    fontFamily="Ubuntu"
                    fontSize="17px"
                    pt={"30px"}
                    fontWeight={500}
                  >
                    {item.desc}
                  </Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default SecondSlide;
