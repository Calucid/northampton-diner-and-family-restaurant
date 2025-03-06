import { Box, Heading, Text, Image, VStack, Link, Button, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl" textAlign="center">
          About Northampton Diner and Family Restaurant
        </Heading>

        <Image
          src="http://stock.calucid.com/fetch/calucid/northampton-diner-and-family-restaurant/exterior"
          alt="Northampton Diner Exterior"
          width="100%"
          maxW="800px"
          height="auto"
          borderRadius="md"
        />

        <Text fontSize="lg" textAlign="center" maxW="800px">
          Welcome to <strong>Northampton Diner and Family Restaurant</strong>, your go-to spot for fresh, homemade food made to order. 
          Located in the heart of Northampton, PA, we take pride in using fresh local ingredients and vegetables to bring you delicious, 
          comforting meals in a warm and friendly atmosphere.
        </Text>

        <Image
          src="http://stock.calucid.com/fetch/calucid/northampton-diner-and-family-restaurant/interior"
          alt="Northampton Diner Interior"
          width="100%"
          maxW="800px"
          height="auto"
          borderRadius="md"
        />

        <Heading as="h2" size="xl">
          Our Commitment to Quality
        </Heading>
        <Text fontSize="lg" textAlign="center" maxW="800px">
          Every dish at Northampton Diner and Family Restaurant is crafted with care, ensuring that you get the freshest flavors 
          in every bite. Whether you're here for breakfast, lunch, or dinner, we have something for everyone.
        </Text>

        <Image
          src="http://stock.calucid.com/fetch/calucid/northampton-diner-and-family-restaurant/food"
          alt="Delicious Food at Northampton Diner"
          width="100%"
          maxW="800px"
          height="auto"
          borderRadius="md"
        />

        <Heading as="h2" size="xl">
          Visit Us Today!
        </Heading>
        <Text fontSize="lg" textAlign="center" maxW="800px">
          We are now open and can't wait to serve you! Stop by and experience our warm hospitality and delicious food.
        </Text>

        <Button as={RouterLink} to="/visit" colorScheme="teal" size="lg">
          Plan Your Visit
        </Button>
      </VStack>
    </Container>
  );
};

export default About;