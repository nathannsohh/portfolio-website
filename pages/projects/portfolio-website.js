import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'

const Project = () => {
  return (
    <Layout title="Portflio Website">
      <Container>
        <Title>
          Portfolio Website <Badge>2022</Badge>
        </Title>
        <P>
          This website would serve as a way to showcase my portfolio and
          experiences in conjunction with my actual resumé. I had a lot of fun
          developing this website and through making this website, I gained a
          deeper understanding of ReactJS and Next.js. While you're here reading
          more about this website, I would like to tell you to feel free to
          contact me through the{' '}
          <NextLink href="/contact">
            <Link>Contact Me</Link>
          </NextLink>{' '}
          page or drop me a message on my socials!
        </P>
        <List my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/nathannsohh/portfolio-website">
              https://github.com/nathannsohh/portfolio-website
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Next.js, ChakraUI, Framer Motion, Three.js, React Hook Form,
              EmailJS, Firebase
            </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Project
