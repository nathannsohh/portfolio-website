import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="YOUtility">
      <Container>
        <Title>
          YOUtility <Badge>2021</Badge>
        </Title>
        <P>
          YOUtility was a school project as part of NTU's Software Engineering
          module (CZ2006) geared towards smart nation applications. It collects
          data from a household's smart water and electricity meter and helps
          households track their water and electricity usage in real time. It
          would also be able to give personalised tips for the different
          appliances users use within their homes.
        </P>
        <List my={4}>
          <ListItem>
            <Meta>Frontend Repository</Meta>
            <Link href="https://github.com/nathannsohh/CZ2006_Frontend">
              github.com/nathannsohh/CZ2006_Frontend
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Backend Repository</Meta>
            <Link href="https://github.com/nathannsohh/CZ2006_Backend">
              github.com/nathannsohh/CZ2006_Backend
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Kotlin, NodeJS, MongoDB</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/YOUtility-screenshots-1.png"
          alt="Youtility-1"
        />
        <WorkImage
          src="/images/YOUtility-screenshots-2.png"
          alt="Youtility-2"
        />
      </Container>
    </Layout>
  )
}

export default Project
