import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  Container,
  Heading,
  Box,
  useColorModeValue,
  UnorderedList,
  ListItem,
  Divider,
  Link,
  Button,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { BioYear } from '../components/bio'
import { DownloadIcon } from '@chakra-ui/icons'

const Experience = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={25} mb={6}>
          Work Experience
        </Heading>
        <Section>
          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
            mt={3}
          >
            <Heading fontSize={20} variant="section-title" mt={1} mb={1}>
              Fullstack Developer Intern @ Kinexcs
            </Heading>
            <BioYear>May 2022 - Present</BioYear>

            <UnorderedList mt={3} fontSize={16} fontWeight="light">
              <ListItem>
                Worked in an Agile team that was in charge of making mobile
                applications.
              </ListItem>
              <ListItem>
                Developed an IOS Computer Vision application using Swift and
                Apple Vision.
              </ListItem>
              <ListItem>
                Built a production backend server from scratch using Flask,
                Nginx and Gunicorn with a PostgreSQL database and deployed it on
                AWS EC2.
              </ListItem>
              <ListItem>
                Worked with AWS services such as Cognito, RDS and EC2.
              </ListItem>
            </UnorderedList>
          </Box>
        </Section>
        <Divider />
        <Heading as="h3" fontSize={25} mb={6} mt={4}>
          Competitions
        </Heading>
        <Section>
          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
            mt={3}
          >
            <Heading fontSize={20} variant="section-title" mt={1} mb={1}>
              Shopee Code League 2021
            </Heading>
            <UnorderedList mt={3} fontSize={16} fontWeight="light">
              <ListItem>
                Competed against teams within Southeast Asia to solve problems
                in the categories of Data Analytics, Data Science and Data
                Structures and Algorithms.
              </ListItem>
            </UnorderedList>
          </Box>
          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
            mt={3}
          >
            <Heading fontSize={20} variant="section-title" mt={1} mb={1}>
              NUS Data Analytics Competition 2022
            </Heading>
            <UnorderedList mt={3} fontSize={16} fontWeight="light">
              <ListItem>
                A competition partnered with Grab, we competed against other
                teams in Singapore to find meaningful insights using Geospatial
                Analysis on the Grab-Posisi Dataset using Folium, a library on
                Python.
              </ListItem>
            </UnorderedList>
          </Box>
          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
            mt={3}
          >
            <Heading fontSize={20} variant="section-title" mt={1} mb={1}>
              NTU CampCode Hackathon 2020
            </Heading>
            <UnorderedList mt={3} fontSize={16} fontWeight="light">
              <ListItem>
                Created a chatbot for a participating company with the goal to
                reduce the strain on their operators and for their customers to
                have a generally better user experience when engaging with their
                company.
              </ListItem>
              <ListItem>Finished the competition as a finalist.</ListItem>
            </UnorderedList>
          </Box>
        </Section>
        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button leftIcon={<DownloadIcon />} colorScheme="teal">
              Complete CV
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}

export default Experience
