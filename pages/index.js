import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  chakra,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article.js'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import { BioSection, BioYear } from '../components/bio.js'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop),
})

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, welcome to my homepage!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Nathan Soh
            </Heading>
            <p>Software Engineer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/nathan.jpg"
                alt="Profile Image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>
            I am Nathan, a Computer Science sophomore studying in Nanyang
            Technological University's School of Computer Science and
            Engineering. I have a passion for all things tech and I am always
            willing to learn new skills and improve myself!
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Singapore.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Completed 'A' Levels in Pioneer Junior College.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Enrolled into the School of Computer Science and Engineering in
            Nanyang Technological University as a Computer Science
            Undergraduate.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked at Kinexcs as a Fullstack Developer Intern.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          <Paragraph>
            I enjoy Music, Travelling, Software Engineering and Bouldering.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
export { getServerSideProps } from '../components/chakra'
