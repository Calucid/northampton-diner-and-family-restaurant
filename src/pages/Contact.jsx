import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Link, Stack, Text, Textarea, VStack, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Contact = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Contact Us
        </Heading>

        <Box>
          <Image
            src="http://stock.calucid.com/fetch/calucid/northampton-diner-and-family-restaurant/location"
            alt="Northampton Diner Location"
            width="100%"
            height={{ base: "200px", md: "400px" }}
            objectFit="cover"
            borderRadius="md"
          />
        </Box>

        <VStack spacing={4} align="stretch">
          <Text fontSize="lg" textAlign="center">
            Northampton Diner and Family Restaurant
          </Text>
          <Text textAlign="center">1205 Main St, Northampton, PA 18067, USA</Text>
          <HStack justify="center" spacing={4}>
            <Link href="tel:+16102622100">
              <IconButton aria-label="Call Us" icon={<FaPhone />} />
            </Link>
            <Link href="mailto:info@northamptondiner.com">
              <IconButton aria-label="Email Us" icon={<FaEnvelope />} />
            </Link>
            <Link href="https://www.facebook.com/northamptondiner" isExternal>
              <IconButton aria-label="Facebook" icon={<FaFacebook />} />
            </Link>
            <Link href="https://www.instagram.com/northamptondiner" isExternal>
              <IconButton aria-label="Instagram" icon={<FaInstagram />} />
            </Link>
          </HStack>
        </VStack>

        <Box as="form">
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Your Name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your Email" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message" />
            </FormControl>

            <Button colorScheme="blue" type="submit" width="full">
              Send Message
            </Button>
          </VStack>
        </Box>

        <HStack justify="center" spacing={6} pt={6}>
          <Link as={RouterLink} to="/" fontSize="lg">
            Home
          </Link>
          <Link as={RouterLink} to="/about" fontSize="lg">
            About
          </Link>
          <Link as={RouterLink} to="/menu" fontSize="lg">
            Menu
          </Link>
          <Link as={RouterLink} to="/visit" fontSize="lg">
            Visit
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Contact;