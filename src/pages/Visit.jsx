import { Box, Heading, Text, Image, VStack, HStack, Link, Icon, Button } from "@chakra-ui/react";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <VStack spacing={6} textAlign="center">
        <Heading as="h1" size="xl">
          Visit Northampton Diner and Family Restaurant
        </Heading>
        <Image
          src="http://stock.calucid.com/fetch/calucid/northampton-diner-and-family-restaurant/exterior"
          alt="Northampton Diner Exterior"
          width="100%"
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />
        <Text fontSize="lg" maxW="800px">
          We are Now Open! Fresh Homemade Food made to order, with fresh local ingredients and vegetables.
        </Text>
      </VStack>

      <VStack spacing={6} mt={10} align="stretch">
        <HStack spacing={4} align="center">
          <Icon as={FaMapMarkerAlt} boxSize={6} />
          <Text fontSize="lg">1205 Main St, Northampton, PA 18067, USA</Text>
        </HStack>

        <HStack spacing={4} align="center">
          <Icon as={FaPhone} boxSize={6} />
          <Link href="tel:+16102622100" fontSize="lg" color="blue.500">
            (610) 262-2100
          </Link>
        </HStack>

        <HStack spacing={4} align="center">
          <Icon as={FaClock} boxSize={6} />
          <VStack align="start">
            <Text fontSize="lg">Monday - Friday: 7:00 AM - 9:00 PM</Text>
            <Text fontSize="lg">Saturday - Sunday: 8:00 AM - 10:00 PM</Text>
          </VStack>
        </HStack>
      </VStack>

      <Box mt={10}>
        <Heading as="h2" size="lg" textAlign="center" mb={4}>
          Find Us on the Map
        </Heading>
        <Box
          as="iframe"
          width="100%"
          height="400px"
          borderRadius="md"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZfNxROLqjeHORHMSc28B1mvxbvKHlukU&q=1205+Main+St,Northampton,PA+18067,USA`}
          allowFullScreen
        />
      </Box>

      <VStack spacing={6} mt={10}>
        <Heading as="h2" size="lg">
          Explore More
        </Heading>
        <HStack spacing={4}>
          <Button as={RouterLink} to="/" colorScheme="blue">
            Home
          </Button>
          <Button as={RouterLink} to="/menu" colorScheme="blue">
            Menu
          </Button>
          <Button as={RouterLink} to="/about" colorScheme="blue">
            About Us
          </Button>
          <Button as={RouterLink} to="/contact" colorScheme="blue">
            Contact
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Visit;