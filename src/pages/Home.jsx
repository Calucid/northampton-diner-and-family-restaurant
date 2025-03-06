import { Box, Button, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('http://stock.calucid.com/fetch/calucid/northampton-diner-and-family-restaurant/diner-exterior')"
        bgSize="cover"
        bgPosition="center"
        height={{ base: "80vh", md: "90vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
        px={6}
      >
        <VStack spacing={4} bg="rgba(0, 0, 0, 0.6)" p={6} borderRadius="md">
          <Heading fontSize={{ base: "3xl", md: "5xl" }}>Northampton Diner and Family Restaurant</Heading>
          <Text fontSize={{ base: "lg", md: "xl" }}>
            Fresh Homemade Food made to order, with fresh local ingredients and vegetables.
          </Text>
          <Link to="/menu">
            <Button colorScheme="yellow" size="lg">View Menu</Button>
          </Link>
        </VStack>
      </Box>

      {/* About Section */}
      <Flex direction={{ base: "column", md: "row" }} p={8} align="center">
        <Image
          src="http://stock.calucid.com/fetch/calucid/northampton-diner-and-family-restaurant/fresh-food"
          alt="Fresh Food"
          width={{ base: "100%", md: "50%" }}
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />
        <Box p={6} textAlign={{ base: "center", md: "left" }}>
          <Heading fontSize="2xl">About Us</Heading>
          <Text mt={4}>
            We take pride in serving fresh, homemade meals crafted with local ingredients. Join us for a delicious, made-to-order experience!
          </Text>
          <Link to="/about">
            <Button mt={4} colorScheme="yellow">Learn More</Button>
          </Link>
        </Box>
      </Flex>

      {/* Menu Preview */}
      <Box p={8} textAlign="center">
        <Heading fontSize="2xl">Our Menu</Heading>
        <Text mt={2}>Explore our delicious offerings made with fresh ingredients.</Text>
        <Flex mt={6} wrap="wrap" justify="center" gap={6}>
          <Image
            src="http://stock.calucid.com/fetch/calucid/northampton-diner-and-family-restaurant/breakfast"
            alt="Breakfast"
            width="250px"
            height="250px"
            objectFit="cover"
            borderRadius="md"
          />
          <Image
            src="http://stock.calucid.com/fetch/calucid/northampton-diner-and-family-restaurant/lunch"
            alt="Lunch"
            width="250px"
            height="250px"
            objectFit="cover"
            borderRadius="md"
          />
          <Image
            src="http://stock.calucid.com/fetch/calucid/northampton-diner-and-family-restaurant/dinner"
            alt="Dinner"
            width="250px"
            height="250px"
            objectFit="cover"
            borderRadius="md"
          />
        </Flex>
        <Link to="/menu">
          <Button mt={6} colorScheme="yellow">View Full Menu</Button>
        </Link>
      </Box>

      {/* Visit Us Section */}
      <Flex direction={{ base: "column", md: "row" }} p={8} align="center">
        <Box p={6} textAlign={{ base: "center", md: "left" }}>
          <Heading fontSize="2xl">Visit Us</Heading>
          <Text mt={4}>
            1205 Main St, Northampton, PA 18067, USA
          </Text>
          <Text fontWeight="bold">(610) 262-2100</Text>
          <Link to="/visit">
            <Button mt={4} colorScheme="yellow">Get Directions</Button>
          </Link>
        </Box>
        <Image
          src="http://stock.calucid.com/fetch/calucid/northampton-diner-and-family-restaurant/location"
          alt="Location"
          width={{ base: "100%", md: "50%" }}
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />
      </Flex>
    </Box>
  );
};

export default Home;