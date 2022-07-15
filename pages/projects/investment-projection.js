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
          This Flask application was my first dive into backend development and
          it was a way for me to learn and understand what a backend server was
          and how to create CRUD API endpoints. Through this, I also learned how
          to use tools such as Postman and pgAdmin to test the server and
          visualise the database.
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