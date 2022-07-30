import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  chakra,
  Link,
  List,
  ListItem,
  Icon,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article.js'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import { BioSection, BioYear } from '../components/bio.js'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

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
            I am Nathan, a penultimate year Computer Science student in Nanyang
            Technological University's School of Computer Science and
            Engineering. I have a passion for all things tech and I am always
            willing to learn new skills and improve myself!
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Projects
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
          >
            <Heading as="h4" fontSize={18}>
              Languages
            </Heading>
            <Paragraph>
              Python, Java, C/C++, HTML, CSS, Javascript, SQL, Swift
            </Paragraph>
            <Heading as="h4" fontSize={18} mt={4}>
              Libraries &amp; Frameworks
            </Heading>
            <Paragraph>ReactJS, Flask, PostgreSQL, MySQL</Paragraph>
            <Heading as="h4" fontSize={18} mt={4}>
              Tools
            </Heading>
            <Paragraph>
              Git, Github, Postman, pgadmin, AWS RDS, AWS EC2, AWS Cognito
            </Paragraph>
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
            <BioYear>2018</BioYear>
            Graduated as a Reconnaissance Specialist in the Singapore Armed
            Forces.
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
            I enjoy Music, Travelling, Bouldering, playing Video Games and
            learning about new and emerging technologies.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Socials
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/nathannsohh" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @nathannsohh
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/nathansoh/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Nathan Soh
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/nathannsohh/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @nathannsohh
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
export { getServerSideProps } from '../components/chakra'
