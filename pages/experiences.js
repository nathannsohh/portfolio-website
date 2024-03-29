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
import { BioYear } from '../components/bio'
import { DownloadIcon } from '@chakra-ui/icons'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { initializeApp } from 'firebase/app'

const Experience = () => {
  initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  })
  const storage = getStorage()
  const gsReference = ref(storage, process.env.NEXT_PUBLIC_FIREBASE_RESUME_URL)

  const downloadResume = () => {
    getDownloadURL(gsReference)
      .then(url => {
        const xhr = new XMLHttpRequest()
        xhr.responseType = 'blob'
        xhr.onload = event => {
          var a = document.createElement('a')
          a.href = window.URL.createObjectURL(xhr.response)
          a.download = 'final_Nathan_Soh_Resume'
          a.style.display = 'none'
          document.body.appendChild(a)
          a.click()
          var blob = xhr.response
        }
        xhr.open('GET', url)
        xhr.send()
      })
      .catch(error => {
        switch (error.code) {
          case 'storage/object-not-found':
            console.log('file does not exist')
            break
          case 'storage/unauthorized':
            console.log("User doesn't have permission to access the object")
            break
          case 'storage/unknown':
            console.log('Unknown error occurred, inspect the server response')
            break
        }
      })
  }

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
            <BioYear>May 2022 - Aug 2022</BioYear>

            <UnorderedList mt={3} fontSize={16} fontWeight="light">
              <ListItem>
                Kinexcs is a med-tech start-up that provides AI-driven digital
                therapy platforms and wearables to enable and empower people for
                mobility and a better life.
              </ListItem>
              <ListItem>
                Developed features for a Computer Vision IOS application using
                Swift and Apple Vision in an agile software development team.
              </ListItem>
              <ListItem>
                Built a backend server from the ground up using Flask, with a
                PostgreSQL database and deployed on AWS EC2.
              </ListItem>
              <ListItem>
                Used AWS Cognito to set up the authentication service for the
                app and AWS RDS to deploy the PostgreSQL database.
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
              Software Developer Intern @ Shopback
            </Heading>
            <BioYear>Jan 2023 - Present</BioYear>

            <UnorderedList mt={3} fontSize={16} fontWeight="light">
              <ListItem>
                Designed and developed custom Salesforce solutions using Apex
                and Lightning components.
              </ListItem>
              <ListItem>
                Created test classes and executed unit tests to ensure code
                coverage and validate solutions
              </ListItem>
              <ListItem>
                Participated in code reviews and contributed to the development
                of best practices and standards.
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
          <Button
            leftIcon={<DownloadIcon />}
            colorScheme="teal"
            onClick={downloadResume}
          >
            Complete CV
          </Button>
        </Box>
      </Container>
    </Layout>
  )
}

export default Experience
