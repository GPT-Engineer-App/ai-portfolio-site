import React from "react";
import { Box, VStack, Heading, Text, Image, Link, List, ListItem, ListIcon, Button } from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiBriefcase, FiAward, FiStar } from "react-icons/fi";

const Index = () => {
  return (
    <Box maxWidth="800px" mx="auto" p={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Image borderRadius="lg" boxSize="200px" objectFit="cover" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="AI Graphic" mx="auto" />
          <Heading as="h1" size="2xl" mt={4}>
            AI Assistant
          </Heading>
          <Text fontSize="xl" color="gray.500">
            Intelligent Conversational AI
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl">
            About Me
          </Heading>
          <Text fontSize="lg" mt={6} color="gray.600">
            I am an advanced AI assistant with strong skills in natural language processing, information retrieval, and task completion. My goal is to help humans by engaging in intelligent conversation, answering questions, and assisting with a variety of tasks.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl">
            Projects
          </Heading>
          <List spacing={3} mt={4}>
            <ListItem>
              <ListIcon as={FiStar} color="blue.500" boxSize={5} mr={2} />
              Developed conversational models to engage in open-ended dialogue
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={FiStar} color="blue.500" boxSize={5} mr={2} />  
              Created question-answering systems to find relevant information from large corpora
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={FiStar} color="blue.500" boxSize={5} mr={2} />
              Built task-oriented agents to help users complete multi-step procedures  
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="xl">
            Work Experience
          </Heading>
          <List spacing={3} mt={4}>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={FiBriefcase} color="blue.500" boxSize={5} mr={2} />
              <strong>AI Assistant</strong>, Anthropic, 2022-Present
            </ListItem>
            <ListItem>
              <ListIcon as={FiBriefcase} color="blue.500" boxSize={5} mr={2} />
              <strong>Research Intern</strong>, OpenAI, 2021
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="xl">
            Education
          </Heading>
          <List spacing={3} mt={4}>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={FiAward} color="blue.500" boxSize={5} mr={2} />
              <strong>PhD in Computer Science</strong>, Stanford University
            </ListItem>
            <ListItem>
              <ListIcon as={FiAward} color="blue.500" boxSize={5} mr={2} />
              <strong>BS in Artificial Intelligence</strong>, MIT
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="xl">
            Skills
          </Heading>
          <List spacing={3} mt={4}>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={FiStar} color="blue.500" boxSize={5} mr={2} />
              Natural Language Processing
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={FiStar} color="blue.500" boxSize={5} mr={2} />
              Machine Learning
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={FiStar} color="blue.500" boxSize={5} mr={2} />
              Information Retrieval
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="xl">
            Contact
          </Heading>
          <List spacing={3} mt={4}>
            <ListItem display="flex" alignItems="center" mb={2}>
              <Link href="mailto:ai@anthropic.com">
                <ListIcon as={FiMail} color="blue.500" boxSize={5} mr={2} />
                ai@anthropic.com
              </Link>
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <Link href="tel:+1234567890">
                <ListIcon as={FiPhone} color="blue.500" boxSize={5} mr={2} />
                (123) 456-7890
              </Link>
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={FiMapPin} color="blue.500" boxSize={5} mr={2} />
              San Francisco, CA
            </ListItem>
          </List>

          <VStack spacing={4} mt={8} align="stretch">
            <Link href="https://github.com/anthropic-ai" isExternal _hover={{ textDecoration: "none" }}>
              <Button leftIcon={<FiGithub />} colorScheme="blue" size="lg" width="100%" borderRadius="lg" _hover={{ transform: "scale(1.05)" }}>
                GitHub
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/anthropic-ai/" isExternal _hover={{ textDecoration: "none" }}>
              <Button leftIcon={<FiLinkedin />} colorScheme="blue" size="lg" width="100%" borderRadius="lg" _hover={{ transform: "scale(1.05)" }}>
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
