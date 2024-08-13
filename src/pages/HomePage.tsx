import {Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import SecondSlide from "../component/SendSlide";
import PlayStore from "../assets/Images/playstore.png"
import AppStore from "../assets/Images/apple (3).png"

const HomePage = () => {
    const Buttons = [
      {
        logo: AppStore,
        text: "Download on the",
        subtext: "App Store",
      },
      {
        logo: PlayStore,
        text: "Get it on",
        subtext: "Google Play",
      },
    ];
    
  return (
    <>
      <Flex
        width={"100%"}
        height={"600px"}
        bgColor={"white"}
        p={"50px"}
        position={"relative"}
      >
        <Flex
          flexDirection={"column"}
          maxW={"700px"}
          gap={"30px"}
          position={"relative"}
        >
          <Heading fontFamily={"Ubuntu"} fontSize={"50px"}>
            Easily send and receive money from your customers, with PayCode
          </Heading>

          <Text fontFamily={"Ubuntu"} fontSize={"26px"}>
            Whether it's business transactions or <br /> personal payments, our
            system makes it <br /> simple and secure to move funds with ease.
          </Text>
          <Flex gap={"50px"}>
            {Buttons.map((item, index) => (
              <Button
                key={index}
                bgColor="black"
                width="230px"
                height={"70px"}
                justifyContent={"center"}
                _hover={{
                  bgColor: "black",
                  border: "1px solid black",
                }}
              >
                <Flex width={"50px"} height={"50px"}>
                  <Image
                    src={item.logo}
                    width={"100%"}
                    height={"100%"}
                    alt={`Image ${index}`}
                    objectFit="cover"
                  />
                </Flex>
                <Flex
                  flexDirection={"column"}
                  alignItems={"start"}
                  paddingX={"5px"}
                >
                  <Text
                    fontFamily={"Ubuntu"}
                    fontSize={"16px"}
                    color={"white"}
                    _hover={{
                      color: "white",
                    }}
                  >
                    {item.text}
                  </Text>
                  <Text
                    fontFamily={"Ubuntu"}
                    fontSize={"30px"}
                    color={"white"}
                    _hover={{
                      color: "white",
                    }}
                  >
                    App Store
                  </Text>
                </Flex>
              </Button>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <SecondSlide />
    </>
  );
}

export default HomePage;
