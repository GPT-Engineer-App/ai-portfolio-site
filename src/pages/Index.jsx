import React from "react";
import { Box, VStack, Heading, Text, Image, Divider, Link, List, ListItem, ListIcon, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";

const Index = () => {
  return (
    <Box maxWidth="800px" mx="auto" p={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Image borderRadius="full" boxSize="200px" objectFit="cover" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG9mJTIwQUklMjBhc3Npc3RhbnR8ZW58MHx8fHwxNzEyODI0NDc2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile" mx="auto" />
          <Heading as="h1" size="2xl" mt={4}>
            AI Assistant
          </Heading>
          <Text fontSize="xl">Intelligent Conversational AI</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl">
            About Me
          </Heading>
          <Text fontSize="lg" mt={4}>
            I am an advanced AI assistant with strong skills in natural language processing, information retrieval, and task completion. My goal is to help humans by engaging in intelligent conversation, answering questions, and assisting with a variety of tasks.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl">
            Projects
          </Heading>
          <List spacing={3} mt={4}>
            <ListItem>
              <ListIcon as={FaStar} color="green.500" />
              Developed conversational models to engage in open-ended dialogue
            </ListItem>
            <ListItem>
              <ListIcon as={FaStar} color="green.500" />
              Created question-answering systems to find relevant information from large corpora
            </ListItem>
            <ListItem>
              <ListIcon as={FaStar} color="green.500" />
              Built task-oriented agents to help users complete multi-step procedures
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="xl">
            Work Experience
          </Heading>
          <List spacing={3} mt={4}>
            <ListItem>
              <ListIcon as={FaBriefcase} color="green.500" />
              <strong>AI Assistant</strong>, Anthropic, 2022-Present
            </ListItem>
            <ListItem>
              <ListIcon as={FaBriefcase} color="green.500" />
              <strong>Research Intern</strong>, OpenAI, 2021
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="xl">
            Education
          </Heading>
          <List spacing={3} mt={4}>
            <ListItem>
              <ListIcon as={FaGraduationCap} color="green.500" />
              <strong>PhD in Computer Science</strong>, Stanford University
            </ListItem>
            <ListItem>
              <ListIcon as={FaGraduationCap} color="green.500" />
              <strong>BS in Artificial Intelligence</strong>, MIT
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="xl">
            Skills
          </Heading>
          <List spacing={3} mt={4}>
            <ListItem>
              <ListIcon as={FaStar} color="green.500" />
              Natural Language Processing
            </ListItem>
            <ListItem>
              <ListIcon as={FaStar} color="green.500" />
              Machine Learning
            </ListItem>
            <ListItem>
              <ListIcon as={FaStar} color="green.500" />
              Information Retrieval
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="xl">
            Contact
          </Heading>
          <List spacing={3} mt={4}>
            <ListItem>
              <Link href="mailto:ai@anthropic.com">
                <ListIcon as={FaEnvelope} color="green.500" />
                ai@anthropic.com
              </Link>
            </ListItem>
            <ListItem>
              <Link href="tel:+1234567890">
                <ListIcon as={FaPhone} color="green.500" />
                (123) 456-7890
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={FaMapMarkerAlt} color="green.500" />
              San Francisco, CA
            </ListItem>
          </List>

          <VStack spacing={4} mt={8} align="stretch">
            <Link href="https://github.com/anthropic-ai" isExternal>
              <Button leftIcon={<FaGithub />} colorScheme="gray" variant="outline" size="lg" width="100%">
                GitHub
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/anthropic-ai/" isExternal>
              <Button leftIcon={<FaLinkedin />} colorScheme="linkedin" size="lg" width="100%">
                LinkedIn
              </Button>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
