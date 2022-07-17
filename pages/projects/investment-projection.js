import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Investment Projection">
      <Container>
        <Title>
          Investment Projection <Badge>2022</Badge>
        </Title>
        <P>
          This simple website would be part of robo-advisories' websites where
          it would take in a user's base and monthly input and project how the
          investments would perform over a couple of years. It posts the data
          onto an API which would return the projection data, and the app would
          visualise the data on a graph for users.
        </P>
        <List my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/nathannsohh/Endowus_assessment">
              https://github.com/nathannsohh/Endowus_assessment
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/investment-projection-cover-pic.png"
          alt="investment-projection-1"
        />
        <WorkImage
          src="/images/investment-projection-screenshot-1.png"
          alt="investment-projection-2"
        />
        <WorkImage
          src="/images/investment-projection-screenshot-2.png"
          alt="investment-projection-3"
        />
      </Container>
    </Layout>
  )
}

export default Project
